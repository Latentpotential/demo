
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainCard from './MainCard'

const FirstPage = () => {
  return (
    <div className="overflow-x-hidden h-[100%] w-[100%] dark:bg-gray-600 overflow-y-scroll scrollbar-hide">
      <NavBar showSearch={true} />
      <div className="overflow-x-hidden overflow-y-scroll scrollbar-hide pl-9 absolute w-full dark:bg-gray-600 flex pr-6 gap-4">
        <SideBar />
        <div className='w-full'>
          <MainCard />
        </div>
      </div>
    </div>
  )
}

export default FirstPage
