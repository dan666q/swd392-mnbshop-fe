import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'

interface DeleteBrandProps {
  brandName: string
  brandId: string
}

export default function DeleteBrand({ brandName, brandId }: DeleteBrandProps) {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    console.log(brandId)
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
