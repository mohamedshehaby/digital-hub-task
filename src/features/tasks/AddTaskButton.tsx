import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea.tsx";
import { useState } from "react";
import { Task, TaskStatus } from "@/data/tasks.ts";

export function AddTaskButton({
  onAddTask,
}: {
  onAddTask: (task: Task) => void;
}) {
  const [description, setDescription] = useState("");
  function handleAddTask() {
    const task = {
      description,
      id: new Date().getTime(),
      status: "Not Started" as TaskStatus,
    };

    onAddTask(task);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="name"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild className="mr-4">
            <Button onClick={handleAddTask}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
