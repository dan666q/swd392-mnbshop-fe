import { Layout, Card, Statistic, Row, Col, Table } from 'antd'
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useViewOrderList } from '../order-mng/use-view-order-list'
import { useViewAccountList } from '../account-mng/view-account/use-view-account-list'
import { useViewProductListManager } from '../product-mng/view-product/use-view-product-manager'
import { VIEW_ORDER_COLS } from '@/constants/table-columns'

const { Content } = Layout

export default function DashboardInfo() {
  const { data: order } = useViewOrderList()
  const { data: account } = useViewAccountList()
  const { data: product } = useViewProductListManager()

  const totalMoney = order?.reduce((total, item) => total + item.totalPrice, 0)
  const totalUser = account?.length
  const totalOrder = order?.length
  const totalProduct = product?.length
  const newOrder = order?.slice(0, 5)

  return (
    <div>
      <Content>
        <Row gutter={16} className="mb-6">
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Sales"
                value={totalMoney}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DollarOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total User"
                value={totalUser}
                valueStyle={{ color: '#cf1322' }}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Orders" value={totalOrder} prefix={<ShoppingCartOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Product"
                value={totalProduct}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ShoppingOutlined />}
              />
            </Card>
          </Col>
        </Row>
        <Card title="Recent Orders" className="mb-6">
          <Table columns={VIEW_ORDER_COLS} dataSource={newOrder} pagination={false} />
        </Card>
      </Content>
    </div>
  )
}
