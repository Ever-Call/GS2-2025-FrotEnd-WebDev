import ProfileCard from './ProfileCard'

export default function ProfilesSection({profiles, setProfiles}){

  if(profiles.length==0){
    return(
      <div className='flex justify-center items-center'>
        <h1>Nada encontrado</h1>
      </div>
    )
  }

  return(
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        {profiles.map((profile, idx)=>(
          <ProfileCard key={idx} profissional={profile}/>
        ))}
      </div>
    </>
  )
}