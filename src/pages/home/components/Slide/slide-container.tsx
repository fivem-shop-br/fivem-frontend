import { Container } from "./index.css";
import { Package, Bug } from "phosphor-react";
import { SlideSingular } from "./slide-singular";
import { animate, animateChildren } from "@src/utils/animate";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { HomeProps } from "@src/pages/index.page";

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
                  {index.types && <Icon types={index.types} />}
                </SlideSingular>
              </SwiperSlide>
            ))}
        </Swiper>
      </animate.div>
    </Container>
  );
}

interface propsIcon {
  types: "feature" | "fixed";
}

function Icon({ types }: propsIcon) {
  return types === "feature" ? <Package size={32} /> : <Bug size={32} />;
}
