import { useEffect, useState } from "react"
import ChatModal from "./ChatModal"

// profissional = {foto, nome, localização, cargo, area, formação, resumo, habilidadesTecnicas, softskills, experinencias, areaInteresses}
export default function ModalCard({profissional, functions}){
  const {foto, nome, localizacao, cargo, area, formacao, resumo, 
          habilidadesTecnicas, softskills, experiencias, areaInteresses, 
          projetos, certificacoes} = profissional
  const {rank, setRank, setModalIsOpen} = functions
  
  const [chatModalIsOpen, setChatModalIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    // se houver um função no return dentro de um useEffect então ele será executado após ele ser desmontado, o useEffect fois contruido dessa maneira aparentemente
    // parece que o react sabe que este componente foi desmontado devido ao "{modalIsOpen && <ModalCard...}" do ProfileCard.jsx
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  
  return(
    <div className="fixed w-full h-full z-10 bg-black/60 backdrop-blur-sm inset-0 flex justify-center items-center">
      <div className="relative p-4 bg-gray-100 max-w-7xl">
        {/* Fecha o ProfileCard */}
          <div className="text-red-500 absolute top-0 right-0" onClick={()=>setModalIsOpen(false)}>FECHAR</div>

          <div>
            <div className="flex">
              {/* imagem */}
              <div className="rounded-full w-10 h-10 bg-blue-800 flex justify-center items-center">A</div>
              <div>
                <p>{nome}</p>
                <p>{cargo}</p>
                <p>{localizacao}</p>
                <p>{area}</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>Formação</p>
              <p>{formacao.curso}</p>
              <p>{formacao.instituicao}</p>
              <p>{formacao.ano}</p>
            </div>

            <p>{resumo}</p>
            <p>{habilidadesTecnicas}</p>
            <p>{softskills}</p>

            <div>
              <p>Experiencias</p>
              {experiencias.map((experiencia,idx)=>(
                <ul key={idx}>
                  <li>{experiencia.empressa}</li>
                  <li>{experiencia.cargo}</li>
                  <li>{experiencia.inicio}</li>
                  <li>{experiencia.fim}</li>
                </ul>
                
              ))}
            </div>

            <p>{areaInteresses}</p>
          </div>

          <div>
            <div>
              <p>Projetos</p>
              {projetos.map((projeto,idx)=>(
                <ul key={idx}>
                  <li>{projeto.titulo}</li>
                  <li>{projeto.link}</li>
                  <li>{projeto.descricao}</li>
                </ul>
              ))}
            </div>
            <p>{certificacoes}</p>
          </div>

          <div>
            <p>{rank}</p>
            <button onClick={()=> setChatModalIsOpen(true)}>Enviar mensagem</button>
            <button onClick={()=>setRank(rank+1)}>Recomendar</button>
          </div>

          {chatModalIsOpen && <ChatModal setChatModalIsOpen={setChatModalIsOpen} nome={nome} />}
      </div>
    </div>
  )
}