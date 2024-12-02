import moment from 'moment'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Card, Descriptions, Tag, Button, Modal, Input, Select, DatePicker, Avatar } from 'antd'
import { EditOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import { accountSchema } from '@/lib/zod/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useViewAccountDetail } from './use-view-account-detail'
import { ROLE_MAPPING } from '@/constants'
import { useParams } from 'react-router-dom'
import { Skeleton } from 'antd'
import { useEditAccount } from '../update-account/use-edit-account'
import { useDisableAccount } from '../delete-account/use-disable-account'

const { Option } = Select

export default function ViewAccountDetail() {
  const { accountId } = useParams()
  const { data: account, isLoading } = useViewAccountDetail(Number(accountId))
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const useEditAccountMutation = useEditAccount(Number(accountId))
  const useDisableAccountMutation = useDisableAccount(Number(accountId))

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: account,
  })

  const showEditModal = () => {
    reset(account)
    setIsEditModalVisible(true)
  }

  const handleEditOk = handleSubmit((data) => {
    const inputData = { ...data, password: account?.password }
    useEditAccountMutation.mutate(inputData)
    setIsEditModalVisible(false)
  })

  const handleEditCancel = () => {
    setIsEditModalVisible(false)
  }

  return (
    <div className="px-10 py-5">
      <Card
        title={<h1 className="text-2xl font-bold">Account Details</h1>}
        extra={
          <div className="space-x-2">
            <Button type="primary" icon={<EditOutlined />} onClick={showEditModal}>
              Edit
            </Button>
            <Button
              danger={!account?.isDisable}
              icon={account?.isDisable ? <UnlockOutlined /> : <LockOutlined />}
              onClick={() => useDisableAccountMutation.mutate()}
            >
              {account?.isDisable ? 'Enable' : 'Disable'}
            </Button>
          </div>
        }
        className="shadow-lg"
      >
        <Skeleton active loading={isLoading} />
        <Descriptions bordered column={1}>
          <Descriptions.Item label="ID">{account?.id}</Descriptions.Item>
          <Descriptions.Item label="Full Name">{account?.fullName}</Descriptions.Item>
          <Descriptions.Item label="Image">
            <Avatar src={account?.image} size={72} />
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{account?.phone}</Descriptions.Item>
          <Descriptions.Item label="Email">{account?.email}</Descriptions.Item>
          <Descriptions.Item label="Address">{account?.address}</Descriptions.Item>
          <Descriptions.Item label="Gender">{account?.gender ? 'Male' : 'Female'}</Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {dayjs(account?.dateOfBirth).format('DD/MM/YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={account?.isDisable ? 'red' : 'green'}>{account?.isDisable ? 'Disabled' : 'Active'}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Role">
            <Tag color="blue">{account?.roleId && ROLE_MAPPING[account?.roleId]}</Tag>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Modal title="Edit Account" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
        <form onSubmit={handleEditOk} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <Controller name="image" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <Controller name="phone" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Controller name="email" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={2} className="mt-1" />}
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select {...field} className="mt-1 w-full">
                  <Option value={true}>Male</Option>
                  <Option value={false}>Female</Option>
                </Select>
              )}
            />
            {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  className="mt-1 w-full"
                  format="DD-MM-YYYY"
                  value={field.value ? moment(field.value) : null}
                  onChange={(date) => field.onChange(date ? date.format('DD-MM-YYYY') : null)}
                />
              )}
            />
            {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <Controller
              name="roleId"
              control={control}
              render={({ field }) => (
                <Select {...field} className="mt-1 w-full">
                  <Option value={1}>Admin</Option>
                  <Option value={2}>Staff</Option>
                  <Option value={3}>Customer</Option>
                </Select>
              )}
            />
            {errors.roleId && <p className="mt-1 text-sm text-red-600">{errors.roleId.message}</p>}
          </div>
        </form>
      </Modal>
    </div>
  )
}
