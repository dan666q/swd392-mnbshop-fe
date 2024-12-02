import SectionHeader from '@/components/manager-screen/section-header'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import Popup from '@/components/manager-screen/popup'
import AddBrand from '@/features/manager-feature/brand-mng/add-brand/add-brand'
import SearchBar from '@/components/manager-screen/search'
import DashboardInfo from '@/features/manager-feature/dashboard/dashboard-info'
import { Button } from 'antd'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'

export default function OrderManager() {
  return (
    <>
      <SectionHeader title="Dashboard" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={500} type="form" title={POPUP_TITLE.ADD_ORDER} content={<AddBrand />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <DashboardInfo />
      </div>
    </>
  )
}
