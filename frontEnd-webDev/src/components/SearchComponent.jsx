import { Search } from "lucide-react"

export default function SearchComponent({database, setProfiles, searchContent, setSearchContent}){
  function search(ev){
    if(ev.key == 'Enter'){ 
      handleSearch()
    }
  }

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
    <div className="flex gap-2">
      <input onKeyDown={(ev)=>search(ev)} 
        type="text" 
        value={searchContent}
        placeholder="Pesquise o nome do profissional"
        onChange={(ev)=>setSearchContent(ev.target.value)}
        className="w-full p-2 border border-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleSearch} className='border rounded-full p-2 border-gray-500 text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'>
        <Search/>
      </button>
    </div>
  )
}