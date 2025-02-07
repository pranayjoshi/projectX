import { Pagination } from "@/components/pagination"
import { StatsCards } from "@/components/stats_cards"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircleDollarSign, FolderKanban, Search, Server, Users } from 'lucide-react'
const instaceStats = [
    {
      title: "Your Annual Instance Cost",
      value: "$",
      icon: CircleDollarSign,
    },
    {
      title: "Total Instances",
      value: "2",
      icon: FolderKanban,
    },
    {
      title: "Total Admins",
      value: "6",
      icon: Users,
    },
    {
      title: "Total Running Instances",
      value: "1",
      icon: Server,
    },
  ]
const instances = [
  {
    id: "i-1234567890abcdef0",
    name: "Production Server",
    type: "t2.micro",
    status: "running",
    launchTime: "2024-11-28 09:00:00",
    ipAddress: "192.168.1.100",
    admins: ["Admin1", "Admin2"]
  },
  {
    id: "i-0987654321fedcba1",
    name: "Development Server",
    type: "t2.small",
    status: "stopped",
    launchTime: "2024-11-28 08:30:00",
    ipAddress: "192.168.1.101",
    admins: ["Admin3"]
  }
]

export default function InstancesPage() {
  return (
    <div className="p-6 space-y-6">
      <StatsCards stats={instaceStats} />
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Instances</h1>
        <Button>Launch Instance</Button>
      </div>

      <Tabs defaultValue="instances">
        <TabsList>
          <TabsTrigger value="instances">Instances</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="instances" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-[300px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search instances..." className="pl-8" />
            </div>
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
                  <TableHead>Admins</TableHead>
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
                    <TableCell>Admin1, Admin2</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Pagination totalItems={50} itemsPerPage={10} />
        </TabsContent>

        <TabsContent value="logs">
          <p>Instance Logs will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

