
import stats from '../assets/img/barras.png'

export const Contact = () => {
  return (
    <section className="contact">
        <div className="contact__flex">
            <div className="contact__heading">
            <h2>Contact</h2>
            <img className='contact__img' src={stats} alt="icono barras" />
        </div>
        <div className="contact__contacts">
            <div className="contact__contacts--tipe">
                <h2>Contacto</h2>
                <a href="https://wa.me/543515724658" target='_blank'> +54 9 3515 72-4658 </a>
            </div>
            <div className="contact__contacts--tipe">
                <h2>Email</h2>
                <a href="mailto:comercial@jfin.com.ar" target='_blank'> comercial@jfin.com.ar</a>
            </div>
            <div className="contact__contacts--tipe">
                <h2>Social</h2>
                <a href="https://www.instagram.com/jfinteligenciadenegocio/" target='_blank'> @jfinteligenciadenegocio </a>
            </div>
        </div> 
        </div>
        
        <footer className="footer"><p>
          Todos los derechos reservados. Web built by <a href="https://somosnene.com.ar/" target="_blank"> www.somosnene.com.ar </a>• Powered by React.
          </p></footer> 
    </section>
  )
}
    