import { ChevronDown, Search } from "lucide-react"

const SearchBar2 = () => {
  return (
    <div className="flex items-center w-[530px] h-[55px] bg-white border border-r-0 rounded-lg mt-10 ">
      <div className="w-[200px] h-[55px] rounded-lg flex justify-center items-center px-4 space-x-2">
        <Search size={20} className="text-gray-600"/>
        <p className="text-gray-600 mt-1 text-lg">Date</p>
        <ChevronDown size={20} className="text-gray-600"/>
      </div>

      <div className="h-[36px] w-[5px] bg-gray-500"></div>

      <div>
      
        <input 
          type="text"
          placeholder="Type..."
          className="w-[530px] h-[55px] border border-l-0 outline-none px-4 text-gray-200"

        />
     </div>
    </div>
  )
}

export default SearchBar2
