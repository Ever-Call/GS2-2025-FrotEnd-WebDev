import { useState } from "react";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "Você" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Botão para abrir o chat */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        💬 Enviar mensagem
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-80 sm:w-100 flex flex-col">
            {/* Cabeçalho */}
            <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
              <h2 className="font-bold text-gray-800 dark:text-white">Chat com João Silva</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Corpo do chat */}
            <div className="flex-1 p-4 overflow-y-scroll max-h-64 space-y-2">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center text-sm">
                  Nenhuma mensagem ainda. Inicie a conversa!
                </p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "Você" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 wrap-break-word rounded-lg text-sm max-w-[70%] ${
                        msg.sender === "Você"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Área de digitação */}
            <div className="flex items-center border-t dark:border-gray-700 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 border-none bg-transparent outline-none text-sm text-gray-800 dark:text-white"
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
