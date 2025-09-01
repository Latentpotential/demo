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
import * as XLSX from "xlsx";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// 🔹 Sample data with dates
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
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-08-25"),
      endDate: new Date("2025-09-01"),
      key: "selection",
    },
  ]);

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const formattedStart = dateRange[0].startDate.toLocaleDateString();
  const formattedEnd = dateRange[0].endDate.toLocaleDateString();

  // 🔹 Close calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Filter data when date range changes
  useEffect(() => {
    const start = dateRange[0].startDate;
    const end = dateRange[0].endDate;
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
    setFilteredData(filtered);
  }, [dateRange, data]);

  // 📥 Handle Excel Upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
    reader.readAsBinaryString(file);
  };

  // 📤 Download Excel
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "BarGraphData.xlsx");
  };

  return (
    <div className="w-[1635px] h-[570px] bg-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200">
      <div className="flex justify-between w-full">
        <div className="mt-2">
          <p className="text-xl">Product Category Distribution</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="bg-black w-[120px] h-[40px] rounded-lg flex justify-center space-x-1 items-center text-white text-md">
            <p>Total:</p>
            <p className="font-bold">
              {filteredData.reduce((sum, item) => sum + item.value, 0)}
            </p>
          </div>

          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="bg-primary w-[320px] h-[40px] flex justify-center items-center gap-3 px-3 rounded-lg cursor-pointer"
              onClick={() => setShowCalendar((s) => !s)}
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">From</span>
                <span className="bg-secondary w-[100px] text-sm text-primary h-[26px] rounded-lg flex items-center justify-center">
                  {formattedStart}
                </span>
                <span className="text-white">To</span>
                <span className="bg-secondary w-[100px] text-sm text-primary h-[26px] rounded-lg flex items-center justify-center">
                  {formattedEnd}
                </span>
                <CalendarIcon size={18} className="text-white" />
              </div>
            </button>

            {showCalendar && (
              <div
                ref={popoverRef}
                className="absolute top-12 left-0 z-50 shadow-lg rounded-xl overflow-hidden bg-white"
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

          <label className="bg-primary w-[120px] h-[40px] rounded-lg text-white flex justify-center items-center text-md cursor-pointer">
            Upload Data
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleDownloadExcel}
            className="bg-white w-[150px] h-[40px] rounded-lg border border-gray-200 flex justify-center space-x-2 items-center text-md"
          >
            <p>Export Report</p>
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl p-4">
        <BarChart
          className="mt-10 ml-5"
          width={1500}
          height={400}
          data={filteredData}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
          <Bar
            dataKey="value"
            barSize={60}
            shape={(props) => {
              const { x, y, width, height, value } = props;
              const fillColor =
                value < 1000 ? "rgba(126, 222, 166, 1)" : "#14A751";
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
  );
};

export default BarGraph2;
