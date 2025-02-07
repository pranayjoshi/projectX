import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Pause, Play, Power, Server } from 'lucide-react'

interface EC2Instance {
  id: string
  name: string
  status: 'running' | 'stopped' | 'pending' | 'stopping'
  type: string
  publicIp: string
}

interface EC2InstanceCardProps {
  instance: EC2Instance
}

export function EC2InstanceCard({ instance }: EC2InstanceCardProps) {
  const statusColor = {
    running: 'bg-green-500',
    stopped: 'bg-red-500',
    pending: 'bg-yellow-500',
    stopping: 'bg-orange-500'
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {instance.name}
        </CardTitle>
        <Server className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{instance.type}</div>
        <p className="text-xs text-muted-foreground">
          {instance.publicIp}
        </p>
        <Badge className={`mt-2 ${statusColor[instance.status]}`}>
          {instance.status}
        </Badge>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-2">
          {instance.status === 'stopped' && (
            <Button size="sm">
              <Play className="mr-2 h-4 w-4" />
              Start
            </Button>
          )}
          {instance.status === 'running' && (
            <>
              <Button size="sm" variant="outline">
                <Pause className="mr-2 h-4 w-4" />
                Stop
              </Button>
              <Button size="sm" variant="outline">
                <Power className="mr-2 h-4 w-4" />
                Reboot
              </Button>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

