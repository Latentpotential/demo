import { Search } from "lucide-react";

const SearchBar2 = ({ searchQuery, setSearchQuery, dateFilter, setDateFilter }) => {
  return (
    <div className="flex items-center justify-center w-[530px] h-[55px] dark:bg-blue-950/30 dark:text-white dark:border-white bg-white border rounded-lg mt-8 shadow-sm">
      <div className="w-[220px] h-[55px] dark:text-white dark:border-white flex items-center px-4 justify-center space-x-3 border-r">
        <span className="font-medium mt-1 text-gray-700 dark:text-white">Date:</span>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="outline-none dark:bg-inherit dark:text-white text-gray-700 cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-center px-3 w-full ">
        <Search size={20} className="text-gray-500 mr-4 dark:text-white" />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-[40px] outline-none text-gray-700 dark:bg-inherit dark:text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar2;
