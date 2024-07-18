import Popup from '@/components/manager-screen/popup'
import SearchBar from '@/components/manager-screen/search'
import SectionHeader from '@/components/manager-screen/section-header'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import ViewBlogList from '@/features/manager-feature/blog-mng/view-blog/view-blog-list'
import AddBlog from '@/features/manager-feature/blog-mng/add-blog/add-blog'
import { POPUP_TITLE } from '@/constants'
import { GreenButtonStyle } from '@/lib/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function BlogManager() {
  return (
    <>
      <SectionHeader title="Blog List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={800} type="form" title={POPUP_TITLE.ADD_BLOG} content={<AddBlog />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewBlogList />
      </div>
    </>
  )
}
