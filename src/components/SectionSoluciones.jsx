import appSheets from "../assets/img/appSheetLogo.svg"
import { Gear } from "../assets/reactSvg/Gear"
import { Secure } from "../assets/reactSvg/Secure"
import { UserSvg } from "../assets/reactSvg/UserSvg"

export const SectionSoluciones = () => {
  return (
    <section className="soluciones">
        <div className="soluciones__logos">
            <div>
                <h2 className="soluciones__heading">Soluciones integrales</h2>
            </div>
            
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#eda503" d="M38,44H26c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v38	C39,43.552,38.552,44,38,44z"></path><path fill="#ffca28" d="M30,44H18c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v28	C31,43.552,30.552,44,30,44z"></path><path fill="#ffe082" d="M22,44H10c-0.552,0-1-0.448-1-1V25c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v18	C23,43.552,22.552,44,22,44z"></path>
</svg>
<p className="soluciones__logos--power">Power BI</p>
            </div>
            
        <img className="soluciones__logo" src={appSheets} alt="" />
        </div>
        <div className="soluciones__text">
            <div>
                <UserSvg/>
                <h3 className="soluciones__text--heading">User-Friendly</h3>
                <p className="soluciones__text--p">Diseñamos soluciones intuitivas y accesibles para que cualquier usuario
pueda navegar y aprovechar el poder de los datos sin complicaciones.
</p>
            </div>
            <div>
            <Gear/>
                <h3 className="soluciones__text--heading" >Seamless integration</h3>
                <p className="soluciones__text--p">Nuestras herramientas se conectan de forma fluida con tus sistemas
actuales, garantizando un proceso ágil y eficiente desde el primer día.

</p>
            </div>
            <div>
            <Secure/>
                <h3  className="soluciones__text--heading">Secure & safe</h3>
                <p className="soluciones__text--p">Protegemos tus datos con los más altos estándares de seguridad, para que
                puedas trabajar con total tranquilidad.
</p>
            </div>
        </div>
    </section>
  )
}
