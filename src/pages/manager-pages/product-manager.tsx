import Popup from '@/components/manager-screen/popup'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import ViewListProduct from '@/features/manager-feature/view-list-product'
import DeleteProduct from '@/features/manager-feature/delete-product'
import SectionHeader from '@/components/manager-screen/section-header'

export default function ProductManager() {
  return (
    <>
      <SectionHeader title="Product List" className="bg-cyan-500" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          {/* Searchbar */}
          <div className="flex flex-col gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup
                  width={500}
                  type="form"
                  title={POPUP_TITLE.DELETE_PRODUCT}
                  content={<DeleteProduct productId="01" productName="Product 1" />}
                >
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
