import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteProductPromotion } from './use-delete-product-promotion'

export default function DeleteProductPromotion(promotionId: any) {
  const dispatch = useAppDispatch()
  const deleteProductPromotionMutation = useDeleteProductPromotion(promotionId.promotionId)
  const handleDelete = () => {
    deleteProductPromotionMutation.mutate(promotionId.productId)
    dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT_PROMOTION))
  }
  return (
    <>
      <Typography.Text>Are you sure to delete product in promotion?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button
          danger
          type="text"
          className="mr-2"
          onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT_PROMOTION))}
        >
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
