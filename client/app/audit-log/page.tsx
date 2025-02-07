import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FolderKanban, Server, Users } from 'lucide-react'

const stats = [
  {
    title: "Projects Updated Today",
    value: "2",
    icon: FolderKanban,
  },
  {
    title: "Number of Users Logged Today",
    value: "17",
    icon: Users,
  },
  {
    title: "Users with Most Number of Operations",
    value: "jane.smith",
    icon: Server,
  },
]

const auditLogs = [
  {
    time: "2024-11-28 21:15:32",
    username: "john.doe",
    activity: "Logged in successfully",
    ipAddress: "192.168.1.100"
  },
  {
    time: "2024-11-28 21:14:15",
    username: "jane.smith",
    activity: "Created new project 'Analytics Dashboard'",
    ipAddress: "192.168.1.101"
  },
  {
    time: "2024-11-28 21:10:45",
    username: "admin.user",
    activity: "Modified resource permissions",
    ipAddress: "192.168.1.102"
  },
  {
    time: "2024-11-28 21:05:22",
    username: "sarah.wilson",
    activity: "Deleted test instance",
    ipAddress: "192.168.1.103"
  },
  {
    time: "2024-11-28 21:00:18",
    username: "mike.brown",
    activity: "Updated billing information",
    ipAddress: "192.168.1.104"
  }
]

export default function AuditLogPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold">Audit Log</h2>
          <p className="text-sm text-muted-foreground">
            A detailed log of all user activities and system events.
          </p>
        </div>
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Time</TableHead>
                <TableHead className="w-[150px]">Username</TableHead>
                <TableHead>Activity Description</TableHead>
                <TableHead className="w-[150px]">IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.time}>
                  <TableCell className="font-medium">{log.time}</TableCell>
                  <TableCell>{log.username}</TableCell>
                  <TableCell>{log.activity}</TableCell>
                  <TableCell>{log.ipAddress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

