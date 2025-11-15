export default function Search({database, setProfiles, searchContent, setSearchContent}){
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
        placeholder="Pesquise o nome do profissional"
        onChange={(ev)=>setSearchContent(ev.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleSearch} className='border rounded-full p-2 border-gray-300 text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      </button>
    </div>
  )
}