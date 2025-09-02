
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainCard from './MainCard'

const FirstPage = () => {
  return (
    <div className="overflow-x-hidden h-full max-w-screen dark:bg-blue-950/40">
      <NavBar showSearch={true} />
      <div className="overflow-x-hidden pl-9 absolute w-full dark:bg-blue-950/40 flex pr-6 gap-4">
        <SideBar />
        <MainCard />
      </div>
    </div>
  )
}

export default FirstPage
