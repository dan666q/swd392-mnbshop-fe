import { cn } from '@/utils'
import { Empty, Result } from 'antd'

type ErrorType = 'not-found' | 'empty'

interface ErrorProps {
  content: string
  type: ErrorType
  className?: string
}

export default function Error({ content, type, className }: ErrorProps) {
  let data = null
  switch (type) {
    case 'not-found':
      data = <Result status="404" title="Oops..." subTitle={content} />
      break
    case 'empty':
      data = <Empty description={content} />
      break
  }
  return <div className={cn('flex h-full justify-center items-center mx-auto', className)}>{data}</div>
}
