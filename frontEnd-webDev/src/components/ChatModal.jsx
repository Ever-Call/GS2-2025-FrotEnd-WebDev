import { useEffect, useState } from "react";

export default function ChatModal({setChatModalIsOpen, id, nome, chat, setChat}) {
  // const [messages, setMessages] = useState([{}]);
  // const [input, setInput] = useState("");

  // // id: number
  // // name: ''
  // // messages: []

  // const sendMessage = () => {
  //   if (input.trim() === "") return;
  //   setMessages([...messages, { text: input, sender: "Você" }]);
  //   setInput("");
  // };

  // function saveMessages(){
  //   let res = chat
  //   res[nome].push()
  //   setChat(chat[nome] = messages)
  // }

  // useEffect(()=>(saveMessages),[])

  // return (
  //   <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-3">
  //     <div className="w-80 sm:w-100 flex flex-col bg-white">
  //       {/* Cabeçalho */}
  //       <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
  //         <h2 className="font-bold">Chat com João Silva</h2>
  //         <button
  //           onClick={() => setChatModalIsOpen(false)}
  //           className="text-gray-500 hover:text-red-500 text-xl font-bold"
  //         >
  //           ×
  //         </button>
  //       </div>

  //       {/* Corpo do chat */}
  //       <div className="flex-1 p-4 overflow-y-scroll max-h-64 space-y-2">
  //         {messages.length === 0 ? (
  //           <p className="text-gray-500 text-center text-sm">
  //             Nenhuma mensagem ainda. Inicie a conversa!
  //           </p>
  //         ) : (
  //           messages.map((msg, index) => (
  //             <div
  //               key={index}
  //               className={`flex ${
  //                 msg.sender === "Você" ? "justify-end" : "justify-start"
  //               }`}
  //             >
  //               <div
  //                 className={`px-3 py-2 wrap-break-word rounded-lg text-sm max-w-[70%] ${
  //                   msg.sender === "Você"
  //                     ? "bg-blue-600 text-white"
  //                     : "bg-gray-200 text-gray-800"
  //                 }`}
  //               >
  //                 {msg.text}
  //               </div>
  //             </div>
  //           ))
  //         )}
  //       </div>

  //       {/* Área de digitação */}
  //       <div className="flex items-center border-t dark:border-gray-700 p-3">
  //         <input
  //           type="text"
  //           value={input}
  //           onChange={(e) => setInput(e.target.value)}
  //           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
  //           placeholder="Digite sua mensagem..."
  //           className="flex-1 border-none bg-transparent outline-none text-sm"
  //         />
  //         <button
  //           onClick={sendMessage}
  //           className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all"
  //         >
  //           Enviar
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // )
}
