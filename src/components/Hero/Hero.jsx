import './Hero.css'
import Hero_Img1 from '../../assets/img/hero-img-1.png'
import Hero_Img2 from '../../assets/img/hero-img-2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Hero() {
  return (
    <div className='hero container'>
        {/* hero right col */}
        <div className="hero-right-col">

            <h1>We provide the 
            best food for you</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="hero-right-buttons">
                <button className='btn1'>Menu</button>
                <button className='btn2 bgblack'>Book a table</button>
            </div>

            <div className="hero-socials">
                <span><FaFacebookF/></span>
                <span><FaInstagram/></span>
                <span><FaTwitter/></span>
            </div>

        </div>

        {/* hero left col */}
        <div className="hero-left-col">
            <img className='hero-img1' src={Hero_Img1} alt="hero-img-1" />
            <img className='hero-img2' src={Hero_Img2} alt="hero-img-2" />
        </div>
      
    </div>
  )
}

export default Hero
