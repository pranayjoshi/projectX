import Link from 'next/link'
import { Search, Pause, Trash2, StopCircle } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ProjectResources } from "@/components/project_resources" 

export default function Dashboard() {
  const projects = [
    {
      id: "1",
      name: "content documentation",
      admins: [{ initials: "AS" }],
      launchDate: "04/19/2023",
      resources: [
        {
          name: "content123 (EC2)",
          status: "running",
          monthlyCost: 79.80,
        }
      ]
    },
    {
      id: "2",
      name: "testProject",
      admins: [{ initials: "PJ" }, { initials: "KS" }],
      launchDate: "04/10/2023",
      resources: []
    }
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-[300px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Enter keyword for search" className="pl-8" />
        </div>
        <Button>Add Project</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Admins</div>
                      <div className="flex -space-x-2">
                        {project.admins.map((admin) => (
                          <Avatar key={admin.initials} className="h-6 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs">
                              {admin.initials}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">Launched Date</div>
                      <div className="text-xs sm:text-sm">{project.launchDate}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ProjectResources resources={project.resources} />
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Pause className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Pause
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <StopCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Stop
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

