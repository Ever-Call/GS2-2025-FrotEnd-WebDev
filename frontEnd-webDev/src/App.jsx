import perfis from './models/perfis.json'
import { useState } from 'react'
import ProfilesSection from './components/ProfilesSection'
import Search from './components/Search'
import Filter from './components/Filter'
import ThemeToggle from './components/ThemeToggle'
// api interessante: https://randomuser.me/api/?results=60
export default function App() {
  const database = perfis
  const [profiles, setProfiles] = useState(database)
  const [chat, setChat] = useState({})
  const [searchContent, setSearchContent] = useState('')

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
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors'>

      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-1 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ConnectPro</h1>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  database={database} profiles={profiles} setProfiles={setProfiles} setSearchContent={setSearchContent} searchContent={searchContent}
                />
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle/>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6 transition-colors">
          <Filter database={database} profiles={profiles} setProfiles={setProfiles} filters={filters} setSearchContent={setSearchContent}/>
        </div>

        {/* Profiles grid */}
        <ProfilesSection profiles={profiles} setProfiles={setProfiles} setChat={setChat} chat={chat}/>
      </main>

      {/* <Search database={database} profiles={profiles} setProfiles={setProfiles} />
      <Filter database={database} profiles={profiles} setProfiles={setProfiles} filters={filters}/>
      <ProfilesSection profiles={profiles} setProfiles={setProfiles} setChat={setChat} chat={chat}/> */}
    </div>
  )
}


