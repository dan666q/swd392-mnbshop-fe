import TableData from '@/components/manager-screen/table'
import { BlogData, BlogTableData, DecodedToken } from '@/types'
import { useViewBlogList } from './use-view-blog-list'
import { VIEW_BLOG_COLS } from '@/constants/table-columns'
import { jwtDecode } from 'jwt-decode'
import { TOKEN_KEY } from '@/lib/axios'
import { useMemo } from 'react'

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  return decodedToken
}

export default function ViewBlogList() {
  const { data, isLoading } = useViewBlogList()
  const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId

  const staffData = useMemo(() => {
    const staffId = localStorage.getItem('userId')
    if (!data || !staffId) return []
    return data.filter((blog: BlogData) => blog.userId === parseInt(staffId))
  }, [data])

  const addKeyToData = (dataArray: BlogTableData[] | BlogData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: BlogTableData | BlogData) => {
      return {
        ...item,
        key: item.blogId,
      }
    })
  }
  const dataWithKeys: BlogTableData[] = (data && addKeyToData(data)) || []
  return (
    <div>
      {roleId == '1' ? (
        <TableData<BlogTableData>
          columns={VIEW_BLOG_COLS}
          data={dataWithKeys}
          total={data?.length}
          scrollX={1400}
          scrollY={620}
          hasRowSelection
          isLoading={isLoading}
        />
      ) : (
        <TableData<BlogTableData>
          columns={VIEW_BLOG_COLS}
          data={staffData}
          total={data?.length}
          scrollX={1400}
          scrollY={620}
          hasRowSelection
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
