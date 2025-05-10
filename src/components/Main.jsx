import datosCel from "../assets/img/datosCelyPC.jpg"

export const Main = () => {
  return (
    <main className="main">
        <div className="main__text">
        <h2 className="main__heading">
            Inteligencia
            de negocio
        </h2>
        <p>
                Impulsamos decisiones inteligentes con el
                poder de tus datos
                <span className="main__heading--bold"> Convertimos la información de tu empresa en
                conocimiento estratégico</span>.

                A través de soluciones basadas en Power BI y
                herramientas de Business Intelligence,
                analizamos, visualizamos y transformamos
                datos complejos en insights claros y
                accionables.
               
                </p>
                <p>
                Trabajamos junto a vos para que puedas
                tomar decisiones informadas, anticiparte a
                escenarios y potenciar el crecimiento de tu
                negocio con inteligencia real.
                </p>
        </div>
        <div className="main__imageContein" >
            <img className="main__image" src={datosCel} alt="Imagen Main" />
            <h4 className="main__imageContein--heading">Accedé a tus datos desde cualquier dispositivo, siempre actualizados con sincronización automática.</h4>
        </div>
    
    
    </main>
  )
}
