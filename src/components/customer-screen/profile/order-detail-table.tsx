import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useViewOrderUserDetail } from '@/hooks/customer-hook/order/use-view-order-detail-user'
import { Table, Tag, Spin, Descriptions } from 'antd'
import { format } from 'date-fns'

const { Column } = Table

const OrderDetailTable = () => {
  const { orderId } = useParams()

  const { data: orderDetail, isLoading, error, refetch } = useViewOrderUserDetail(orderId)

  useEffect(() => {
    if (orderId) {
      refetch()
    }
  }, [orderId, refetch])

  // Ensure hooks are always called consistently
  const {
    deliverAddress = '',
    phone = '',
    fullName = '',
    paymentMethod = '',
    status = '',
    orderDate = '',
    productOrders = [],
  } = orderDetail || {}

  // Compute the total price from the product orders
  const computedTotalPrice = useMemo(() => {
    return productOrders.reduce((total, product) => total + product.quantity * product.unitPrice, 0)
  }, [productOrders])

  if (isLoading) return <Spin size="large" />
  if (error) return <p>Error: {error.message}</p>
  if (!orderDetail) return <p>No order details found for order ID {orderId}</p>

  console.log('Order Detail:', orderDetail)

  return (
    <div className=" mx-auto p-4">
      <Descriptions title="Order Details" bordered>
        <Descriptions.Item label="Order ID">{orderId}</Descriptions.Item>
        <Descriptions.Item label="Full Name">{fullName}</Descriptions.Item>
        <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
        <Descriptions.Item label="Delivery Address">{deliverAddress}</Descriptions.Item>
        <Descriptions.Item label="Payment Method">{paymentMethod}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={status === 'processing' ? 'blue' : 'gold'}>{status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Order Date">{format(new Date(orderDate), 'yyyy-MM-dd HH:mm:ss')}</Descriptions.Item>
        <Descriptions.Item label="Total Price">{`$${computedTotalPrice.toFixed(2)}`}</Descriptions.Item>
      </Descriptions>

      <Table dataSource={productOrders} rowKey="productId" className="mt-4">
        <Column title="Product ID" dataIndex="productId" key="productId" />
        <Column title="Product Name" dataIndex="productName" key="productName" />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column
          title="Price"
          dataIndex="unitPrice"
          key="unitPrice"
          render={(unitPrice) => `$${unitPrice.toFixed(2)}`}
        />
        <Column
          title="Total"
          key="total"
          render={(_, record) => `$${(record.quantity * record.unitPrice).toFixed(2)}`}
        />
      </Table>
    </div>
  )
}

export default OrderDetailTable
