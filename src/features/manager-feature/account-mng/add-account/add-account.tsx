import moment from 'moment'
import { Button, Input, Select, DatePicker, Form, Switch } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAccountSchema } from '@/lib/zod/schema'
import { useAddAccount } from './use-add-account'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { POPUP_TITLE } from '@/constants'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'

const { Option } = Select

export default function AddAccount() {
  const dispatch = useAppDispatch()
  const addAccountMutation = useAddAccount()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAccountSchema),
  })

  const handleOk = handleSubmit((data) => {
    addAccountMutation.mutate(data)
    dispatch(closePopup(POPUP_TITLE.ADD_ACCOUNT))
    reset()
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_ACCOUNT))
    reset()
  }

  return (
    <div className="px-10 py-5">
      <Form layout="vertical" className="space-y-4">
        <Form.Item label="Username" validateStatus={errors.username ? 'error' : ''}>
          <Controller name="username" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Password" validateStatus={errors.password ? 'error' : ''}>
          <Controller name="password" control={control} render={({ field }) => <Input.Password {...field} />} />
        </Form.Item>

        <Form.Item label="Full Name" validateStatus={errors.fullName ? 'error' : ''}>
          <Controller name="fullName" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Date of Birth" validateStatus={errors.dateOfBirth ? 'error' : ''}>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                format="YYYY-MM-DD"
                value={field.value ? moment(field.value, 'YYYY-MM-DD') : null}
                onChange={(date) => {
                  const formattedDate = date ? date.format('YYYY-MM-DD') : ''
                  field.onChange(formattedDate)
                }}
              />
            )}
          />
        </Form.Item>

        <Form.Item label="Gender" validateStatus={errors.gender ? 'error' : ''}>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <Option value={true}>Male</Option>
                <Option value={false}>Female</Option>
              </Select>
            )}
          />
        </Form.Item>

        <Form.Item label="Address" validateStatus={errors.address ? 'error' : ''}>
          <Controller name="address" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Phone" validateStatus={errors.phone ? 'error' : ''}>
          <Controller name="phone" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Image URL" validateStatus={errors.image ? 'error' : ''}>
          <Controller name="image" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item label="Status" validateStatus={errors.status ? 'error' : ''}>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
            )}
          />
        </Form.Item>

        <Form.Item label="Is Disabled" validateStatus={errors.isDisable ? 'error' : ''}>
          <Controller
            name="isDisable"
            control={control}
            defaultValue={false}
            render={({ field }) => <Switch checked={field.value} onChange={(checked) => field.onChange(checked)} />}
          />
        </Form.Item>

        <Form.Item label="Email" validateStatus={errors.email ? 'error' : ''}>
          <Controller name="email" control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item className="text-right">
          <Button danger htmlType="submit" onClick={handleCancel} className="mr-4">
            Cancel
          </Button>

          <Button type="primary" htmlType="submit" onClick={handleOk}>
            Add Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
