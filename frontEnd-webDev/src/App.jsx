import profiles from './models/profiles.json'
import ProfileCard from './components/ProfileCard'
// api interessante: https://randomuser.me/api/?results=60
export default function App() {
  return (
    <>
      <div className=''>
        {profiles.map((profile, idx)=>(
          <ProfileCard key={idx} profissional={profile}/>
        ))}
      </div>
    </>
  )
}


