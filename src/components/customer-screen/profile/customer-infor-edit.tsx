import React, { useEffect } from 'react'
import { Form, Input, Button, Row, Col, Card, Radio, message, DatePicker } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useAuth } from '@/hooks/use-auth'
import useEditAccount from '@/hooks/customer-hook/profile/use-edit-account'
import moment from 'moment'

const CustomerInforEdit = () => {
  const [form] = useForm()
  const { user } = useAuth()
  const { mutate: updateAccount, isLoading: isUpdating } = useEditAccount(user?.data.id)

  useEffect(() => {
    // Populate form fields with user data when user.data changes
    if (user?.data) {
      form.setFieldsValue({
        fullName: user.data.fullName,
        gender: user.data.gender, // Assuming gender is already boolean
        address: user.data.address,
        phone: user.data.phone,
        image: user.data.image,
        dateOfBirth: user.data.dateOfBirth ? moment(user.data.dateOfBirth) : null, // Use moment to parse date if needed
      })
    }
  }, [form, user])

  const disabledDate = (current) => {
    // Disable dates before 1900 and after the current date
    return current && (current.year() > moment().year() || current.year() < 1900)
  }

  const onFinish = async (values) => {
    try {
      const { fullName, gender, address, phone, image, password, dateOfBirth } = values

      // Prepare data object to send to updateAccount function
      const data = {
        id: user.data.id,
        fullName,
        gender, // Assuming gender is boolean
        address,
        phone,
        image,
        password: password || user.data.password, // Only include password if it's provided
        dateOfBirth: dateOfBirth ? dateOfBirth.format('YYYY-MM-DD') : user.data.dateOfBirth, // Format date if provided, else use current dateOfBirth
        email: user.data.email, // Assuming email doesn't change here
      }

      // Call updateAccount mutation function
      await updateAccount(data)

      // Reset form fields on successful update
      form.resetFields()

      // Show success message
      message.success('Account updated successfully')
    } catch (error) {
      console.error('Failed to update account:', error)
      message.error('Failed to update account')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="col-9 col-xl-8 col-lg-7 col-md-12">
      <div className="cart-info">
        <Card title="Edit Account Information" className="rounded-lg shadow-lg">
          <Form
            form={form}
            layout="vertical"
            name="customerEditForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={[16, 24]} className="text-gray-700">
              <Col span={12}>
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[{ required: true, message: 'Please input the full name!' }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>

                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: 'Please select the gender!' }]}
                >
                  <Radio.Group>
                    <Radio value={true}>Male</Radio>
                    <Radio value={false}>Female</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: 'Please input the address!' }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, message: 'Please input the phone number!' }]}
                >
                  <Input placeholder="Phone" />
                </Form.Item>

                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[
                    { required: true, message: 'Please select the date of birth!' },
                    () => ({
                      validator(_, value) {
                        if (!value || (value.year() >= 1900 && value.year() <= moment().year())) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('Please select a valid date of birth between 1900 and current year!')
                        )
                      },
                    }),
                  ]}
                >
                  <DatePicker style={{ width: '100%' }} disabledDate={disabledDate} format="DD/MM/YYYY" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Avatar URL" name="image">
                  <Input placeholder="Avatar URL" />
                </Form.Item>

                <Form.Item
                  label="New Password"
                  name="password"
                  rules={[{ min: 6, message: 'Password must be at least 6 characters!' }]}
                >
                  <Input.Password placeholder="New Password" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('The two passwords do not match!'))
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end">
              <Col>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={isUpdating}>
                    Save Changes
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default CustomerInforEdit
