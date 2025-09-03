
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainCard from './MainCard'

const FirstPage = () => {
  return (
    <div className="overflow-x-hidden h-full max-w-screen dark:bg-black/80">
      <NavBar showSearch={true} />
      <div className="overflow-x-hidden pl-9 absolute w-full dark:bg-black/80 flex pr-6 gap-4">
        <SideBar />
        <MainCard />
      </div>
    </div>
  )
}

export default FirstPage
