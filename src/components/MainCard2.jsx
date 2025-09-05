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
    <div className="w-[1680px] h-screen relative left-72 top-40 border pr-2 rounded-lg border-stone-300 dark:border-neutral-700 overflow-x-hidden">
      <div className=" flex justify-between items-center pr-2">
        <div className="flex justify-center text-xl mt-5 ml-5 items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-semibold place-items-start w-40 mr-4 transition-colors pt-5 pr-24 pb-5  ${
                activeTab === tab
                  ? "border-b-4 border-green-500 text-green-500 "
                  : "text-gray-600 dark:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div>
          <SearchBar2
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />
        </div>
      </div>

      <div className="mt-8">
        <div className="w-[1640px] bg-white dark:bg-black/20 dark:text-white rounded-lg ml-4 p-4 border border-stone-300 dark:border-gray-500">
          <div className="overflow-x-auto border border-stone-300 dark:border-gray-500 rounded-lg">
            <table className="w-full">
              <thead className="bg-green-200 dark:bg-black/20 dark:text-green-500 text-black">
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
              <tbody className="divide-y divide-stone-300 dark:divide-gray-500 border-t dark:border-gray-500 ">
                {filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-green-100 even:bg-gray-50 dark:odd:bg-black/10 dark:even:bg-black/40 hover:bg-gray-100 text-gray-600 dark:text-white"
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
