const lastitems2 = [
  {
    val : '1',
    content : 'Dealer'
  },
  {
    val : '14',
    content : 'Distributor'
  },
    {
    val : '5',
    content : 'Others'
  },
]

const MiniCard2 = () =>{
  return (
    <div className="w-[400px] h-[220px] bg-white dark:bg-blue-950/70 dark:text-white dark:border-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md">Customer Network</p>
        </div>
        <div className="text-sm dark:bg-blue-950/70 dark:text-white dark:border-white rounded-full border border-gray-200 text-green-200 bg-green-100 px-2 py-1">
          <p>&#43;2.3% growth rate</p>
        </div>
      </div>
      <div className="space-y-1 ">
        <p className="text-4xl font-bold">6</p>
        <p className="text-gray-400 dark:text-white ">Active customer base and distribution network</p>
      </div>
      <div className="flex justify-start items-center space-x-2">
        {lastitems2.map((item, index) => (
          <div key={index} className='w-[120px] h-[65px] bg-gray-300 dark:bg-blue-950/70 dark:text-white dark:border-white rounded-lg p-2 border border-gray-200 inline-block'>
            <div className='text-sm text-gray-400 dark:text-white'> {item.content} </div>
            <div className='font-bold text-lg'> {item.val} </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniCard2;