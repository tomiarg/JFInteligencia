

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from "swiper/react"
import pBi from "../assets/img/powerBi.png"
import pBii from "../assets/img/powerBii.png"
import pBiiii from "../assets/img/powerBiii.png"
import pBiiiii from "../assets/img/powerBiiiii.png"
import pBiiiiii from "../assets/img/powerBiiiii.png"



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
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={pBiiii} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={pBiiiii} alt="" /></SwiperSlide>
      <SwiperSlide className='galeria__swiper'><img className='galeria__imagen' src={pBiiiiii} alt="" /></SwiperSlide>
    </Swiper>
      </div>
      <div className="galeria__texto">
        <h3>Dashboards integrados con AppSheet, Power BI y tu ERP</h3>
        <p>Visualiza en tiempo real cada etapa del proceso operativo, desde la captura en terreno hasta el análisis estratégico.
Esta galería muestra ejemplos reales de dashboards que se integran con sistemas ERP, conectando datos clave de distintas áreas de tu empresa. Toma decisiones con una visión completa, centralizada y actualizada.
        </p>
      </div>

      </div>
     
      
    </section>
    
  )
}
