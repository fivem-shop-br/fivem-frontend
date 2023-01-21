import { Container } from "./index.css";
import { Package } from "phosphor-react";
import { SlideSingular } from "./slide-singular";
import { animate, animateChildren } from "@src/utils/animate";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { HomeProps } from "../..";

export function SlideContainer({ sliders }: HomeProps) {
  const settings: SwiperProps = {
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView:
          sliders && sliders.length > 3 ? 3 : sliders && sliders.length,
      },
    },
  };

  return (
    <Container id="features">
      <animate.div variants={animateChildren}>
        <Swiper
          {...settings}
          modules={[Pagination, Autoplay]}
          className="swiper"
          draggable={true}
        >
          {sliders &&
            sliders.map((index) => (
              <SwiperSlide key={index.id}>
                <SlideSingular
                  title={index.title}
                  subtitle={index.subtitle}
                  description={index.description}
                  image={index.image.url}
                >
                  <Package size={32} />
                </SlideSingular>
              </SwiperSlide>
            ))}
        </Swiper>
      </animate.div>
    </Container>
  );
}
