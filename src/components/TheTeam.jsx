import perfil from "../assets/img/fotoPerfil.jpg"

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
Analistas, especialistas en Power BI,
desarrolladores y estrategas que
combinamos experiencia técnica con una
mirada estratégica del negocio.
</p>
<p>Nos une la curiosidad, el enfoque en
resultados y el compromiso con cada
cliente.</p>
            </div>
            <div className="team__img">
                <img src={perfil} alt="" />
            </div>

        </section>
    </>
  )
}
