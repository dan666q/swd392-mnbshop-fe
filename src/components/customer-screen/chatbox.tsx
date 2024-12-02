/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

const ChatBox = ({ closeChat }: any) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (input.trim() === '') return

    // Thêm tin nhắn người dùng vào danh sách
    const userMessage = { id: messages.length + 1, sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('') // Reset input
    setIsLoading(true)

    try {
      // Gọi API
      const response = await fetch('https://mommybaby-bachthao4321-bach-thaos-projects.vercel.app/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      // Thêm phản hồi từ bot vào danh sách tin nhắn
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'support',
          text: data.reply,
        },
      ])
    } catch (error) {
      console.error('Error sending message:', error)
      // Thêm thông báo lỗi vào danh sách tin nhắn
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

  // Xử lý khi người dùng nhấn Enter
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-36 right-10 w-1/6 bg-white p-4 border border-gray-300 rounded-lg shadow-lg z-50">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-lg">AI hỗ trợ khách hàng</h2>
        <button className="text-gray-500" onClick={closeChat}>
          ✖
        </button>
      </div>
      <div className="h-[350px] overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500">
            <span className="animate-pulse">...</span>
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          className={`text-white p-2 ml-2 rounded-lg ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          Gửi
        </button>
      </div>
    </div>
  )
}

export default ChatBox
