import { useState } from "react"
import ModalCard from "./ModalCard"

export default function ProfileCard({profissional}){
	const {foto, nome, cargo, softSkills}= profissional
  const [rank, setRank] = useState(()=>Math.floor(Math.random()*100))
	const [modalIsOpen, setModalIsOpen] = useState(false) 

  return(
		<>
			<div className="bg-gray-300 rounded-2xl p-4 cursor-pointer" onClick={()=> setModalIsOpen(true)}>

				<div className="flex relative">
					{/* Imagem */}
					<div className="rounded-full bg-blue-300 w-10 h-10 flex items-center justify-center">A</div>
					<div>
						<p>{nome}</p>
						<p>{cargo}</p>
					</div>
					<div className="absolute top-0 right-0">{rank}</div> {/* parece que o fixed não olha para o elemento pai, mesmo com relative */}
				</div>

				<div>{softSkills}</div>

			</div>

			{/* ModalCard */}
			{/* Pela maneira de como foi construido o código, tive que deixar a a operação de baixo fora da div de cima
					pois ocorre um erro chamado 'event bubbling', acontece que toda vez que eu clicava em alguma ProfileCard
					e logo depois disso, se eu quisesse fechar não seria possível já que o meu setModalIsOpen sempre seria 'true'
			*/}
			{modalIsOpen && <ModalCard profissional={profissional} functions={{rank, setRank, setModalIsOpen}}/> }			
		</>
  )
}