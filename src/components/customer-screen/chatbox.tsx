/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Button, Input, Typography, Spin, Divider } from 'antd'
import { CloseOutlined, SendOutlined } from '@ant-design/icons'

const { Text } = Typography

const ChatBox = ({ closeChat }: any) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (input.trim() === '') return

    const userMessage = { id: messages.length + 1, sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://mommybaby-xi.vercel.app/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      setMessages((prev) => [...prev, { id: prev.length + 1, sender: 'support', text: data.reply }])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'support',
          text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-36 right-10 w-1/5 bg-white p-4 border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="flex justify-between items-center mb-4">
        <Text strong className="text-lg">
          AI hỗ trợ khách hàng
        </Text>
        <Button type="text" icon={<CloseOutlined />} onClick={closeChat} className="text-gray-500 hover:text-red-500" />
      </div>
      <Divider />
      <div className="h-[350px] overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-3 rounded-lg ${
              msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
            }`}
          >
            <Text>{msg.text}</Text>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <Spin tip="Đang tải..." />
          </div>
        )}
      </div>
      <div className="flex">
        <Input
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          className="flex-1 rounded-md"
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
          disabled={isLoading || input.trim() === ''}
          className="ml-2"
        >
          Gửi
        </Button>
      </div>
    </div>
  )
}

export default ChatBox
