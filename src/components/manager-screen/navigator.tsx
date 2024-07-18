import { Menu, Layout, Button } from 'antd'
import { CloseOutlined, BarsOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { NavigatorItems, NavigatorItemsStaff } from '@/constants/menu-data'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types'
import { TOKEN_KEY } from '@/lib/axios'

const { Sider } = Layout

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  return decodedToken
}

export default function Navigator() {
  const [isCollapse, setIsCollapse] = useState(false)
  const navigate = useNavigate()
  const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId
  const toggleCollapse = () => setIsCollapse((prev) => !prev)

  return (
    <Sider className="h-full flex flex-col " collapsible trigger={null} collapsed={isCollapse}>
      <Button className={isCollapse ? 'mx-7 my-2' : 'mx-5 my-2'} type="text" onClick={toggleCollapse}>
        {isCollapse ? (
          <BarsOutlined className="text-lg" />
        ) : (
          <>
            <CloseOutlined className="text-lg mr-3" /> Close
          </>
        )}
      </Button>
      {roleId == '1' ? (
        <Menu onClick={({ key }) => navigate(key)} className="bg-foreground" mode="inline" items={NavigatorItems} />
      ) : (
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-foreground"
          mode="inline"
          items={NavigatorItemsStaff}
        />
      )}
    </Sider>
  )
}
