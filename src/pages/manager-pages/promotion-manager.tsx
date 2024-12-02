import Popup from '@/components/manager-screen/popup'
import SearchBar from '@/components/manager-screen/search'
import SectionHeader from '@/components/manager-screen/section-header'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import AddPromotion from '@/features/manager-feature/promotion-mng/add-promotion/add-promotion'
import ViewPromotionList from '@/features/manager-feature/promotion-mng/view-promotion/view-promotion-list'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function PromotionManager() {
  return (
    <>
      <SectionHeader title="Promotion List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={700} type="form" title={POPUP_TITLE.ADD_PROMOTION} content={<AddPromotion />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewPromotionList />
      </div>
    </>
  )
}
