/* eslint-disable @typescript-eslint/no-explicit-any */
import * as z from 'zod'
import moment from 'moment'
import { useState } from 'react'
import {
  Card,
  Button,
  Descriptions,
  Tag,
  Image,
  Modal,
  Form,
  Input,
  DatePicker,
  Switch,
  InputNumber,
  Table,
} from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useViewPromotionDetail } from './use-view-promotion-detail'
import { useParams } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { promotionSchema } from '@/lib/zod/schema'
import { useUpdatePromotion } from '../update-promotion/use-update-promotion'
import { ProductInPromotion } from '@/types'

type FormData = z.infer<typeof promotionSchema>

export default function ViewPromotionDetail() {
  const { promotionId } = useParams()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { data: promotion } = useViewPromotionDetail(Number(promotionId))
  const UpdatePromotionMutation = useUpdatePromotion(Number(promotionId))

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(promotionSchema),
    defaultValues: promotion,
  })

  const showEditModal = () => {
    reset(promotion)
    setIsModalVisible(true)
  }

  const onSubmit = async (data: FormData | any) => {
    UpdatePromotionMutation.mutate(data)
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Product',
      dataIndex: 'productName',
      key: 'productName',
      render: (text: string) => (
        <div className="flex items-center">
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Image',
      dataIndex: 'productImg',
      key: 'productImg',
      render: (text: string, record: ProductInPromotion) => (
        <div className="flex items-center ">
          <Image src={record.productImg} alt={text} width={120} className="rounded-xl" />
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount: number) => `${discount ? discount : 0}%`,
    },
    {
      title: 'Price',
      dataIndex: 'productPrice',
      key: 'productPrice',
      render: (productPrice: number) => `$${productPrice}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="primary" danger>
          Delete
        </Button>
      ),
    },
  ]

  return (
    <div className="w-9/12 mx-auto p-4">
      <Card
        title={<h2 className="text-2xl font-bold">{promotion?.promotionName}</h2>}
        extra={
          <Button type="primary" icon={<EditOutlined />} onClick={showEditModal}>
            Edit
          </Button>
        }
        cover={
          <Image alt={promotion?.promotionName} src={promotion?.promotionImg} className="object-cover h-48 w-6/12" />
        }
        className="shadow-lg"
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Promotion ID">{promotion?.promotionId}</Descriptions.Item>
          <Descriptions.Item label="Start Time">{new Date(promotion?.startAt).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="End Time">{new Date(promotion?.endAt).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={promotion?.status ? 'green' : 'red'}>{promotion?.status ? 'Active' : 'Inactive'}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Discount Rate">{promotion?.promote}%</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Order Items" className="my-5">
        <Table columns={columns} dataSource={promotion?.products} rowKey="productId" pagination={false} />
      </Card>

      <Modal
        title="Edit Promotion"
        visible={isModalVisible}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item
            label="Promotion Name"
            validateStatus={errors.promotionName ? 'error' : ''}
            help={errors.promotionName?.message}
          >
            <Controller name="promotionName" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>

          <div className="flex justify-between">
            <Form.Item
              className="w-full"
              label="Start Time"
              validateStatus={errors.startAt ? 'error' : ''}
              help={errors.startAt?.message}
            >
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

            <Form.Item
              label="End Time"
              className="w-full"
              validateStatus={errors.endAt ? 'error' : ''}
              help={errors.endAt?.message}
            >
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
          </div>

          <Form.Item hidden label="Status" validateStatus={errors.status ? 'error' : ''} help={errors.status?.message}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => <Switch {...field} checked={field.value} />}
            />
          </Form.Item>

          <Form.Item
            label="Discount Rate"
            validateStatus={errors.promote ? 'error' : ''}
            help={errors.promote?.message}
          >
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
        </Form>
      </Modal>
    </div>
  )
}
