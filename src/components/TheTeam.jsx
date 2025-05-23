import perfil from "../assets/img/perfilJF.jpeg"
import circulos from "../assets/img/circulos.png"

export const TheTeam = () => {
  return (
    <>
        <section className="team">
            <div className="team__text">
                <h3 className="team__heading">
                    Meet the team.
                </h3>
                <p>Somos un equipo multidisciplinario
apasionado por transformar números en
decisiones.
Analistas, especialistas en Power BI y App sheet,
desarrolladores y estrategas que
combinamos experiencia técnica con una
mirada estratégica del negocio.
</p>
<p>Nos une la curiosidad, el enfoque en
resultados y el compromiso con cada
cliente.</p>
            </div>
            <div className="team__img">
                <img src={perfil} alt="Foto Perfil" />
                <img className="team__imgCirculo" src={circulos} alt="Icono Circulos" />
            </div>

        </section>
    </>
  )
}
