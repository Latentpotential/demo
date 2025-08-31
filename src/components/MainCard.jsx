import BarGraph from "./BarGraph"
import BarGraph2 from "./BarGraph2"
import MyLineChart from "./LineChart"
import DataTable from "./List"
import MiniCard1 from "./MiniCard1"
import MiniCard2 from "./MiniCard2"
import MiniCard3 from "./MiniCard3"
import MiniCard4 from "./MiniCard4"


const MainCard = () => {
  return (
    <div className='w-[1670px] h-[2030px] bg-gray-300 rounded-lg mt-14 ml-2  border border-gray-200'>
      <div className="flex justify-start items-start">
        <MiniCard1 />
        <MiniCard2 />
        <MiniCard3 />
      </div>

      <div className="flex justify-start items-start">
        <BarGraph />
        <MiniCard4 />
      </div>

      <div className="flex justify-start items-start">
        <DataTable />
        <MyLineChart />
      </div>

      <div>
        <BarGraph2 />
      </div>
    </div>
  )
}

export default MainCard
