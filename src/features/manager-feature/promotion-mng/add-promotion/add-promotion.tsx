import * as z from 'zod'
import moment from 'moment'
import { Button, Form, Input, DatePicker, Switch, InputNumber } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { promotionSchema } from '@/lib/zod/schema'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { POPUP_TITLE } from '@/constants'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { useAddPromotion } from './use-add-promotion'

type FormData = z.infer<typeof promotionSchema>

export default function AddPromotion() {
  const dispatch = useAppDispatch()
  const addPromotionMutation = useAddPromotion()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(promotionSchema),
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_PROMOTION))
    reset()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: FormData | any) => {
    addPromotionMutation.mutate(data)
    reset()
    dispatch(closePopup(POPUP_TITLE.ADD_PROMOTION))
  }

  return (
    <div className="w-full p-4">
      <Form layout="vertical">
        <Form.Item
          label="Promotion Name"
          validateStatus={errors.promotionName ? 'error' : ''}
          help={errors.promotionName?.message}
        >
          <Controller name="promotionName" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Start Time" validateStatus={errors.startAt ? 'error' : ''} help={errors.startAt?.message}>
          <Controller
            name="startAt"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                format="DD/MM/YYYY"
                value={field.value ? moment(field.value) : null}
                onChange={(date) => field.onChange(date ? date.startOf('day').toDate() : null)}
              />
            )}
          />
        </Form.Item>

        <Form.Item label="End Time" validateStatus={errors.endAt ? 'error' : ''} help={errors.endAt?.message}>
          <Controller
            name="endAt"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                format="DD/MM/YYYY"
                value={field.value ? moment(field.value) : null}
                onChange={(date) => field.onChange(date ? date.startOf('day').toDate() : null)}
              />
            )}
          />
        </Form.Item>

        <Form.Item hidden label="Status" validateStatus={errors.status ? 'error' : ''} help={errors.status?.message}>
          <Controller name="status" control={control} render={({ field }) => <Switch {...field} />} />
        </Form.Item>

        <Form.Item label="Discount Rate" validateStatus={errors.promote ? 'error' : ''} help={errors.promote?.message}>
          <Controller
            name="promote"
            control={control}
            render={({ field }) => <InputNumber {...field} min={0} max={100} formatter={(value) => `${value}%`} />}
          />
        </Form.Item>

        <Form.Item
          label="Promotion Image URL"
          validateStatus={errors.promotionImg ? 'error' : ''}
          help={errors.promotionImg?.message}
        >
          <Controller name="promotionImg" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <div className="flex gap-5">
          <Form.Item className="w-full">
            <Button onClick={handleCancel} className="w-full">
              Cancel
            </Button>
          </Form.Item>
          <Form.Item className="w-full">
            <Button type="primary" htmlType="submit" onClick={handleSubmit(onSubmit)} className="w-full">
              Add
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
