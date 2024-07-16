import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteProduct } from './use-delete-product'

interface DeleteProductProps {
  productName: string
  productId: string
}

export default function DeleteProduct({ productName, productId }: DeleteProductProps) {
  const dispatch = useAppDispatch()
  const deleteProductMutation = useDeleteProduct(productId)

  const handleDelete = () => {
    deleteProductMutation.mutate()
    dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT))
  }

  return (
    <>
      <Typography.Text>Are you sure to delete {productName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT))}>
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
