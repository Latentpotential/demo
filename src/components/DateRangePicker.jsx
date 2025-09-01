import React, { useState, useMemo } from "react";
import { DateRange } from "react-date-range";
import { format, eachDayOfInterval } from "date-fns";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function DateRangeWithChart() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  // Generate dummy data based on date range
  const data = useMemo(() => {
    const days = eachDayOfInterval({
      start: state[0].startDate,
      end: state[0].endDate,
    });

    return days.map((day) => ({
      date: format(day, "MM/dd"),
      value: Math.floor(Math.random() * 100), // Random data
    }));
  }, [state]);

  const formattedStart = format(state[0].startDate, "MM/dd/yyyy");
  const formattedEnd = format(state[0].endDate, "MM/dd/yyyy");

  return (
    <div className="p-6">
      {/* Date Range Picker Button */}
      <div className="relative inline-block mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
          onClick={() => setOpen(!open)}
        >
          {formattedStart} - {formattedEnd}
        </button>

        {open && (
          <div className="absolute z-10 mt-2 shadow-lg bg-white rounded-xl">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            <div className="flex justify-end p-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bar Chart */}
      <div className="w-full h-72 bg-white shadow rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart className='mt-10 ml-5' width={1000} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="date" />
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
          <Bar dataKey="value" fill="#14A751" radius={[6, 6, 0, 0]} barSize={80}/>
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
