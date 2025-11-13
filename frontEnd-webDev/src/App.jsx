import perfis from './models/perfis.json'
import { useState } from 'react'
import ProfilesSection from './components/ProfilesSection'
import Search from './components/Search'
import Filter from './components/Filter'
// api interessante: https://randomuser.me/api/?results=60
export default function App() {
  const database = perfis
  const [profiles, setProfiles] = useState(database)

  const filters ={
    area:[],
    cidade:[],
    tecnologia:[]
  }

  function verifyItem(array,item){
    for(let value of array){
      if(item.trim()==value.trim()) return true
    }
    return false
  }

  // Devido a forma como o arquivo json está montado, precisei ter que garantir que os filtros sejam únicos
  for(let data of database){
    if(!verifyItem(filters.area, data.area)){
      filters.area.push(data.area)
    }
    if(!verifyItem(filters.cidade, data.localizacao)){
      filters.cidade.push(data.localizacao)
    }
    // precisei ter que usar outro for, pois data.habilidadeTecnicas é uma arra de strings e não apenas um único string como os if de cima
    for(let habilidadeTecnica of data.habilidadesTecnicas){
        if(!verifyItem(filters.tecnologia ,habilidadeTecnica)){
          filters.tecnologia.push(habilidadeTecnica)
        }
    }
  }

  return (
    <div className='mx-auto max-w-7xl min-h-screen'>
      <Search database={database} profiles={profiles} setProfiles={setProfiles} />
      <Filter database={database} profiles={profiles} setProfiles={setProfiles} filters={filters}/>
      <ProfilesSection profiles={profiles} setProfiles={setProfiles}/>
    </div>
  )
}


