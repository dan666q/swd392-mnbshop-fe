/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useViewOrderUserDetail } from '@/hooks/customer-hook/order/use-view-order-detail-user'
import { Table, Tag, Spin, Descriptions, Button, Modal, Form, Input, notification } from 'antd'
import { format } from 'date-fns'
import { useAddFeedback } from '@/hooks/customer-hook/feedback/use-add-feedback'
import { useAuth } from '@/hooks/use-auth'
import imgUrl from '@/assets/img/thanhtoanqr.jpg'

const { Column } = Table
const { TextArea } = Input

const OrderDetailTable = () => {
  const { orderId } = useParams()
  const { data: orderDetail, isLoading, error, refetch } = useViewOrderUserDetail(orderId)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [feedbackProducts, setFeedbackProducts] = useState([]) // State to track products with feedback
  const { user } = useAuth()
  const [form] = Form.useForm()

  useEffect(() => {
    if (orderId) {
      refetch()
    }
  }, [orderId, refetch])

  const {
    deliverAddress = '',
    phone = '',
    fullName = '',
    paymentMethod = '',
    status = '',
    orderDate = '',
    productOrders = [],
  } = orderDetail || {}

  const computedTotalPrice = useMemo(() => {
    return productOrders.reduce((total, product) => total + product.quantity * product.unitPrice, 0)
  }, [productOrders])

  const handleFeedbackClick = (product) => {
    setCurrentProduct(product)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setCurrentProduct(null)
    form.resetFields()
  }

  const { mutate: addFeedback } = useAddFeedback()

  const handleFeedbackSubmit = (values) => {
    if (currentProduct) {
      const feedback = {
        rate: values.rate,
        comment: values.comment,
        productId: currentProduct.productId,
        orderId: Number(orderId),
        userId: user?.data?.id, // Ensure user ID is included
        replyId: null, // Include replyId if required
      }

      console.log('Submitting feedback:', feedback) // Log feedback data

      addFeedback(feedback, {
        onSuccess: (response) => {
          console.log('Feedback submission successful:', response) // Log API response
          handleModalClose()
          notification.success({ message: 'Feedback submitted successfully' })
          // Update feedbackProducts state with productId
          setFeedbackProducts([...feedbackProducts, currentProduct.productId])
        },
        onError: (error) => {
          console.error('Feedback submission failed:', error) // Log error
          notification.error({ message: 'Failed to submit feedback', description: error.message })
        },
      })
    }
  }

  const formatNumber = (number: any) => {
    return new Intl.NumberFormat('vi-VN').format(number)
  }

  if (isLoading) return <Spin size="large" />
  if (error) return <p>Error: {error.message}</p>
  if (!orderDetail) return <p>No order details found for order ID {orderId}</p>

  return (
    <div className="mx-auto p-4">
      <Descriptions title="Order Details" bordered>
        <Descriptions.Item label="Order ID">{orderId}</Descriptions.Item>
        <Descriptions.Item label="Full Name">{fullName}</Descriptions.Item>
        <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
        <Descriptions.Item label="Delivery Address">{deliverAddress}</Descriptions.Item>
        <Descriptions.Item label="Payment Method">
          <div className="mt-5">
            <span>Thanh toán chuyển khoản</span>
            {status === 'processing' && <img src={imgUrl} alt="" className="w-72 h-96" />}
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={status === 'processing' ? 'blue' : 'gold'}>{status.toLocaleUpperCase()}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Order Date">{format(new Date(orderDate), 'yyyy-MM-dd HH:mm:ss')}</Descriptions.Item>
        <Descriptions.Item label="Total Price">{`${formatNumber(computedTotalPrice)} VND`}</Descriptions.Item>
      </Descriptions>

      <Table dataSource={productOrders} rowKey="productId" className="mt-4">
        <Column title="Product ID" dataIndex="productId" key="productId" />
        <Column title="Product Name" dataIndex="productName" key="productName" />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column
          title="Price"
          dataIndex="unitPrice"
          key="unitPrice"
          render={(unitPrice) => `${formatNumber(unitPrice)} VND`}
        />
        <Column
          title="Total"
          key="total"
          render={(_, record) => `${formatNumber(record.quantity * record.unitPrice)} VND`}
        />
        {status === 'completed' && (
          <Column
            title="Feedback"
            key="feedback"
            render={(_, product) => (
              <Button
                type="primary"
                onClick={() => handleFeedbackClick(product)}
                disabled={feedbackProducts.includes(product.productId)} // Disable if productId is in feedbackProducts
              >
                Give Feedback
              </Button>
            )}
          />
        )}
      </Table>

      <Modal
        title={`Submit Feedback for ${currentProduct?.productName}`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleFeedbackSubmit}>
          <Form.Item name="rate" label="Rate" rules={[{ required: true, message: 'Please provide a rating' }]}>
            <Input type="number" min={1} max={5} />
          </Form.Item>
          <Form.Item name="comment" label="Comment" rules={[{ required: true, message: 'Please provide a comment' }]}>
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default OrderDetailTable
