

import SideBar from './SideBar'
import NavBar from './NavBar'
import DataRender from './DataRender'

const SecondPage = () => {
  return (
    <div className="overflow-x-hidden h-[100%] dark:bg-blue-950/40">
      <div>
        <NavBar showSeach={false} />
      </div>
      <div className=" pl-9 flex w-full overflow-x-hidden gap-4">
        <div className='mt-8'>
          <SideBar />
        </div>
        <DataRender />
      </div>
    </div>
  )
}

export default SecondPage
