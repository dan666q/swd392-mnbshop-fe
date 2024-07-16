import Popup from '@/components/manager-screen/popup'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import SectionHeader from '@/components/manager-screen/section-header'
import ViewListAccount from '@/features/manager-feature/account-mng/view-account/view-list-account'
import AddAccount from '@/features/manager-feature/account-mng/add-account/add-account'
import SearchBar from '@/components/manager-screen/search'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function AccountManager() {
  return (
    <>
      <SectionHeader title="Account List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={800} type="form" title={POPUP_TITLE.ADD_ACCOUNT} content={<AddAccount />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewListAccount />
      </div>
    </>
  )
}
