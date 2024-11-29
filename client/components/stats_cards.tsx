import { CircleDollarSign, FolderKanban, Server, Users, Binary } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Your Annual Instance Cost",
    value: "$",
    icon: CircleDollarSign,
  },
  {
    title: "Projects",
    value: "23",
    icon: FolderKanban,
  },
  {
    title: "Resources",
    value: "17",
    icon: Server,
  },
  {
    title: "Users",
    value: "22",
    icon: Users,
  },
  {
    title: "Algorithms",
    value: "43",
    icon: Binary,
  },
]

export function StatsCards() {
  return (
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
  )
}

