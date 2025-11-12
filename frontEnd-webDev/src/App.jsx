import profiles from './models/profiles.json'
import ProfileCard from './components/ProfileCard'
// api interessante: https://randomuser.me/api/?results=60
export default function App() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {profiles.map((profile, idx)=>(
          <ProfileCard key={idx} profissional={profile}/>
        ))}
      </div>
    </div>
  )
}


