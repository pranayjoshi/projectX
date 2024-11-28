import { EC2InstanceCard } from './ec2_instance_card'

const mockInstances = [
  { id: '1', name: 'Web Server', status: 'running', type: 't2.micro', publicIp: '54.123.45.67' },
  { id: '2', name: 'Database Server', status: 'stopped', type: 't2.small', publicIp: '54.234.56.78' },
  { id: '3', name: 'Application Server', status: 'pending', type: 't2.medium', publicIp: '54.345.67.89' },
  { id: '4', name: 'Backup Server', status: 'stopping', type: 't2.large', publicIp: '54.456.78.90' },
] as const

export function EC2InstanceList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockInstances.map((instance) => (
        <EC2InstanceCard key={instance.id} instance={instance} />
      ))}
    </div>
  )
}

