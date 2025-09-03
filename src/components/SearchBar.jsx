import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="flex dark:bg-black/20 dark:text-white dark:border-gray-500 items-center w-[530px] h-[55px] bg-white  border border-r-0 rounded-lg mt-10 mr-[580px]">
      <div className="w-[55px] h-[55px] rounded-lg flex justify-center items-center px-4">
        <Search size={20} className="text-gray-400 dark:text-white"/>
      </div>

      <div className="h-[36px] w-[1px] dark:bg-gray-500 dark:border-gray-500 bg-gray-200"></div>

      <div className="w-full dark:text-white ">
      
        <input 
          type="text"
          placeholder="Type..."
          className="w-full h-[55px] border border-l-0 outline-none px-4 text-gray-200 dark:bg-inherit dark:border-gray-500 dark:text-white "

        />
     </div>
    </div>
  )
}

export default SearchBar
