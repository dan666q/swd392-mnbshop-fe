import { Button, Input, InputNumber, Select, Switch } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema } from '@/lib/zod/schema'
import { ProductDetail } from '@/types'
import { useViewBrandList } from '../../brand-mng/view-brand/use-view-brand-list'
import { useAddProduct } from './use-add-product'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { POPUP_TITLE } from '@/constants'

const { Option } = Select

export default function AddProduct() {
  const addProductMutation = useAddProduct()
  const { data: brandList } = useViewBrandList()
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductDetail>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      isPreOrder: false,
      isPromote: false,
      isDisable: false,
    },
  })

  const handleOk = handleSubmit((data) => {
    addProductMutation.mutate(data)
    dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT))
    reset()
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT))
    reset()
  }

  return (
    <div>
      <form onSubmit={handleOk} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <Controller
            name="productName"
            control={control}
            render={({ field }) => <Input {...field} className="mt-1" />}
          />
          {errors.productName && <p className="mt-1 text-sm text-red-600">{errors.productName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <Controller
            name="brandId"
            control={control}
            render={({ field }) => (
              <Select {...field} className="mt-1 w-full">
                {brandList?.map((brand) => (
                  <Option key={brand.brandId} value={brand.brandId}>
                    {brand.brandName}
                  </Option>
                ))}
              </Select>
            )}
          />
          {errors.brandId && <p className="mt-1 text-sm text-red-600">{errors.brandId.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Image URL</label>
          <Controller
            name="productImg"
            control={control}
            render={({ field }) => <Input {...field} className="mt-1" />}
          />
          {errors.productImg && <p className="mt-1 text-sm text-red-600">{errors.productImg.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <Controller
            name="productPrice"
            control={control}
            render={({ field }) => <InputNumber {...field} className="mt-1 w-full" prefix="VND" />}
          />
          {errors.productPrice && <p className="mt-1 text-sm text-red-600">{errors.productPrice.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
          />
          {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discount</label>
          <Controller
            name="discount"
            control={control}
            render={({ field }) => <InputNumber {...field} className="mt-1 w-full" prefix="%" />}
          />
          {errors.discount && <p className="mt-1 text-sm text-red-600">{errors.discount.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">By Age</label>
          <Controller
            name="byAge"
            control={control}
            render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
          />
          {errors.byAge && <p className="mt-1 text-sm text-red-600">{errors.byAge.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pre-Order</label>
          <Controller
            name="isPreOrder"
            control={control}
            render={({ field }) => <Switch {...field} checked={field.value} />}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pre-Order Amount</label>
          <Controller
            name="preOrderAmount"
            control={control}
            render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
          />
          {errors.preOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.preOrderAmount.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Promoted</label>
          <Controller
            name="isPromote"
            control={control}
            render={({ field }) => <Switch {...field} checked={field.value} />}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Disabled</label>
          <Controller
            name="isDisable"
            control={control}
            render={({ field }) => <Switch {...field} checked={field.value} />}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Controller
            name="productDescription"
            control={control}
            render={({ field }) => <Input.TextArea {...field} rows={4} className="mt-1" />}
          />
          {errors.productDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.productDescription.message}</p>
          )}
        </div>

        {/* Button OK and Cancel */}
        <div className="flex gap-5 justify-end">
          <Button danger onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
