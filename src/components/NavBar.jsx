import Logo from '../assets/okayaimg.png';
import Avatar from './Avatar';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={Logo} alt="Okaya Logo" className="w-25 h-10 mt-8 ml-10 "/>
      </div>
      <SearchBar />
      <Avatar />
    </div>
  )
}

export default NavBar
