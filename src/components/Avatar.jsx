import { CirclePower, UserRound } from 'lucide-react'
import Pow from '../assets/power.png';

const Avatar = () => {
  return (
    <div className='flex items-center gap-4 mr-10 ml-8 mt-8'>
      <div className='w-10 h-10 rounded-full bg-green-100 dark:bg-black/20 flex justify-center items-center'>
        <UserRound size={25} className='text-green-200 dark:text-white'/>
      </div>
      
      <div className='dark:text-white'>
        <div className='text-sm'>
          Welcome
        </div>
        <div className='font-bold text-lg'>
          Ishaan Satija
        </div>
      </div>

      <div className=' ml-4 w-8 rounded-full dark:text-white flex justify-center items-center'>
        <CirclePower size={30} />
      </div>
    </div>
  )
}

export default Avatar
