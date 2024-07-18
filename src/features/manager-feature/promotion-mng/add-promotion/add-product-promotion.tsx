import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useAddProductPromotion } from './use-add-product-promotion'
import { useParams } from 'react-router-dom'

export default function AddProductPromotion(product: any) {
  const id = useParams().promotionId
  const dispatch = useAppDispatch()
  console.log(product)
  const addProductPromotion = useAddProductPromotion(Number(id))
  function handleAddProductPromotion() {
    addProductPromotion.mutate(product.product.productId)
    dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT_PROMOTION))
  }
  return (
    <>
      <Typography.Text>Are you sure to add product to promotion?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button
          danger
          type="text"
          className="mr-2"
          onClick={() => dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT_PROMOTION))}
        >
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={handleAddProductPromotion}>
            Add product
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}
