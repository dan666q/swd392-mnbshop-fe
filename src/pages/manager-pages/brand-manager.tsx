import Popup from '@/components/manager-screen/popup'
import SectionHeader from '@/components/manager-screen/section-header'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import AddBrand from '@/features/manager-feature/brand-mng/add-brand'
import ViewListBrand from '@/features/manager-feature/brand-mng/view-list-brand'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function BrandManager() {
  return (
    <>
      <SectionHeader title="Brand List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          {/* Searchbar */}
          <div className="flex flex-col gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={500} type="form" title={POPUP_TITLE.ADD_BRAND} content={<AddBrand />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewListBrand />
      </div>
    </>
  )
}
