import { cn } from '@/utils'
import { Spin } from 'antd'

const DEFAULT_LOADING_CONTENT = 'Loading...'

interface LoadingProps {
  content?: string
  className?: string
}

export default function Loading({ content = DEFAULT_LOADING_CONTENT, className }: LoadingProps) {
  return (
    <div className={cn('flex h-full justify-center items-center', className)}>
      <div className="flex flex-col gap-3 items-center">
        <Spin size="large" />
        <div>{content}</div>
      </div>
    </div>
  )
}
