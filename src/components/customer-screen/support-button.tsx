import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import ChatBox from './chatbox'

const SupportButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-blue-500 text-white p-8 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          onClick={toggleChat}
        >
          <span className="text-xl">
            <MessageCircle />
          </span>
        </button>
      </div>

      {isChatOpen && <ChatBox closeChat={toggleChat} />}
    </div>
  )
}

export default SupportButton
