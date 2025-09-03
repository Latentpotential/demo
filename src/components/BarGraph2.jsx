import React, { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { DateRange } from "react-date-range";
import { format, isWithinInterval, parseISO } from "date-fns";
import * as XLSX from "xlsx";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const initialData = [
  { name: "Lead Bank", value: 60, date: "2025-08-25" },
  { name: "Validate", value: 480, date: "2025-08-26" },
  { name: "No Response", value: 120, date: "2025-08-28" },
  { name: "Close", value: 1270, date: "2025-08-29" },
  { name: "Lost", value: 0, date: "2025-08-30" },
  { name: "Disqualified", value: 2423, date: "2025-08-31" },
  { name: "Qualified", value: 400, date: "2025-09-01" },
  { name: "Win", value: 480, date: "2025-09-01" },
];

const BarGraph2 = () => {
  const [allData, setAllData] = useState(initialData);
  const [chartData, setChartData] = useState(initialData);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-08-25"),
      endDate: new Date("2025-09-01"),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsDark(root.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Filter data by date range
  useEffect(() => {
    const filtered = allData.filter((item) =>
      isWithinInterval(parseISO(item.date), {
        start: dateRange[0].startDate,
        end: dateRange[0].endDate,
      })
    );
    setChartData(filtered);
  }, [dateRange, allData]);

  const formattedStart = format(dateRange[0].startDate, "dd/MM/yyyy");
  const formattedEnd = format(dateRange[0].endDate, "dd/MM/yyyy");

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

      const mapped = rows
        .map((r) => ({
          name: r.name ?? r.Name ?? "Unknown",
          value: Number(r.value ?? r.Value ?? 0),
          date: (r.date ?? r.Date ?? "").toString().slice(0, 10),
        }))
        .filter((r) => r.date);

      setAllData(mapped.length ? mapped : initialData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(chartData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "BarGraphData");
    XLSX.writeFile(workbook, "BarGraphData.xlsx");
  };

  return (
    <div className="w-[1635px] h-[570px] bg-white dark:bg-blue-950/70 dark:text-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200 dark:border-white">
      <div className="flex justify-between w-full">
        <div className="mt-2">
          <p className="text-xl font-semibold">Product Category Distribution</p>
        </div>

        <div className="flex justify-center gap-2 relative">

          <div className="bg-black w-[120px] h-[40px] rounded-lg dark:bg-white dark:text-black flex justify-center space-x-1 items-center text-white text-md">
            <p>Total:</p>
            <p className="font-bold">
              {chartData.reduce((sum, item) => sum + (Number(item.value) || 0), 0)}
            </p>
          </div>


          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="bg-green-200 w-[320px] h-[40px] dark:bg-blue-950/70 dark:text-white flex justify-center items-center gap-3 px-3 rounded-lg"
              onClick={() => setShowCalendar((s) => !s)}
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">From</span>
                <span className="bg-green-100 w-[100px] dark:bg-blue-950/70 text-sm h-[26px] rounded-lg flex items-center justify-center">
                  {formattedStart}
                </span>
                <span className="text-white">To</span>
                <span className="bg-green-100 w-[100px] text-sm dark:bg-blue-950/70 h-[26px] rounded-lg flex items-center justify-center">
                  {formattedEnd}
                </span>
                <CalendarIcon size={18} className="text-white" />
              </div>
            </button>

            {showCalendar && (
              <div
                ref={popoverRef}
                className="absolute top-12 left-0 z-50 shadow-lg rounded-xl overflow-hidden bg-white dark:bg-gray-800"
              >
                <DateRange
                  ranges={dateRange}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  editableDateInputs
                  direction="horizontal"
                  months={2}
                  showDateDisplay={false}
                />
              </div>
            )}
          </div>

          {/* Upload */}
          <label className="bg-green-200 w-[120px] h-[40px] rounded-lg dark:bg-blue-950/70 dark:text-white text-white flex justify-center items-center text-md cursor-pointer">
            Upload Data
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          {/* Export */}
          <button
            onClick={handleExcelDownload}
            className="bg-white w-[150px] h-[40px] dark:bg-blue-950/70 dark:text-white rounded-lg border border-gray-200 dark:border-none flex justify-center space-x-1 items-center text-md"
          >
            <p>Export Report</p>
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full bg-white dark:bg-blue-950/60 rounded-2xl pl-4 pr-4 pb-4 pt-16">
        <BarChart width={1500} height={400} data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={isDark ? "#4B5563" : "#E5E7EB"}
          />
          <XAxis
            dataKey="name"
            stroke={isDark ? "#D1D5DB" : "#374151"}
            tick={{ fill: isDark ? "#D1D5DB" : "#374151", fontSize: 12 }}
          />
          <YAxis
            stroke={isDark ? "#D1D5DB" : "#374151"}
            tick={{ fill: isDark ? "#D1D5DB" : "#374151", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
              color: isDark ? "#F9FAFB" : "#111827",
              border: "none",
            }}
          />
          <Bar
            dataKey="value"
            fill={isDark ? "#3B82F6" : "#14A751"}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraph2;
