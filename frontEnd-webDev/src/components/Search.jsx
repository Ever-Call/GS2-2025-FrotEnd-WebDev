import { useState } from "react"

export default function Search({database, setProfiles}){
  const [searchContent, setSearchContent] = useState('')

  function search(ev){
    if(ev.key == 'Enter'){ 
      handleSearch()
    }
  }
  console.log(searchContent)

  function handleSearch(){
    // const regexDinamica = new RegExp(`.*${searchContent}.*`, 'gi');
    if(searchContent.trim() == ''){return}

    // os useState são assincronos dentro do seu bloco de codigo, neste caso o bloco de código é handleSearch
    setProfiles(database.filter((profile)=>{
      const searchTerm = searchContent.toLocaleLowerCase()
      const profileName = profile.nome.toLocaleLowerCase()
      return profileName.includes(searchTerm)
    }))

  }
  return(
    <div>
      <input onKeyDown={(ev)=>search(ev)} 
        type="text" 
        placeholder="Pesquise o nome do profissional"
        onChange={(ev)=>setSearchContent(ev.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* <div onClick={handleSearch}>Buscar</div> */}
      
    </div>
  )
}