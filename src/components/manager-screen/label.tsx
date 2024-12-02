import { cn } from '@/utils'
import { Typography } from 'antd'

export default function Label({
  label,
  children,
  className,
  wrapper
}: {
  label: string
  children: React.ReactNode
  className?: string
  wrapper?: string
}) {
  return (
    <div className={cn('flex items-center w-full', wrapper)}>
      <Typography.Text strong className={cn('w-2/6', className)}>
        {label}
      </Typography.Text>
      <div className="w-full">{children}</div>
    </div>
  )
}
