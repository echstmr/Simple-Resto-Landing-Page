import './Header.css'
import Logo from '../../assets/img/logo.png';
import { FaBars } from "react-icons/fa";


function Header() {
  return (
    <div className='header container'>
      <nav>
        <div className="logo">
            <img src={Logo} alt="band-logo" />
        </div>
        <ul>
            <li>Menu</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="hero-btn">
            <button className='bgblack'>Book a table</button>
            <span className='bar-icon'><FaBars/></span>
        </div>
        
      </nav>
    </div>
  )
}

export default Header
