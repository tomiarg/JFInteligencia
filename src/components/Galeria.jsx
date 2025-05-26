

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from "swiper/react"


import pBi from "../assets/img/costosPowerBi.png"
import pBii from "../assets/img/menuPowerBi.png"
import vendedores from "../assets/img/resultadosPowerBi.png"
import ventas from "../assets/img/ventasPowerBi.png"
import costos from "../assets/img/vendedoresPowerBi.png"
import dashboardAppSheet from "../assets/img/dashboardAppSheet.png"
import formCompras from "../assets/img/formAppsheet.png"
import menuAppSheet from "../assets/img/menuAppSheet.png"




export const Galeria = () => {
  return (
    <section className="galeria">
      <h2 className='galeria__header'>Supervisa y comprende tu operación empresarial</h2>
      <div className="galeria__flex">
         <div className="galeria__swip">
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      grabCursor
      initialSlide={2}
      centeredSlides      
      speed={800}
      slideToClickedSlide
      
      breakpoints={{
        320:{spaceBetween:40},
        650: {spaceBetween:30},
        1000:{spaceBetween:20} 

      }}
    >

      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={pBi} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={pBii} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={vendedores} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={ventas} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={costos} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={dashboardAppSheet} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={formCompras} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={menuAppSheet} alt="" /></SwiperSlide>
    </Swiper>
      </div>
      <div className="galeria__texto">
        <h3>Dashboards integrados AppSheet y Power BI.</h3>
        <p>Visualiza en tiempo real cada etapa del proceso operativo, desde la captura en terreno hasta el análisis estratégico. Esta galería muestra ejemplos reales de dashboards que se integran con el sistemas ERP que te brindamos, conectando datos clave de distintas áreas de tu empresa. Tomá decisiones con una visión completa, centralizada y actualizada.
        </p>
      </div>

      </div>
     
      
    </section>
    
  )
}
