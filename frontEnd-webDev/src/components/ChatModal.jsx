import { Send, X } from "lucide-react"
import { useState } from "react"

export default function ChatModal({setChatModalIsOpen, id, nome, chat, setChat}) {
  const [input, setInput] = useState('')
  const initials = nome.slice(0,2)
  function handleSend(){
    setChat((prev)=>({
        ...prev,
        [id]:[
              ...(prev[id] || []),
              {
                text: input, 
                time:`${new Date().getHours()}:${new Date().getMinutes()}`
              }
            ]
      }))

    setInput('')
  }
  return(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg flex flex-col" style={{ height: '600px' }}>
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
              {initials}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{nome}</h3>
            </div>
          </div>
          <button 
            onClick={()=>setChatModalIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
          {(chat[id] || []).length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Nenhuma mensagem ainda.<br />Inicie a conversa!
              </p>
            </div>
          ) : (
            chat[id].map((msg, idx) => (
              <div
                key={idx}
                className='flex justify-end'
              >
                <div
                  className={'max-w-[70%] px-4 py-2 rounded-2xl bg-blue-600 text-white'}
                >
                  <p className="text-sm wrap-break-word">{msg.text}</p>
                  <p className={`text-xs mt-1 text-blue-100`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="border-t dark:border-gray-700 bg-white dark:bg-gray-800 p-4 rounded-b-lg">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escreva uma mensagem..."
              className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
