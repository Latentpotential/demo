
import { Moon, Sun } from 'lucide-react'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeToggler = () => {

  const [ darkMode , setDarkMode ] = useDarkMode()

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className=' bg-yellow-500 dark:bg-blue-950/80  dark:text-white px-4 py-4 rounded-lg'>
      {darkMode ? <div><Moon size={25} /></div> : <div><Sun size={25} /></div>}
    </button>
  )
}

export default DarkModeToggler

