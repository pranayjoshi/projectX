import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Binary, CircleDollarSign, FolderKanban, Server, Users } from 'lucide-react';

type Stat = {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const defaultStats: Stat[] = [
  {
    title: "Your Annual̦ Total Cost",
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

type StatsCardsProps = {
  stats?: Stat[];
}

export function StatsCards({ stats = defaultStats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent/10">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}