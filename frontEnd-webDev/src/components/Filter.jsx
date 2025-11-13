import { useState } from "react"
// filtro: área, cidade ou tecnologia -> area, localizacao, habilidadesTecnicas[index]

export default function Filter({database, profiles, setProfiles, filters}){
  console.log(filters)
  const [area,setArea]= useState('')
  const [cidade, setCidade] = useState('')
  const [habilidadeTecnica, setHabilidadeTecnica] = useState('')

  function handle(){
    // os useState são assincronos dentro do seu bloco de codigo, neste caso o bloco de código é handleSearch
    // setProfiles(database.filter((profile)=>{
    //   const searchTerm = searchContent.toLocaleLowerCase()
    //   const profileName = profile.nome.toLocaleLowerCase()
    //   return profileName.includes(searchTerm)
    // }))

    if(area){
      setProfiles(profiles.filter((profile)=>area == profile.area))
    }
    if(cidade){
      setProfiles(profiles.filter((profile)=>cidade == profile.localizacao))
    }
    // if(habilidadeTecnica){

    // }

  }
  function filterArea(ev){
    setArea(ev.target.value)
    if(area){
      setProfiles(profiles.filter((profile)=>area == profile.area))
    }
    console.log(area)
  }

  function filterCidade(ev){
    setCidade(ev.target.value)
    if(!cidade){
      setProfiles(profiles.filter((profile)=>cidade == profile.localizacao))
    }
  }
  
  return(
    <div>
      {/* Área */}
      <select onChange={(ev)=>filterArea(ev)}>
        <option value="" >Área</option>
        {filters.area.map((area)=>(
          // onClick não funciona bem em option, é melhor usar onChange em select
          <option value={area} key={area}>{area}</option>
        ))}
      </select>

      {/* cidade */}
      <select onChange={(ev)=>filterCidade(ev)}>
        <option value="" >Cidade</option>
        {filters.cidade.map((cidade)=>(
          <option value={cidade}>{cidade}</option>
        ))}
      </select>

      {/* tecnologia */}
      <select>
        <option value="" >Tecnologia</option>
        {filters.tecnologia.map((tecnologia)=>(
          <option value={tecnologia}>{tecnologia}</option>
        ))}
      </select>
    </div>
  )
}