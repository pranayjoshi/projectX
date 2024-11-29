import { Eye, AlertTriangle, Trash2, Pencil } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const resources = [
  {
    id: 1,
    name: "EC2 stopped (EC2)",
    status: "stopped",
    monthlyCost: 74.80,
    connectionDetails: "JupyterHub",
    lastAction: {
      date: "02/22/2023 4:44:15 PM",
      by: "zs\\sd30913"
    }
  },
  {
    id: 2,
    name: "EMRRestoredEdit (EMR)",
    status: "running",
    monthlyCost: 227.20,
    connectionDetails: "R Studio, JupyterHub",
    lastAction: {
      date: "02/22/2023 7:11:08 PM",
      by: "zs\\sd30913"
    }
  }
]

export function ResourcesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Resources</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Est Monthly Cost</TableHead>
          <TableHead>Connection Details</TableHead>
          <TableHead>Tools</TableHead>
          <TableHead>Last Action on</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.id}>
            <TableCell className="font-medium">{resource.name}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${
                  resource.status === 'running' ? 'bg-green-500' : 'bg-gray-500'
                }`} />
                {resource.status}
              </div>
            </TableCell>
            <TableCell>${resource.monthlyCost.toFixed(2)}</TableCell>
            <TableCell>{resource.connectionDetails}</TableCell>
            <TableCell>
              <Button variant="link" className="h-auto p-0 text-primary">
                See Packages
              </Button>
            </TableCell>
            <TableCell>
              <div className="text-sm">
                {resource.lastAction.date}
                <div className="text-muted-foreground">
                  by {resource.lastAction.by}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <AlertTriangle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

