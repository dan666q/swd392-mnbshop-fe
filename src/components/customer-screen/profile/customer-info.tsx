import { useAuth } from '@/hooks/use-auth'
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
              <div className="mb-4">
                <Title level={5}>Username:</Title>
                <Text className="text-3xl">{user?.data.username}</Text>
              </div>
              <div className="mb-4">
                <Title level={5}>Full Name:</Title>
                <Text className="text-3xl">{user?.data.fullName}</Text>
              </div>
              <div className="mb-4">
                <Title level={5}>Gender:</Title>
                <Text className="text-3xl">{getGenderLabel(user?.data.gender)}</Text>
              </div>
              <div className="mb-4">
                <Title level={5}>Date of Birth:</Title>
                <Text className="text-3xl">{formattedDateOfBirth}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div className="mb-4">
                <Title level={5}>Address:</Title>
                <Text className="text-3xl">{user?.data.address}</Text>
              </div>
              <div className="mb-4">
                <Title level={5}>Phone:</Title>
                <Text className="text-3xl">{user?.data.phone}</Text>
              </div>
              <div className="mb-4">
                <Title level={5}>Email:</Title>
                <Text className="text-3xl">{user?.data.email}</Text>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
