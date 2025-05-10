import { Whatsapp, Mail, Instagram } from "../svgs"
import logo from "../assets/img/JFlogo.png"


export const Header = () => {
  return (
    <header>
      <div className="overlay">
        <nav className="nav">
      <a href="https://www.instagram.com/serendipia.film?igsh=MWwyY2JmZjN2N3MycQ%3D%3D&utm_source=qr" target="_blank" className="nav__socialMedia-btn"><Instagram/></a>
      <a href="https://www.instagram.com/serendipia.film?igsh=MWwyY2JmZjN2N3MycQ%3D%3D&utm_source=qr" target="_blank" className="nav__socialMedia-btn"><Whatsapp/></a>
      <a href="https://www.instagram.com/serendipia.film?igsh=MWwyY2JmZjN2N3MycQ%3D%3D&utm_source=qr" target="_blank" className="nav__socialMedia-btn"><Mail/></a>
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
