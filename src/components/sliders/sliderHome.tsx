import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = import.meta.glob("../../assets/banner/*.{jpg,png,jpeg}", {
  eager: true,
  as: "url",
});
const bannerUrls = Object.values(banners) as string[];

export default function Slider() {
  return (
 <div className="w-screen ">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 60000, disableOnInteraction: false }}
    loop
    pagination={{ clickable: true }}
    // className="rounded-lg overflow-hidden"
  >
    {bannerUrls.map((img, i) => (
      <SwiperSlide key={i}>
        <img
          src={img}
          alt={`Banner ${i + 1}`}
          className="w-full h-[1000px] object-cover object-center"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
