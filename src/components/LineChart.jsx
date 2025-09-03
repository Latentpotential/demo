import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

const LineGraph = () => {
  const [chartData, setChartData] = useState(initialData);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsDark(root.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const ws = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(ws);

      const mapped = rows.map((r) => ({
        year: r.year ?? r.Year ?? "Unknown",
        LeadsWin: Number(r.LeadsWin ?? r.Leads ?? 0),
      }));

      setChartData(mapped.length ? mapped : initialData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(chartData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "LineChartData");
    XLSX.writeFile(workbook, "line_chart_data.xlsx");
  };

  return (
    <div className="h-[550px] w-[494px] bg-white dark:bg-black/20 dark:text-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200 dark:border-gray-500">
      <div className="flex justify-between w-full mb-8">
        <div className="mt-2">
          <p className="text-xl font-semibold">Yearly Leads Win </p>
        </div>

        <div className="flex justify-center gap-2 relative">
          <label className="bg-green-200 w-[120px] h-[40px] rounded-lg dark:bg-black/20 dark:text-white text-white flex justify-center items-center text-md cursor-pointer">
            Upload Data
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleExcelDownload}
            className="bg-white w-[150px] h-[40px] dark:bg-black/20 dark:text-white rounded-lg border border-gray-200 dark:border-none flex justify-center space-x-1 items-center text-md"
          >
            <p>Export Report</p>
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="w-full h-[430px] bg-white dark:bg-black/20 rounded-2xl pt-10">
        <ResponsiveContainer width="100%" height="110%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDark ? "#FFFFFF" : "#DFE5F1"}
            />
            <XAxis
              dataKey="year"
              stroke={isDark ? "#FFFFFF" : "#374151"}
              tick={{ fill: isDark ? "#FFFFFF" : "#374151", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis
              stroke={isDark ? "#FFFFFF" : "#374151"}
              tick={{ fill: isDark ? "#FFFFFF" : "#374151", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
                color: isDark ? "#F9FAFB" : "#111827",
                border: "none",
              }}
            />
            <Line
              type="monotone"
              dataKey="LeadsWin"
              stroke={isDark ? "#FFFFFF" : "#14A751"}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
