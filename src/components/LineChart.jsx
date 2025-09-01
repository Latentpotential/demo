import React, { useState } from "react";
import { Download, Upload } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as XLSX from "xlsx";

const initialData = [
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
  const [data, setData] = useState(initialData);

  // 📤 Download Excel
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "LineChartReport.xlsx");
  };

  // 📥 Upload Excel
  const handleUploadExcel = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet);
      setData(excelData); // Update chart data
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="bg-white h-[550px] w-[494px] border border-gray-200 mt-4 ml-4 p-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold mb-4">
          Product Category Distribution
        </p>
        <div className="flex space-x-2">
          {/* Upload Button */}
          <label className="cursor-pointer bg-white w-[100px] h-[40px] rounded-lg border border-gray-200 mb-4 flex justify-center items-center text-md space-x-2">
            <Upload size={18} />
            <span>Upload</span>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleUploadExcel}
              className="hidden"
            />
          </label>
          {/* Download Button */}
          <button
            onClick={handleDownloadExcel}
            className="bg-white w-[100px] h-[40px] rounded-lg border border-gray-200 mb-4 flex justify-center space-x-2 items-center text-md"
          >
            <span>Export</span>
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" angle={-45} textAnchor="end" height={70} />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" wrapperStyle={{ marginTop: 40 }} />
          <Line
            type="monotone"
            dataKey="LeadsWin"
            stroke="#14A751"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
