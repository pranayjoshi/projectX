import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StatsCards } from "@/components/stats_cards"

const instances = [
  {
    id: "i-1234567890abcdef0",
    name: "Production Server",
    type: "t2.micro",
    status: "running",
    launchTime: "2024-11-28 09:00:00",
    ipAddress: "192.168.1.100"
  },
  {
    id: "i-0987654321fedcba1",
    name: "Development Server",
    type: "t2.small",
    status: "stopped",
    launchTime: "2024-11-28 08:30:00",
    ipAddress: "192.168.1.101"
  }
]

export default function InstancesPage() {
  return (
    <div className="p-6 space-y-6">
      <StatsCards />
      
      <div className="flex justify-between items-center">
        <div className="relative w-[300px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search instances..." className="pl-8" />
        </div>
        <Button>Launch Instance</Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Instance ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Launch Time</TableHead>
              <TableHead>IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instances.map((instance) => (
              <TableRow key={instance.id}>
                <TableCell className="font-medium">{instance.id}</TableCell>
                <TableCell>{instance.name}</TableCell>
                <TableCell>{instance.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      instance.status === 'running' ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                    {instance.status}
                  </div>
                </TableCell>
                <TableCell>{instance.launchTime}</TableCell>
                <TableCell>{instance.ipAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

