import { useState } from "react"
import ModalCard from "./ModalCard"
import { ThumbsUp } from "lucide-react"

export default function ProfileCard({profissional, setChat, chat}){
	const {nome, cargo, softSkills}= profissional
  const [rank, setRank] = useState(()=>Math.floor(Math.random()*100))
	const [modalIsOpen, setModalIsOpen] = useState(false) 
	const initials = nome.slice(0, 2)

  return(
		<>
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden" onClick={()=> setModalIsOpen(true)}>
				{/* Header com banner */}
      	<div className="h-16 bg-linear-to-r from-blue-500 to-blue-600"></div>

				{/* Profile Info */}
				<div className="px-4 pb-4 -mt-8">
					<div className="flex justify-between items-start mb-3">
						{/* Imagem */}
						<div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl cursor-pointer">
							{initials}
						</div>
						
						<div className="flex items-center gap-1 mt-8 text-amber-500">
							<ThumbsUp className="w-4 h-4 fill-current" />
							<span className="text-sm font-semibold">{rank}</span>
						</div> {/* parece que o fixed não olha para o elemento pai, mesmo com relative */}
					</div>
					
					<div>
						<h3 className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
            {nome}
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cargo}</p>
						<div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
							{softSkills.join(' | ')}
						</div>
					</div>
				</div>
			</div>

			{/* ModalCard */}
			{/* Pela maneira de como foi construido o código, tive que deixar a a operação de baixo fora da div de cima
					pois ocorre um erro chamado 'event bubbling', acontece que toda vez que eu clicava em alguma ProfileCard
					e logo depois disso, se eu quisesse fechar não seria possível já que o meu setModalIsOpen sempre seria 'true'
			*/}
			{modalIsOpen && <ModalCard profissional={profissional} functions={{rank, setRank, setModalIsOpen}} setChat={setChat} chat={chat}/> }			
		</>
  )
}