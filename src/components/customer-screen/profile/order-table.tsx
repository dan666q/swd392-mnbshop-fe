import React from 'react'
import { useViewOrderUserList } from '@/hooks/customer-hook/order/use-view-order-user'
import { Table, Tag, Button } from 'antd'
import { format } from 'date-fns'
import { useAuth } from '@/hooks/use-auth'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS_CUSTOMER } from '@/router'

const { Column } = Table

const OrderTable = () => {
  const { user } = useAuth()
  const { data: orderList, isLoading, error } = useViewOrderUserList()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // Filter orderList to show only orders belonging to the logged-in user
  const userOrderList = orderList.filter((order) => order.userId === user.data.id)

  return (
    <Table dataSource={userOrderList} style={{ width: '1000px' }}>
      <Column title="Order ID" dataIndex="orderId" key="orderId" />
      <Column
        title="Payment Method"
        dataIndex="paymentMethod"
        key="paymentMethod"
        render={(paymentMethod) => <span>{paymentMethod}</span>}
      />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={(status) => <Tag color={status === 'processing' ? 'blue' : 'gold'}>{status}</Tag>}
      />
      <Column
        title="Order Date"
        dataIndex="orderDate"
        key="orderDate"
        render={(orderDate) => format(new Date(orderDate), 'yyyy-MM-dd HH:mm:ss')}
      />
      <Column
        title="Total Price"
        dataIndex="totalPrice"
        key="totalPrice"
        render={(totalPrice) => `$${totalPrice.toFixed(2)}`}
      />
      <Column
        title="Actions"
        key="actions"
        render={(_, record) => (
          <Link to={`${ROUTE_PATHS_CUSTOMER.MY_ORDER}/${record.orderId}`}>
            <Button type="primary">Details</Button>
          </Link>
        )}
      />
    </Table>
  )
}

export default OrderTable
