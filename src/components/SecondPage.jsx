
import NavBar from './NavBar'
import DataRender from './DataRender'
import SidebarWithSelection from './SideBar'

const SecondPage = () => {
  return (
    <div className="overflow-x-hidden  h-screen dark:bg-gray-600">
      <NavBar showSeach={false} />
      <div className="overflow-x-hidden overflow-y-scroll scrollbar-hide absolute w-full dark:bg-gray-600 flex pr-6 gap-4">
        <div className='ml-10'>
          <SidebarWithSelection />
        </div>
        <div className='w-full overflow-y-scroll scrollbar-hide'>
          <DataRender />
        </div>
      </div>
    </div>
  )
}

export default SecondPage
