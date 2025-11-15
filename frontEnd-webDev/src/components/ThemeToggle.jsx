import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    dark ? root.classList.add('dark') : root.classList.remove('dark')
  }, [dark])

  return (
    <button
      aria-label="Alternar tema"
      className="p-2 rounded-xl border dark:border-white dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
      onClick={() => setDark(d => !d)}
    >
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}