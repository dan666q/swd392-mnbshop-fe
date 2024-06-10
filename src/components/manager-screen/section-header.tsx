import { cn } from '@/utils'
import { Typography } from 'antd'

interface SectionHeaderProps {
  title: string
  className?: string
}

export default function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={cn('bg-primary w-full flex items-center p-4 mt-1', className)}>
      <Typography.Title level={3} type="secondary">
        {title}
      </Typography.Title>
    </div>
  )
}
