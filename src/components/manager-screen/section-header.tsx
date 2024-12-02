import { cn } from '@/utils'
import { Typography } from 'antd'

interface SectionHeaderProps {
  title: string
  className?: string
}

export default function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn(' w-full flex justify-start items-center p-4 mt-1', className)}>
      <Typography.Title level={3}>{title}</Typography.Title>
    </div>
  )
}
