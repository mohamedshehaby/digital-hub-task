import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const sortBy = [
  { label: "From newest to oldest", value: "newest" },
  { label: "From oldest to newest", value: "oldest" },
];

export function TasksSorting() {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current sort value from the URL, default to "newest" if not set
  const currentSort = searchParams.get("sort") || "newest";

  const handleSortSelect = (sortValue: string) => {
    if (sortValue === currentSort) {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", sortValue);
    }
    setSearchParams(searchParams);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {sortBy.find((s) => s.value === currentSort)?.label ||
            "Select sort..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search sort option..." className="h-9" />
          <CommandList>
            <CommandEmpty>No sort option found.</CommandEmpty>
            <CommandGroup>
              {sortBy.map((sortOption) => (
                <CommandItem
                  key={sortOption.value}
                  value={sortOption.value}
                  onSelect={() => handleSortSelect(sortOption.value)}
                >
                  {sortOption.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentSort === sortOption.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
