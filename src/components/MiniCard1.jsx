const lastitems1 = [
  {
    val : '50,000',
    content : 'Retailer'
  },
  {
    val : '27,707',
    content : 'Dealer'
  },
  {
    val : '10,000',
    content : 'Distributor'
  },
  {
    val : '133',
    content : 'OEM'
  },
]



const MiniCard1 = () => {
  return (
    <div className="w-[450px] h-[220px] bg-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md">Lead Network</p>
        </div>
        <div className="text-sm  rounded-full border border-gray-200 text-primary bg-secondary px-2 py-1">
          <p>&#43;12.5% from last month</p>
        </div>
      </div>
      <div className="space-y-1 ">
        <p className="text-4xl font-bold">70,824</p>
        <p className="text-gray-400">Total network connections across all channels</p>
      </div>
      <div className="flex justify-start items-center space-x-2">
        {lastitems1.map((item, index) => (
          <div key={index} className='w-[100px] h-[65px] bg-gray-300 rounded-lg p-2 border border-gray-200 inline-block'>
            <div className='text-sm text-gray-400'> {item.content} </div>
            <div className='font-bold text-lg'> {item.val} </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default MiniCard1;

