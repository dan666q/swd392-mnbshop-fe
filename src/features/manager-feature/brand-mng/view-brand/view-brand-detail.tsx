import { useState } from 'react'
import { Card, Descriptions, Image, Button, Modal, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { brandSchema } from '@/lib/zod/schema'
import { useNavigate, useParams } from 'react-router-dom'
import { useViewBrandDetail } from './use-view-brand-detail'
import { useEditBrand } from '../edit-brand/use-edit-brand'
import { useDeleteBrand } from '../delete-brand/use-delete-brand'
import { ROUTE_PATHS_MANAGER } from '@/router'

export type BrandDetail = z.infer<typeof brandSchema>

export default function ViewBrandDetail() {
  const navigate = useNavigate()
  const { brandId } = useParams()
  const { data: brand } = useViewBrandDetail(Number(brandId))
  const editBrandMutation = useEditBrand(Number(brandId))
  const deleteBrandMutation = useDeleteBrand(Number(brandId))
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BrandDetail>({
    resolver: zodResolver(brandSchema),
    defaultValues: brand,
  })

  const showEditModal = () => {
    reset(brand)
    setIsEditModalVisible(true)
  }

  const handleEditOk = handleSubmit((data) => {
    console.log(data)
    editBrandMutation.mutate(data)
    setIsEditModalVisible(false)
  })

  const handleEditCancel = () => {
    setIsEditModalVisible(false)
  }

  function handleDelete() {
    deleteBrandMutation.mutate()
    navigate(ROUTE_PATHS_MANAGER.M_BRAND)
  }

  return (
    <div className="px-10 py-5">
      <Card
        title={<h1 className="text-2xl font-bold">{brand?.brandName}</h1>}
        extra={
          <div className="space-x-2">
            <Button type="primary" icon={<EditOutlined />} onClick={showEditModal}>
              Edit
            </Button>
            <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete()}>
              Delete
            </Button>
          </div>
        }
        className="shadow-lg"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-4">
            <Image src={brand?.brandImg} alt={brand?.brandName} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-2/3">
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Brand ID">{brand?.brandId}</Descriptions.Item>
              <Descriptions.Item label="Brand Name">{brand?.brandName}</Descriptions.Item>
              <Descriptions.Item label="Made In">{brand?.madeIn}</Descriptions.Item>
              <Descriptions.Item label="Description">{brand?.description}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </Card>

      <Modal title="Edit Brand" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
        <form onSubmit={handleEditOk} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Brand Name</label>
            <Controller
              name="brandName"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.brandName && <p className="mt-1 text-sm text-red-600">{errors.brandName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Made In</label>
            <Controller name="madeIn" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
            {errors.madeIn && <p className="mt-1 text-sm text-red-600">{errors.madeIn.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={4} className="mt-1" />}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Brand Image</label>
            <Controller
              name="brandImg"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.brandImg && <p className="mt-1 text-sm text-red-600">{errors.brandImg.message}</p>}
          </div>
        </form>
      </Modal>
    </div>
  )
}
