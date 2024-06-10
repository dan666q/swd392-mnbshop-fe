import SectionHeader from '@/components/manager-screen/section-header'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import Popup from '@/components/manager-screen/popup'
import ViewListOrder from '@/features/manager-feature/order-mng/view-list-order'
import AddBrand from '@/features/manager-feature/brand-mng/add-brand'
import { Button } from 'antd'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'

export default function OrderManager() {
  return (
    <>
      <SectionHeader title="Order List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          {/* Searchbar */}
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
        <ViewListOrder />
      </div>
    </>
  )
}
