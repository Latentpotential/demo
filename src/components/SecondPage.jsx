

import SideBar from './SideBar'
import NavBar from './NavBar'
import DataRender from './DataRender'

const SecondPage = () => {
  return (
    <div className="overflow-x-hidden  h-screen dark:bg-black/80">
      <div>
        <NavBar showSeach={false} />
      </div>
      <div className=" pl-9 flex w-full overflow-x-hidden overflow-y-scroll scrollbar-hide gap-4">
        <div className='mt-8 overflow-y-scroll scrollbar-hide'>
          <SideBar />
        </div>
        <DataRender />
      </div>
    </div>
  )
}

export default SecondPage
