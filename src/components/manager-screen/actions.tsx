import ConfigAntdTheme from '@/lib/antd/config-theme'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { Button, Spin } from 'antd'
import { cn } from '@/utils'
import { LoadingOutlined } from '@ant-design/icons'

interface ActionsProps {
  className?: string
  onOk: () => void
  onCancel: () => void
  okText?: string
  cancelText?: string
  isLoading?: boolean
  isDisabled?: boolean
}

export default function Actions({
  className,
  onOk,
  onCancel,
  okText,
  cancelText,
  isLoading = false,
  isDisabled
}: ActionsProps) {
  return (
    <div className={cn('flex gap-4 mt-4 ml-auto', className)}>
      <Button className="w-full" type="text" danger onClick={onCancel} disabled={isLoading}>
        {cancelText || 'Cancel'}
      </Button>
      <ConfigAntdTheme theme={DefaultButtonStyle}>
        <Button className="w-full" type="primary" onClick={onOk} disabled={isLoading || isDisabled}>
          {isLoading ? <Spin indicator={<LoadingOutlined className="text-primary" spin />} /> : okText || 'Save'}
        </Button>
      </ConfigAntdTheme>
    </div>
  )
}
