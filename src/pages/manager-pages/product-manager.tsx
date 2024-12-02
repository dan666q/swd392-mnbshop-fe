import Popup from '@/components/manager-screen/popup'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import ViewListProduct from '@/features/manager-feature/product-mng/view-product/view-list-product'
import SectionHeader from '@/components/manager-screen/section-header'
import AddProduct from '@/features/manager-feature/product-mng/add-product/add-product'
import SearchBar from '@/components/manager-screen/search'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function ProductManager() {
  return (
    <>
      <SectionHeader title="Product List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={700} type="form" title={POPUP_TITLE.ADD_PRODUCT} content={<AddProduct />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewListProduct />
      </div>
    </>
  )
}
