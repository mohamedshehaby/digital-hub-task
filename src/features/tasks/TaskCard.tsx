import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task, TaskStatus } from "@/data/tasks.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

const TaskCard = ({
  task,
  onDelete,
  onEdit,
}: {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  const handleSaveChanges = () => {
    onEdit({ ...task, description, status });
    handleDialogClose();
  };

  let taskColor;

  switch (task.status) {
    case "Finished":
      taskColor = "text-blue-700";
      break;
    case "In Progress":
      taskColor = "text-yellow-700";
      break;
    case "Not Started":
      taskColor = "text-green-700";
      break;
    default:
      taskColor = "text-gray-700";
  }

  return (
    <Card>
      <CardHeader>
        <div className={"flex justify-between items-center"}>
          <CardTitle className={`${taskColor} text-xs`}>
            {task.status}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <DotsHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleDialogOpen}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    onDelete(task.id);
                  }}
                  className="text-red-600"
                >
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription className={"!mt-0"}>
          {task.description}
        </CardDescription>
      </CardHeader>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="description">Description</Label>
              <Select
                value={status}
                defaultValue={status}
                onValueChange={(newStatus) => {
                  setStatus(newStatus as TaskStatus);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="Finished">Finished</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSaveChanges}>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default TaskCard;
