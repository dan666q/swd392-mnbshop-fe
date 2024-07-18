import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteBlog } from './use-delete-blog'

interface DeleteBlogProps {
  title: string
  blogId: number
}

export default function DeleteBlog({ title, blogId }: DeleteBlogProps) {
  const dispatch = useAppDispatch()
  const useDeleteBlogMutation = useDeleteBlog()
  const handleDelete = () => {
    console.log(blogId)
    useDeleteBlogMutation.mutate(blogId)
    dispatch(closePopup(POPUP_TITLE.DELETE_BLOG))
  }
  return (
    <>
      <Typography.Text>Are you sure to delete blog: {title}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_BLOG))}>
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}
