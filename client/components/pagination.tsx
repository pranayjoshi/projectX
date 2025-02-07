import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
  
  interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    totalItems: number
    itemsPerPage: number
  }
  
  export function Pagination({ totalItems, itemsPerPage, className = "", ...props }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const currentPage = 1 // This would typically come from state or URL
  
    return (
      <div className={`flex items-center justify-between ${className}`} {...props}>
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled={currentPage === 1}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex -space-x-px">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                className="rounded-none first:rounded-l-md last:rounded-r-md"
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="icon" disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" disabled={currentPage === totalPages}>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }
  
  