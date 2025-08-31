
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainCard2 from './MainCard2'

const SecondPage = () => {
  return (
    <div className="overflow-hidden h-screen max-w-screen">
      <NavBar />
      <div className="left-10 absolute flex mr-10 gap-4">
        <SideBar />
        <MainCard2 />
      </div>
    </div>
  )
}

export default SecondPage
