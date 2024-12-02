import { Button, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useAddBlog } from './use-add-blog'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { POPUP_TITLE } from '@/constants'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'

export default function AddBlog() {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  const addBlogMutation = useAddBlog()
  const userId = localStorage.getItem('userId')

  const handleSubmit = (values: FormData) => {
    const formData = {
      ...values,
      userId: userId,
    }
    console.log('Received values of form: ', formData)
    addBlogMutation.mutate(formData)
    form.resetFields()
    dispatch(closePopup(POPUP_TITLE.ADD_BLOG))
  }

  function handleCancel() {
    form.resetFields()
    dispatch(closePopup(POPUP_TITLE.ADD_BLOG))
  }

  return (
    <div className="w-10/12 mx-auto px-4 py-8">
      <Form form={form} layout="vertical" name="blogForm" onFinish={handleSubmit}>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item name="content" label="Content" rules={[{ required: true, message: 'Please input the content!' }]}>
          <Input.TextArea rows={10} />
        </Form.Item>

        <Form.Item
          name="blogImg"
          label="Image URL"
          rules={[{ required: true, message: 'Please input the image URL!' }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item name="tags" label="Tags">
          <Input size="large" placeholder="Separate tags with commas" />
        </Form.Item>

        <Form.Item className="flex justify-end gap-5">
          <Button type="text" danger size="large" className="mr-5" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" icon={<PlusOutlined />} htmlType="submit" size="large">
            Add Blog Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
