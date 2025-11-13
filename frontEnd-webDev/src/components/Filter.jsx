import { useEffect, useState } from "react"
// filtro: área, cidade ou tecnologia -> area, localizacao, habilidadesTecnicas[index]

export default function Filter({database, profiles, setProfiles, filters}){
  console.log(filters)
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
  
  return(
    <div>
      {/* Área */}
      <select onChange={(ev)=>setArea(ev.target.value)}>
        <option value="" >Área</option>
        {filters.area.map((area)=>(
          // onClick não funciona bem em option, é melhor usar onChange em select
          <option value={area} key={area}>{area}</option>
        ))}
      </select>

      {/* cidade */}
      <select onChange={(ev)=>setCidade(ev.target.value)}>
        <option value="" >Cidade</option>
        {filters.cidade.map((cidade)=>(
          <option value={cidade}>{cidade}</option>
        ))}
      </select>

      {/* tecnologia */}
      <select onChange={(ev)=>setHabilidadeTecnica(ev.target.value)}>
        <option value="" >Tecnologia</option>
        {filters.tecnologia.map((tecnologia)=>(
          <option value={tecnologia}>{tecnologia}</option>
        ))}
      </select>
    </div>
  )
}