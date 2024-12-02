import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteBrand } from './use-delete-brand'

interface DeleteBrandProps {
  brandName: string
  brandId: number
}

export default function DeleteBrand({ brandName, brandId }: DeleteBrandProps) {
  const dispatch = useAppDispatch()
  const deleteBrandMutation = useDeleteBrand(brandId)
  const handleDelete = () => {
    deleteBrandMutation.mutate()
    dispatch(closePopup(POPUP_TITLE.DELETE_BRAND))
  }

  return (
    <>
      <Typography.Text>Are you sure to delete {brandName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_BRAND))}>
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
