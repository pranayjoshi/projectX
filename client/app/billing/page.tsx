"use client"

import { Pagination } from "@/components/pagination"
import { StatsCards } from "@/components/stats_cards"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AlertCircle, CircleDollarSign, DollarSignIcon, FolderKanban, Search } from 'lucide-react'

const billingData = [
  {
    projectName: "11",
    monthToDate: 0.00,
    lastMonth: 0.00,
    projectToDate: 0.00
  },
  {
    projectName: "12",
    monthToDate: 0.00,
    lastMonth: 0.00,
    projectToDate: 0.00
  },
  {
    projectName: "1234567890asdfghjklq1234567890asdfg...",
    monthToDate: 0.00,
    lastMonth: 0.00,
    projectToDate: 0.00
  },
  {
    projectName: "13",
    monthToDate: 0.00,
    lastMonth: 0.00,
    projectToDate: 0.01
  },
  {
    projectName: "21321494240412",
    monthToDate: 0.00,
    lastMonth: 0.00,
    projectToDate: 6.11
  }
]

const billingStats = [
    {
      title: "Your Annual Total Cost",
      value: "$",
      icon: CircleDollarSign,
    },
    {
      title: "Most Expensive Project",
      value: "21321494240412",
      icon: FolderKanban,
    },
    {
      title: "Last Month's Total Cost",
      value: "XXXXX",
      icon: DollarSignIcon,
    },
  ]

export default function BillingPage() {
  return (
    <div className="p-6 space-y-6">
      <StatsCards stats={billingStats} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Billing</h1>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This table shows only the direct AWS resource cost and excludes the support and operations cost. 
          Each back-up created increases your monthly cost.
        </AlertDescription>
      </Alert>

      <div className="flex justify-between items-center gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="active">Active Projects</SelectItem>
            <SelectItem value="archived">Archived Projects</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative w-[300px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Month to date ($)</TableHead>
              <TableHead>Last month ($)</TableHead>
              <TableHead>Project to date ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingData.map((item) => (
              <TableRow key={item.projectName}>
                <TableCell className="font-medium">{item.projectName}</TableCell>
                <TableCell>{item.monthToDate.toFixed(2)}</TableCell>
                <TableCell>{item.lastMonth.toFixed(2)}</TableCell>
                <TableCell>{item.projectToDate.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination totalItems={296} itemsPerPage={20} />
    </div>
  )
}

