"use client"

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
import { CircleDollarSign, FolderKanban, Pencil, PersonStandingIcon, Search } from 'lucide-react'
import { useState } from 'react'

const users = [
  {
    name: "aas_admin",
    email: "anirudh.makkar@zs.com",
    projects: "DO NOT DELETE",
    workspaceLevel: "Admin",
    workspaceBillingProject: "-"
  },
  {
    name: "a_dummy_user",
    email: "komal.h.patil@zs.com",
    projects: "DO NOT DELETE",
    workspaceLevel: "User",
    workspaceBillingProject: "-"
  }
]

const projects = [
  {
    name: "DO NOT DELETE",
    description: "Proj1",
    users: "apiadmin(admin), rctestuser1234(admin), zs\\ap19263(admin), zs\\ng27357(admin) +9 users"
  },
  {
    name: "AutomationProject",
    description: "Use only for automation",
    users: "automationadmin(admin), automationuser3"
  }
]

const usersStats = [
    {
      title: "Total Cost by all Users",
      value: "$",
      icon: CircleDollarSign,
    },
    {
      title: "User With Highest Purse",
      value: "aas_admin",
      icon: PersonStandingIcon,
    },
    {
        title: "User With Most Projects",
        value: "a_dummy_user",
        icon: FolderKanban,
    }
  ]
export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("users")

  return (
    <div className="p-6 space-y-6">
      <StatsCards stats={usersStats}/>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Users</h1>
          <Button>Sync Users</Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <div className="mt-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={activeTab === "users" ? "Search users..." : "Search projects..."} 
                className="pl-8" 
              />
            </div>
          </div>

          <TabsContent value="users" className="mt-4">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Workspace Level</TableHead>
                    <TableHead>Workspace Billing Project</TableHead>
                    <TableHead className="w-[50px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.projects}</TableCell>
                      <TableCell>{user.workspaceLevel}</TableCell>
                      <TableCell>{user.workspaceBillingProject}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Pagination className="mt-4" totalItems={154} itemsPerPage={10} />
          </TabsContent>

          <TabsContent value="projects" className="mt-4">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead className="w-[50px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.name}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.description}</TableCell>
                      <TableCell>{project.users}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

