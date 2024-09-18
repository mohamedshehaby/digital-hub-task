import TaskCard from "@/features/tasks/TaskCard.tsx";
import TasksPagination from "@/features/tasks/TasksPagination.tsx";
import TasksSearch from "@/features/tasks/TasksSearch.tsx";

import { AddTaskButton } from "@/features/tasks/AddTaskButton.tsx";
import { Task, tasks as initialTasksFromFile } from "@/data/tasks.ts";
import { useEffect, useMemo, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { TasksStatusesFilter } from "@/features/tasks/TasksStatusesFilter.tsx";
import { TasksSorting } from "@/features/tasks/TasksSorting.tsx"; // Import your Task type if needed

// Define action types
type Action =
  | { type: "ADD_TASK"; task: Task }
  | { type: "EDIT_TASK"; task: Task }
  | { type: "DELETE_TASK"; id: number };

// Define the reducer function
const tasksReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.task.id ? action.task : task,
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
const LOCAL_STORAGE_KEY = "tasks";

const Tasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const loadTasksFromLocalStorage = (): Task[] => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : initialTasksFromFile;
  };

  const [tasks, dispatch] = useReducer(tasksReducer, [], () =>
    loadTasksFromLocalStorage(),
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Ensure default search params are set only when missing
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (!newParams.has("page")) {
      newParams.set("page", "1");
    }
    if (!newParams.has("status")) {
      newParams.set("status", "all");
    }
    if (!newParams.has("query")) {
      newParams.set("query", "");
    }
    if (!newParams.has("sort")) {
      newParams.set("sort", "newest");
    }

    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams]);

  const addTask = (task: Task) => dispatch({ type: "ADD_TASK", task });
  const editTask = (task: Task) => dispatch({ type: "EDIT_TASK", task });
  const deleteTask = (id: number) => dispatch({ type: "DELETE_TASK", id });

  // Implement your filtering, sorting, and pagination logic here
  const query = searchParams.get("query") || "";
  const status = searchParams.get("status") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const sort = searchParams.get("sort") || "newest"; // Default sorting is "newest"

  const tasksPerPage = 10;

  const filteredTasks = useMemo(() => {
    let result = tasks.filter((task) =>
      task.description.toLowerCase().includes(query.toLowerCase()),
    );

    if (status !== "all") {
      result = result.filter(
        (task) => task.status.toLowerCase() === status.split("-").join(" "),
      );
    }

    // Sort tasks based on the selected sort option
    if (sort === "newest") {
      result.sort((a, b) => b.id - a.id);
    } else if (sort === "oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [query, sort, status, tasks]);

  const startIndex = (page - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center md:text-left">Tasks</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div
          className={
            "flex justify-between items-center gap-4 flex-wrap md:flex-nowrap"
          }
        >
          <TasksSearch />
          <TasksStatusesFilter />
          <TasksSorting />
        </div>
        <div className={"flex justify-between items-center gap-4"}>
          <AddTaskButton onAddTask={addTask} />
        </div>
      </div>

      {paginatedTasks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {paginatedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={editTask}
                onDelete={deleteTask}
              />
            ))}
          </div>

          <TasksPagination tasksCount={filteredTasks.length} />
        </>
      ) : (
        <p className="text-center font-semibold">No tasks found</p>
      )}
    </div>
  );
};

export default Tasks;
