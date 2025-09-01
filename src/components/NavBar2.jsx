import Logo from '../assets/okayaimg.png';
import Avatar from './Avatar';

const NavBar2 = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <img src={Logo} alt="Okaya Logo" className="w-25 h-10 mt-8 ml-10 "/>
        </div>
      
        <Avatar />
      </div>
    </div>
  )
}

export default NavBar2
