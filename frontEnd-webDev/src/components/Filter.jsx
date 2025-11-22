import { FilterIcon } from "lucide-react"
import { useEffect, useState } from "react"
// filtro: área, cidade ou tecnologia -> area, localizacao, habilidadesTecnicas[index]

export default function Filter({database, profiles, setProfiles, filters, setSearchContent}){
  const [area,setArea]= useState('')
  const [cidade, setCidade] = useState('')
  const [habilidadeTecnica, setHabilidadeTecnica] = useState('')

  useEffect(()=>{

    let res = profiles

    if(area){
      res =res.filter((r)=>r.area==area)
    }

    if(cidade){
      res =res.filter((r)=>r.localizacao==cidade)
    }
    
    if(habilidadeTecnica){
      res = res.filter((r)=>r.habilidadesTecnicas.includes(habilidadeTecnica))
    }

    setProfiles(res)
  },[area,cidade,habilidadeTecnica])

  function reset(){
    setArea("")
    setCidade("")
    setHabilidadeTecnica("")
    setSearchContent("")
    setProfiles(database)
  }
  
  return(
    <>
      <div className="flex items-center gap-2 mb-3">
        <FilterIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h2 className="font-semibold text-gray-900 dark:text-white">Filtros</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Área */}
        <select onChange={(ev)=>setArea(ev.target.value)} value={area} className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="" >Todas as áreas</option>
          {filters.area.map((area)=>(
            // onClick não funciona bem em option, é melhor usar onChange em select
            <option value={area} key={area}>{area}</option>
          ))}
        </select>

        {/* cidade */}
        <select onChange={(ev)=>setCidade(ev.target.value)} value={cidade} className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="" >Todas as cidades</option>
          {filters.cidade.map((cidade)=>(
            <option key={cidade} value={cidade}>{cidade}</option>
          ))}
        </select>

        {/* tecnologia */}
        <select onChange={(ev)=>setHabilidadeTecnica(ev.target.value)} value={habilidadeTecnica} className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="" >Todas as tecnologias</option>
          {filters.tecnologia.map((tecnologia)=>(
            <option key={tecnologia} value={tecnologia}>{tecnologia}</option>
          ))}
        </select>

      </div>
      {/* Limpar filtros */}
      <div className="flex justify-center mt-3 ">
        <button
              onClick={reset}
              className="border w-full border-gray-300 dark:border-gray-600 dark:text-white rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors  cursor-pointer"
            >
              Limpar filtros
        </button>
      </div>
    </>
  )
}