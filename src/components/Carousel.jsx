import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

const Carousel = ({ data }) => {
  const swiperRef = useRef();

  return (
    <div className="relative">
      <button
        className="absolute -left-12 top-1/2 hidden translate-y-[calc(-50%-2.5em)] md:block"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <p className="text-3xl text-primary">&larr;</p>
      </button>
      <button
        className="absolute -right-12 top-1/2 hidden translate-y-[calc(-50%-2.5em)] md:block"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <p className="text-3xl text-primary">&rarr;</p>
      </button>
      <Swiper
        style={{
          "--swiper-pagination-color": "#397E6D",
        }}
        className="pb-10"
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data &&
          data?.map((item) => {
            const { id, name, desc, img } = item;

            return (
              <SwiperSlide key={id}>
                <img src={img} className="h-[100px] w-full rounded-t-xl object-cover" />
                <div className="rounded-b-xl px-4 py-3 shadow-xl">
                  <p className="font-bold text-secondary">{name}</p>
                  <p className="text-secondary">{desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
export default Carousel;
