import { EC2InstanceList } from '@/components/ec2_instance_list'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">EC2 Instances Dashboard</h1>
      <EC2InstanceList />
    </div>
  )
}

