import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook'
import { SectionType, setMode } from '@/lib/redux-toolkit/slices/ui-status'
import { Typography } from 'antd'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/utils'

interface InfoSectionProps {
  title: string
  indicator: SectionType
  page: 'system' | 'class'
  children: React.ReactNode
  className?: string
  isDisabled?: boolean
}

export default function InfoSection({ title, indicator, children, className, page, isDisabled }: InfoSectionProps) {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.ui.sections[page][indicator])

  return (
    <div className="flex flex-col">
      <div className="bg-secondary p-2 flex justify-between items-center">
        <Typography.Text type="secondary" className="font-bold">
          {title}
        </Typography.Text>
        {mode === 'view' && !isDisabled && (
          <Icons.create
            className="cursor-pointer"
            fill="white"
            onClick={() => dispatch(setMode({ key: indicator, value: 'edit', page: page }))}
          />
        )}
      </div>
      <div className={cn('p-4', className)}>{children}</div>
    </div>
  )
}
