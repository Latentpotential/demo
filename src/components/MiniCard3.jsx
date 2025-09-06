
import { Archive, FileSearch, ScrollText } from 'lucide-react';

const dataitema = [
  {
    title : 'Quotation',
    num : '500',
    quotation : 'Pending quotations and proposals',
    imag : <ScrollText size={40}/>
  },
  {
    title : 'Today Activity',
    num : 'NA',
    quotation : 'Real-time activity monitoring',
    imag : <FileSearch size={40}/>
  },
  {
    title : 'Today Orders',
    num : '1025',
    quotation : 'Daily order tracking and management',
    imag : <Archive size={40}/>
  },
]

const MiniCard3Comp = ({title, num, quotation, imag}) => {
  return (
    <div className="w-[100%] h-auto bg-white rounded-lg space-y-4 mt-4 ml-3 pl-6 pr-4 pt-5 pb-4 dark:bg-black/20 dark:text-white dark:border-gray-500 border border-gray-200">
      <div className=' space-y-3'>
        <div>
          <p className="text-md">{title}</p>
        </div>
        <div className='space-y-1'>
          <p className="text-4xl font-bold">{num}</p>
          <p className="text-gray-400 dark:text-white line-clamp-2">{quotation}</p>
        </div>
      </div>
      <div className='text-green-200 dark:text-white flex justify-end items-end mt-5'>
        {imag}
      </div>
    </div>
  )
}

const MiniCard3 = () => {
  return (
    <div className='w-[194%] mr-4'>
      <div className='flex space-x-3'>
        {dataitema.map((item, index) => (
          <MiniCard3Comp 
            key={index}
            title={item.title}
            num={item.num}
            quotation={item.quotation}
            imag={item.imag}
          />
        ))}
      </div>
    </div>
  )
}

export default MiniCard3
