import { ROUTE_PATHS } from '@/router'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

const UnauthorizedPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Result
        status="403"
        title="401"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Link to={ROUTE_PATHS.ROOT}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  )
}

export default UnauthorizedPage
