import { Button, Typography } from 'antd'
import { HomeOutlined, FileTextOutlined } from '@ant-design/icons'
import imgUrl from '@/assets/img/thanhtoanqr.jpg'

const { Text } = Typography

const Checkout = () => {
  const handleBackToHome = () => {
    window.location.href = '/'
  }

  const handleGoToMyOrders = () => {
    window.location.href = '/customer-orders'
  }

  return (
    <div>
      {/* Banner section with image background */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp2034287.jpg')` }}
        >
          {/* Optional overlay to enhance text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Thank You!</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center my-24 mx-auto">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-8">
            <Text strong className="text-3xl">
              Vui lòng thanh toán trong vòng 12 tiếng để được xác nhận đơn hàng
            </Text>
            <br />
            <div className="mt-5">
              <Text strong className="text-3xl">
                Kiểm tra trạng thái đơn hàng ở order detail
              </Text>
            </div>
          </div>
          <div className="mb-8 w-1/2 mx-auto">
            <img src={imgUrl} alt="" />
          </div>
          <div className="space-x-4">
            <Button type="primary" size="large" icon={<HomeOutlined />} onClick={handleBackToHome}>
              Back to Home
            </Button>
            <Button size="large" icon={<FileTextOutlined />} onClick={handleGoToMyOrders}>
              Go to My Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
