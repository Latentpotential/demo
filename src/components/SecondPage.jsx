

import SideBar from './SideBar'
import NavBar from './NavBar'
import DataRender from './DataRender'

const SecondPage = () => {
  return (
    <div className="overflow-x-hidden h-screen">
      <NavBar showSeach={false} />
      <div className="left-10 absolute flex mr-10 overflow-x-hidden max-w-screen gap-4">
        <div className='mt-8'>
          <SideBar />
        </div>
        <DataRender />
      </div>
    </div>
  )
}

export default SecondPage
