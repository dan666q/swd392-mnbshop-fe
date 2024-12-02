import { Input, Button } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { brandSchema } from '@/lib/zod/schema'
import { useAddBrand } from './use-add-brand'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { POPUP_TITLE } from '@/constants'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'

export type CreateBrand = z.infer<typeof brandSchema>

export default function AddBrand() {
  const dispatch = useAppDispatch()
  const addBrandMutation = useAddBrand()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBrand>({
    resolver: zodResolver(brandSchema),
  })

  const handleAddBrand = handleSubmit((data) => {
    console.log('Data: ', data)
    addBrandMutation.mutate(data)
    dispatch(closePopup(POPUP_TITLE.ADD_BRAND))
  })

  return (
    <div className="px-10 py-5">
      <form onSubmit={handleAddBrand} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Brand Name</label>
          <Controller
            name="brandName"
            control={control}
            render={({ field }) => <Input {...field} className="mt-1" />}
          />
          {errors.brandName && <p className="mt-1 text-sm text-red-600">{errors.brandName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Made In</label>
          <Controller name="madeIn" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
          {errors.madeIn && <p className="mt-1 text-sm text-red-600">{errors.madeIn.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input.TextArea {...field} rows={4} className="mt-1" />}
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Brand Image URL</label>
          <Controller name="brandImg" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
          {errors.brandImg && <p className="mt-1 text-sm text-red-600">{errors.brandImg.message}</p>}
        </div>

        <div className="flex justify-end mt-5">
          <Button type="primary" htmlType="submit">
            Add Brand
          </Button>
        </div>
      </form>
    </div>
  )
}
