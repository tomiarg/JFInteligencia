import { Whatsapp, Mail, Instagram } from "../svgs"
import logo from "../assets/img/JFlogo.png"
import hero from "../assets/img/videoHero.mp4"

export const Header = () => {
  return (
    <header>
      <video className="header__video" autoPlay loop muted playsInline>
            <source  src={hero} type="video/mp4"/>
        
          </video>
      <div className="overlay">
        
        <nav className="nav">
      <a href="https://www.instagram.com/jfinteligenciadenegocio/" target="_blank" className="nav__socialMedia-btn"><Instagram/></a>
      <a href="https://wa.me/543515724658"  target="_blank" className="nav__socialMedia-btn"><Whatsapp/></a>
      <a href="mailto:comercial@jfin.com.ar" target="_blank" className="nav__socialMedia-btn"><Mail/></a>
      </nav>
    <div  className="header">
      <div>
        <img className="header__imagen" src={logo} alt="Logo JF" />
      </div>
      <div>
        <h3 className="header__frase">Datos <span>que potencian</span> decisiones</h3>

      </div>
    </div>

      </div>
      
     
    </header>
  )
}
