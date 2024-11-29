import { Pencil, Trash2, Download, ExternalLink } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourcesTable } from "./resources_table"
import { Breadcrumb } from "./breadcrumb"

export default function ProjectPage() {
  const projectInfo = {
    name: "SukhadaAlteryx",
    launched: "01/16/2023 at 12:30:05 PM",
    lastAction: "02/05/2023 at 4:27:44 PM",
    projectCode: "9904253677",
    projectBudget: "$120",
    createdBy: "zs\sd30913",
    admins: [
      { initials: "SD" },
      { initials: "AU" },
    ],
    users: [
      { initials: "SU" },
      { initials: "AU" },
    ],
    links: {
      s3: "s3://aws-a0047-use1-1a-q-s3b-shrd-awb-data5099",
      iam: "arn:aws:iam::590989016449:role/aws-a0047-glbl-00-q-rol-shrd-awb-zssdqa_5099",
      versionControl: "zssdqa-q-bitbucket-5099"
    }
  }

  return (
    <div className="p-6">
      <Breadcrumb />
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">{projectInfo.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pencil className="h-4 w-4 mr-2" />
            Edit Project
          </Button>
          <Button variant="outline">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Project
          </Button>
        </div>
      </div>

      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Launched</div>
              <div>{projectInfo.launched}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Last Action</div>
              <div>{projectInfo.lastAction}</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Project Code</div>
              <div>{projectInfo.projectCode}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Project Budget</div>
              <div>{projectInfo.projectBudget}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Created By</div>
              <div>{projectInfo.createdBy}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Admins</div>
                <div className="flex -space-x-2">
                  {projectInfo.admins.map((admin) => (
                    <Avatar key={admin.initials} className="border-2 border-background">
                      <AvatarFallback className="bg-primary/10">
                        {admin.initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Users</div>
                <div className="flex -space-x-2">
                  {projectInfo.users.map((user) => (
                    <Avatar key={user.initials} className="border-2 border-background">
                      <AvatarFallback className="bg-secondary/10">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Project Links</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">S3 Link</span>
                  <Download className="h-4 w-4" />
                  <span className="text-sm text-muted-foreground truncate">
                    {projectInfo.links.s3}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">IAM Role</span>
                  <span className="text-sm text-muted-foreground truncate">
                    {projectInfo.links.iam}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Version Control Link</span>
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm text-primary truncate">
                    {projectInfo.links.versionControl}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="resources" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="audit">Audit logs</TabsTrigger>
            <TabsTrigger value="backups">Backups</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Total estimated cost per month
              <span className="ml-2 text-foreground font-medium">$302.00</span>
            </div>
            <Button>Add Resource</Button>
          </div>
        </div>

        <TabsContent value="resources" className="mt-0">
          <ResourcesTable />
        </TabsContent>
        <TabsContent value="audit">Audit logs content</TabsContent>
        <TabsContent value="backups">Backups content</TabsContent>
        <TabsContent value="applications">Applications content</TabsContent>
        <TabsContent value="algorithms">Algorithms content</TabsContent>
      </Tabs>
    </div>
  )
}

