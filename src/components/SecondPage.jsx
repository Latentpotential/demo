

import SideBar from './SideBar'
import MainCard2 from './MainCard2'
import NavBar2 from './NavBar2'

const SecondPage = () => {
  return (
    <div className="overflow-x-hidden h-screen">
      <NavBar2 />
      <div className="left-10 absolute flex mr-10 overflow-x-hidden max-w-screen gap-4">
        <div className='mt-10'>
          <SideBar />
        </div>
        <MainCard2 />
      </div>
    </div>
  )
}

export default SecondPage
