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
              className={`text-xl font-semibold transition-colors p-5 rounded-lg ${
                activeTab === tab
                  ? "border-b-4 border-primary dark:border-blue-950/90 text-primary dark:bg-blue-950/60 dark:text-white"
                  : "text-gray-600 dark:text-white"
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
        <div className="w-[1640px] bg-white dark:bg-blue-950/40 dark:text-white rounded-lg ml-4 p-4 border border-gray-200">
          <div className="overflow-x-auto border border-gray-200 dark:border-white rounded-lg">
            <table className="w-full">
              <thead className="bg-secondary dark:bg-blue-950/40 dark:text-white">
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
              <tbody className="divide-y divide-gray-300 border-t border-b dark:border-white border-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-gray-50 even:bg-secondary dark:odd:bg-blue-950/10 dark:even:bg-blue-950/40 hover:bg-gray-100 text-gray-600 dark:text-white"
                    >
                      {tableHeaders.map((header) => (
                        <td key={header} className="px-6 py-4">
                          {row[header]}
                        </td>
                      ))}
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(idx)}
                          className="bg-red-500/30 text-red-500 dark:bg-red-500 dark:text-white font-semibold px-3 py-1 rounded hover:bg-red-500 hover:text-white"
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
