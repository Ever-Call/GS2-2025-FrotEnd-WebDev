import { useEffect, useState } from "react"
import ChatModal from "./ChatModal"
import { Briefcase, MapPin, MessageCircle, ThumbsUp, X } from "lucide-react"

// profissional = {foto, nome, localização, cargo, area, formação, resumo, habilidadesTecnicas, softskills, experinencias, areaInteresses}
export default function ModalCard({profissional, functions, chat, setChat}){
  const {id, foto, nome, localizacao, cargo, area, formacao, resumo, 
          habilidadesTecnicas, softSkills, experiencias, areaInteresses, 
          projetos, certificacoes} = profissional
  const {rank, setRank, setModalIsOpen} = functions
  
  const [chatModalIsOpen, setChatModalIsOpen] = useState(false)
  const [clicked, setClicked] = useState(false);
  
  const initials = nome.slice(0, 2)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    // se houver um função no return dentro de um useEffect então ele será executado após ele ser desmontado, o useEffect fois contruido dessa maneira aparentemente
    // parece que o react sabe que este componente foi desmontado devido ao "{modalIsOpen && <ModalCard...}" do ProfileCard.jsx
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  function rankUp(){
    setClicked(true)
    setRank(rank+1)
  }
  
  return(
    <div className="fixed inset-0 bg-black/50 z-2 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Perfil Profissional</h2>
          <button 
            onClick={()=>setModalIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div>
          <div className="h-32 bg-linear-to-r from-blue-500 to-blue-600"></div>
          <div className="px-6">
            <div className="w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 -mt-16 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-4xl">
              {initials}
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="px-6 py-4 space-y-6">
          {/* Informações básicas */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{nome}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">{cargo}</p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
              <MapPin className="w-4 h-4 mr-2" />
              {localizacao}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
              <Briefcase className="w-4 h-4 mr-2" />
              {area}
            </div>
          </div>

          {/* Resumo */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sobre</h3>
            <p className="text-gray-700 dark:text-gray-300">{resumo}</p>
          </div>

          {/* Formação */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Formação</h3>
            {formacao.map((f)=>(
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2">
                <p className="font-semibold text-gray-900 dark:text-white">{f.curso}</p>
                <p className="text-gray-600 dark:text-gray-300">{f.instituicao}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{f.ano}</p>
              </div>
            ))}
          </div>

          {/* Experiências */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Experiência</h3>
            {experiencias.map((exp, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2">
                <p className="font-semibold text-gray-900 dark:text-white">{exp.cargo}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.empresa}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Inicio:{exp.inicio} - Fim:{exp.fim}</p>
              </div>
            ))}
          </div>

          {/* Habilidades Técnicas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {habilidadesTecnicas.map((skill, idx) => (
                <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Área de Interesses */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Área de Interesses</h3>
            <p className="text-gray-700 dark:text-gray-300">{areaInteresses.join(", ")}</p>
          </div>

          {/* Projetos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Projetos</h3>
            <div className="space-y-3">
              {projetos.map((projeto, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">{projeto.titulo}</p>
                  <a className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-2 inline-block">
                    {projeto.link}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{projeto.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certificações</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <ul className="space-y-2">
                {certificacoes.map((cert, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => setChatModalIsOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Mensagem
            </button>
            <button 
              onClick={rankUp}
              disabled={clicked}
              className={`flex items-center justify-center gap-2 
              border border-blue-600
              text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-400
              px-4 py-2 rounded-full text-sm font-semibold transition-colors
              ${clicked ? "bg-blue-600 text-white opacity-90 hover:bg-blue-600 dark:hover:bg-blue-600" : ""}`}
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        

        {/* <div>
          <p>{rank}</p>
          <button onClick={()=> setChatModalIsOpen(true)}>Enviar mensagem</button>
          <button onClick={()=>setRank(rank+1)}>Recomendar</button>
        </div> */}

        
            
          {chatModalIsOpen && <ChatModal setChatModalIsOpen={setChatModalIsOpen} nome={nome} chat={chat} setChat={setChat} id={id}/>}
      </div>
    </div>
  )
}