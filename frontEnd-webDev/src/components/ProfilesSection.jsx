import ProfileCard from './ProfileCard'

export default function ProfilesSection({profiles, setProfiles, chat,  setChat}){

  if(profiles.length==0){
    return(
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center transition-colors">
        <p className="text-gray-500 dark:text-gray-400 text-lg">Nenhum profissional encontrado</p>
      </div>
    )
  }

  return(
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {profiles.map((profile, idx)=>(
          <ProfileCard key={idx} profissional={profile} setChat={setChat} chat={chat}/>
        ))}
      </div>
    </>
  )
}