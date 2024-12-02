import { Dropdown as AntDropdown } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import { MenuItem } from '@/types'

interface DropdownProps {
  children?: React.ReactNode
  items: MenuItem[]
}

export default function Dropdown({ children, items }: DropdownProps) {
  return (
    <AntDropdown menu={{ items }} trigger={['click']}>
      {children ? children : <EllipsisOutlined />}
    </AntDropdown>
  )
}
