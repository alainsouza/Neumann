import React, { memo, useEffect } from 'react';
import textura from "../../assets/textura.webp";
import "./arrow.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import ScrollReveal from 'scrollreveal';
import { register } from 'swiper/element/bundle';

register();

const images = [
    require("../../assets/fotos-neumann.webp"),
    require("../../assets/fotos-neumann-1.webp"),
    require("../../assets/fotos-neumann-2.webp"),
    require("../../assets/fotos-neumann-3.webp"),
    require("../../assets/fotos-neumann-4.webp"),
    require("../../assets/fotos-neumann-5.webp"),
    require("../../assets/fotos-neumann-6.webp"),
];

const Pictures = () => {
  useEffect(() => {
    ScrollReveal().reveal('.swiper-container', {
      delay: 300,
      duration: 1000,
      origin: 'left',
      distance: '100px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, []);

  const settings = {
    navigation: true,
    pagination: false,
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      }
    }
  };

  return (
    <section id="fotos" className="py-8" style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
      <div className='container mx-auto max-w-[2500px]' style={{backgroundImage: `url(${textura})`, backgroundPosition: 'center', backgroundRepeat: 'repeat'}}>
        <div className="px-4 py-4">
          <Swiper {...settings} className="swiper-container">
            {images.map((image, index) => (
              <SwiperSlide key={index} className="carouselSwiper outline-none cursor-pointer">
                <img src={image} alt={`Imagem ${index}`} className="w-full h-96 object-cover" width="350" height="350" style={{borderRadius: 10}}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default memo(Pictures);
