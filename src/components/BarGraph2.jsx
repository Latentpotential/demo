import { Calendar, Download } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

const data = [
  { name: "Lead Bank", value: 60 },
  { name: "Validate", value: 480 },
  { name: "No Response", value: 120 },
  { name: "Close", value: 1270 },
  { name: "Lost", value: 0 },
  { name: "Disqualified", value: 2423 },
  { name: "Qualified", value: 400 },
  { name: "Win", value: 480 },
];

const BarGraph2 = () => {
  return (
    <div className=" w-[1635px] h-[570px] bg-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200">
      <div className="flex justify-between w-full">
        <div className='mt-2'>
          <p className="text-xl">Product Category Distribution</p>
        </div>

        <div className='flex justify-center gap-2'>
          <div className="bg-black w-[100px] h-[40px] rounded-lg flex justify-center space-x-1 items-center text-white text-md">
            <p>Total:</p>
            <p className="font-bold">7942</p>
          </div>

          <div className="bg-primary w-[450px] h-[40px] flex justify-center items-center gap-5 px-2 py-3 rounded-lg">
            <div className='flex justify-center items-center gap-2'>
              <p className="text-md text-white">From</p>
              <div className="w-[140px] h-[30px] bg-secondary rounded-lg flex justify-center items-center">
                <div className="text-sm text-white flex justify-center items-center gap-2">
                    <p className="text-primary mr-2" >dd/mm/yyyy</p>
                    <Calendar size={20} className='text-primary'/>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <p className="text-md text-white">To</p>
              <div className="w-[140px] h-[30px] bg-secondary rounded-lg flex justify-center items-center">
                <div className="text-sm text-white flex justify-center items-center gap-2">
                    <p className="text-primary mr-2" >dd/mm/yyyy</p>
                    <Calendar size={20} className='text-primary'/>
                </div>
              </div>
            </div>
            <div className='bg-third h-[30px] w-[40px] flex justify-center items-center rounded-lg'>
              <p className="text-md text-white">Go</p>

            </div>
          </div>

          <div className="bg-white w-[150px] h-[40px] rounded-lg border border-gray-200 flex justify-center space-x-2 items-center text-md">
            <p>Export Report</p>
            <Download size={18} />
          </div>

          
        </div>
      </div>

      {/* Bar graph */}

      {/* Bar Graph below */}
      <div className="w-full bg-white rounded-2xl p-4">
        
        <BarChart className='mt-10 ml-5' width={1500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: "Total Product Category Count",  
              angle: -90,                
              position: "insideLeft", 
              offset: -10,   
              style: { textAnchor: "middle", fill: "#374151", fontSize: 14 },
            }}
          />
          <Tooltip />
          <Bar dataKey="value" 
          barSize={60}
          shape={(props) => {
          const { x, y, width, height, value } = props;
          const fillColor = value < 1000 ? 'rgba(126, 222, 166, 1)' : '#14A751';
          return (
            <rect 
              x={x} 
              y={y} 
              width={width} 
              height={height} 
              fill={fillColor} 
              rx={6}
            />
          );
        }}
          />
        </BarChart>
      </div>
    </div>
  )
}

export default BarGraph2