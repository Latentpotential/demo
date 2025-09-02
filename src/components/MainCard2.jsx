import { useState } from "react";
import SearchBar2 from "./SearchBar2";

const MainCard2 = ({ tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const [tableData, setTableData] = useState(data);

  const currentData = tableData[activeTab] || [];

  const tableHeaders = currentData.length > 0 ? Object.keys(currentData[0]) : [];

  const handleDelete = (index) => {
    const updatedData = { ...tableData };
    updatedData[activeTab] = updatedData[activeTab].filter(
      (_, idx) => idx !== index
    );
    setTableData(updatedData);
  };

  const filteredData = currentData.filter((row) => {
    const matchesText = Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesDate = dateFilter ? String(row.date) === dateFilter : true;

    return matchesText && matchesDate;
  });

  return (
    <div className="w-[1660px] overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="flex justify-between text-xl mt-5 ml-5 items-center space-x-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-semibold transition-colors p-5 ${
                activeTab === tab
                  ? "border-b-4 border-primary text-primary"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <SearchBar2
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />
      </div>

      <div className="mt-8">
        <div className="w-[1640px] bg-white rounded-lg ml-4 p-4 border border-gray-200">
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  {tableHeaders.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-md font-medium"
                    >
                      {header}
                    </th>
                  ))}
                  <th className="px-6 py-4 text-left text-md font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 border-t border-b border-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-gray-50 even:bg-secondary hover:bg-gray-100 text-gray-600"
                    >
                      {tableHeaders.map((header) => (
                        <td key={header} className="px-6 py-4">
                          {row[header]}
                        </td>
                      ))}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(idx)}
                          className="bg-red-500/30 text-red-500 font-semibold px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={tableHeaders.length + 1}
                      className="text-center py-6 text-gray-500"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard2;
