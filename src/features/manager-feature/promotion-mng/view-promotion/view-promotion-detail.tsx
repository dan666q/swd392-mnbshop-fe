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
import { ProductDetail, ProductInPromotion, ProductTableData } from '@/types'
import Popup from '@/components/manager-screen/popup'
import DeleteProductPromotion from '../delete-promotion/delete-product-promotion'
import { POPUP_TITLE } from '@/constants'
import { useViewProductList } from '../../product-mng/view-product/use-view-product'
import { VIEW_PRODUCT_PROMOTION_COLS } from '@/constants/table-columns'

type FormData = z.infer<typeof promotionSchema>

export default function ViewPromotionDetail() {
  const { promotionId } = useParams()
  const [isAddProductModalVisible, setIsAddProductModalVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { data: promotion } = useViewPromotionDetail(Number(promotionId))
  const { data: product } = useViewProductList()

  const addKeyToData = (dataArray: ProductTableData[] | ProductDetail[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: ProductTableData | ProductDetail) => {
      return {
        ...item,
        key: item.productId,
      }
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataWithKeys: any = (product && addKeyToData(product)) || []

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

  const showAddProductModal = () => {
    setIsAddProductModalVisible(true)
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
      render: (productPrice: number) => `${productPrice} VND`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: ProductInPromotion) => (
        <Popup
          width={430}
          type="confirm"
          title={POPUP_TITLE.DELETE_PRODUCT_PROMOTION}
          content={<DeleteProductPromotion promotionId={promotionId} productId={record.productId} />}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popup>
      ),
    },
  ]

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div className="w-9/12 mx-auto p-4">
      <Card
        title={<h2 className="text-2xl font-bold">{promotion?.promotionName}</h2>}
        extra={
          <div>
            <Button type="default" icon={<EditOutlined />} onClick={showAddProductModal} className="mr-2">
              Add product
            </Button>
            <Button type="primary" icon={<EditOutlined />} onClick={showEditModal}>
              Edit
            </Button>
          </div>
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

      <Modal
        width={1200}
        title="Add Products to Promotion"
        visible={isAddProductModalVisible}
        onOk={() => {
          // Xử lý logic thêm sản phẩm vào đây
          setIsAddProductModalVisible(false)
        }}
        onCancel={() => setIsAddProductModalVisible(false)}
      >
        <Form layout="vertical">
          <Table
            columns={VIEW_PRODUCT_PROMOTION_COLS}
            dataSource={dataWithKeys}
            pagination={{ pageSize: 5 }}
            rowSelection={rowSelection}
          />
        </Form>
      </Modal>
    </div>
  )
}
