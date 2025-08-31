
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainCard from './MainCard'

const FirstPage = () => {
  return (
    <div className="overflow-hidden h-screen max-w-screen">
      <NavBar />
      <div className="left-10 absolute flex mr-10 gap-4">
        <SideBar />
        <MainCard />
      </div>
    </div>
  )
}

export default FirstPage
