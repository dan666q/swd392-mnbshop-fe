import { useAuth } from '@/hooks/use-auth'
import { AuthUser } from '@/types'
import { Card, Row, Col, Typography } from 'antd'
import { format } from 'date-fns'

const { Title, Text } = Typography

export default function CustomerInfo() {
  const { user, loadingInitial } = useAuth()

  if (loadingInitial) return <p>Loading...</p>
  const formattedDateOfBirth = format(new Date(user?.data.dateOfBirth), 'yyyy-MM-dd')

  // Function to convert boolean gender to string
  const getGenderLabel = (isMale: boolean): string => {
    return isMale ? 'Male' : 'Female'
  }

  return (
    <div className="col-9 col-xl-8 col-lg-7 col-md-12">
      <div className="cart-info">
        <Card title="Account Information" className="rounded-lg shadow-lg">
          <Row gutter={[16, 24]} className="text-gray-700">
            <Col span={12}>
              <Title level={4} className="mb-4">
                <span className="font-semi">Username:</span> <span className="text-3xl">{user?.data.username}</span>
              </Title>
              <Title level={4} className="mb-4">
                <span className="font-bold">Full Name:</span> <span className="text-3xl">{user?.data.fullName}</span>
              </Title>
              <Title level={4} className="mb-4">
                <span className="font-bold">Gender:</span>{' '}
                <span className="text-3xl">{getGenderLabel(user?.data.gender)}</span>
              </Title>
            </Col>
            <Col span={12}>
              <Title level={4} className="mb-4">
                <span className="font-bold">Address:</span> <span className="text-3xl">{user?.data.address}</span>
              </Title>
              <Title level={4} className="mb-4">
                <span className="font-bold">Phone:</span> <span className="text-3xl">{user?.data.phone}</span>
              </Title>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
