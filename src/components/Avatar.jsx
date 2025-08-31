import { UserRound } from 'lucide-react'
import Pow from '../assets/power.png';

const Avatar = () => {
  return (
    <div className='flex items-center gap-4 mr-10 ml-8 mt-8'>
      <div className='w-10 h-10 rounded-full bg-secondary flex justify-center items-center'>
        <UserRound size={25} className='text-primary bg-secondary'/>
      </div>
      
      <div>
        <div className='text-sm'>
          Welcome
        </div>
        <div className='font-bold text-lg'>
          Ishaan Satija
        </div>
      </div>

      <div className=' ml-4 w-8 rounded-full flex justify-center items-center'>
        <img src={Pow} className='w-8 h-8 p-1'/>
      </div>
    </div>
  )
}

export default Avatar
