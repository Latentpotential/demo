
import { Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: "2018-2019", LeadsWin: 0 },
  { year: "2019-2020", LeadsWin: 0 },
  { year: "2020-2021", LeadsWin: 0 },
  { year: "2021-2022", LeadsWin: 1124 },
  { year: "2022-2023", LeadsWin: 1570 },
  { year: "2023-2024", LeadsWin: 600 },
  { year: "2024-2025", LeadsWin: 230 },
  { year: "2025-2026", LeadsWin: 0 },
];

export default function MyLineChart() {
  return (
    <div className="bg-white h-[550px] w-[494px] items-center border border-gray-200 mt-4 ml-4 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold mb-4">Product Category Distribution</p>
        <div className="bg-white w-[150px] h-[40px] rounded-lg border border-gray-200 mb-4 flex justify-center space-x-2 items-center text-md">
          <p>Export Report</p>
          <Download size={18} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="year" angle={-45} textAnchor="end" height={70} />
          <YAxis />
          <Tooltip />
          <Legend 
          iconType="circle" 
          wrapperStyle={{ marginTop: 40 }} 
          />
          <Line type="monotone" dataKey="LeadsWin" stroke="#14A751" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
