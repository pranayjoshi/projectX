"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Pause, StopCircle, Trash2 } from 'lucide-react'

interface Resource {
  name: string
  status: string
  monthlyCost: number
}

interface ProjectResourcesProps {
  resources: Resource[]
}

export function ProjectResources({ resources }: ProjectResourcesProps) {
  if (resources.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        No Resources
      </div>
    )
  }

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30%] text-xs sm:text-sm">Resource</TableHead>
          <TableHead className="w-[20%] text-xs sm:text-sm">Status</TableHead>
          <TableHead className="w-[30%] text-xs sm:text-sm">Estimated Cost</TableHead>
          <TableHead className="w-[20%] text-xs sm:text-sm">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.name}>
            <TableCell className="text-xs sm:text-sm">{resource.name}</TableCell>
            <TableCell className="text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                {resource.status}
              </div>
            </TableCell>
            <TableCell className="text-xs sm:text-sm">${resource.monthlyCost.toFixed(2)}</TableCell>
            <TableCell>
              <TooltipProvider>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-8 sm:w-8">
                        <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Pause Resource</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-8 sm:w-8">
                        <StopCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Stop Resource</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-8 sm:w-8">
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete Resource</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

