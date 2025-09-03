import Logo from '../assets/okayaimg.png';
import Avatar from './Avatar';
import DarkModeToggler from './DarkModeToggler';
import SearchBar from './SearchBar';

const NavBar = ({showSearch = false}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='bg-white p-2 ml-10 mt-10 rounded-lg'>
        <img src={Logo} alt="Okaya Logo" className="w-25 h-10"/>
      </div>
      {showSearch && <SearchBar />}
      <div className='flex justify-between items-center '>
        <Avatar />
        <div className='mr-8 mt-8 '>
          <DarkModeToggler />
        </div>
      </div>
    </div>
  )
}

export default NavBar