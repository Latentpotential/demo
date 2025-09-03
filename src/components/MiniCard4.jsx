import { ArrowUpRight, CalendarClock, MapPinned } from 'lucide-react'


const MiniCard4Comp = ({imag, num, quotation}) => {
  return (
    <div className='bg-white h-[277px] w-[494px] flex justify-between dark:bg-black/20 dark:text-white dark:border-gray-500 items-center border border-gray-200 mt-4 ml-4 p-4 rounded-lg'>
      <div className='bg-green-100 dark:bg-black/20 dark:text-white dark:border-gray-500 text-green-200 w-[150px] h-[190px] flex justify-center items-center rounded-lg  p-4 '>
        {imag}
      </div>

      <div className='ml-4'>
        <p className='text-green-200 text-6xl dark:text-white font-bold'>{num}</p>
        <p className='text-md text-gray-200'>{quotation}</p>
      </div>

      <div>
        <ArrowUpRight size={120} className='text-gray-200 mt-4 '/>
      </div>
    </div>
  )
}

const MiniCard4 = () => {
  return (
    <div className='flex flex-col'>
      <MiniCard4Comp 
        imag={<CalendarClock size={100}/>}
        num={'400'}
        quotation={'Pending follow up'}
      />
      <MiniCard4Comp 
        imag={<MapPinned size={100}/>}
        num={'3500'}
        quotation={'Aug 25 Sales Activities'}
      />
    </div>
  )
}

export default MiniCard4
