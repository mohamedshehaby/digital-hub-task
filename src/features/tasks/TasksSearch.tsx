import { Input } from "@/components/ui/input.tsx";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const TasksSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // Local state for managing the input value
  const [inputValue, setInputValue] = useState(query);

  // Update the URL query param when input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearchParams((searchParams) => {
      searchParams.set("query", e.target.value);
      return searchParams;
    });
  };

  return (
    <Input
      placeholder="Search for tasks"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default TasksSearch;
