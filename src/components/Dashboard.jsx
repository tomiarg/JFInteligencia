import estadistica from "../assets/img/estadistica.jpg"
export const Dashboard = () => {
  return (
    <section className="dashboard">
        <h2 className="dashboard__heading">Dashboard interactivo en tiempo real</h2>
        <div className="dashboard__flex">
            <div className="dashboard__text">
                <h4>Visualizá lo que está pasando en tu negocio, en
el momento en que ocurre.</h4>
                <p>Con <span className="bolder">nuestros tableros</span> desarrollados en Power BI,
podés acceder a métricas clave, indicadores
personalizados y análisis dinámicos <span className="bolder">desde cualquier </span> 
dispositivo. Navegá entre filtros, periodos y
variables con total libertad.
</p>
<p>Así lo ven nuestros clientes:</p>
<ul>
    <li>Ventas diarias actualizadas automáticamente</li>
    <li>Seguimiento de KPIs en tiempo real
</li>
    <li>Análisis de performance por producto, zona o
equipo
</li>
    <li>Comparativos históricos con visualizaciones
claras e intuitivas</li>
</ul>
     </div>
         <div className="dashboard__gallery">
                <p className="dashboard__info">Tomá decisiones <span className="bolder">informadas, ágiles y seguras</span> con
herramientas que se adaptan a tu operación.</p>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMDJhYWViNGMtZjEwMy00NDI1LWFiY2YtM2ZjMzQxNDRkODdiIiwidCI6IjBkZWY2NjE3LTI3OTItNGJiNy04ZTI0LWY2NDMxZDkzYzE1ZCJ9" className="dashboard__button" target="_blank"><p className="dashboard__anchor">Mirá un ejemplo</p></a>
            </div>
            
        </div>
    
    
    </section>
  )
}
