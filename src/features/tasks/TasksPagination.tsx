import { useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TasksPagination = ({ tasksCount }: { tasksCount: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL, default to 1 if not present
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Define how many tasks are displayed per page
  const tasksPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(tasksCount / tasksPerPage);

  const goToPage = (pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", pageNumber.toString());
      return searchParams;
    });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem hidden={currentPage === 1}>
          <PaginationPrevious
            className={"cursor-pointer"}
            onClick={() => goToPage(currentPage - 1)}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                className={"cursor-pointer"}
                isActive={currentPage === pageNumber}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {totalPages > 5 && <PaginationEllipsis />}

        <PaginationItem hidden={currentPage === totalPages}>
          <PaginationNext
            className={"cursor-pointer"}
            onClick={() => goToPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TasksPagination;
