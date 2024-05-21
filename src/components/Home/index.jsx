import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
import Card from "./Card";
import Flow from "./Flow";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const cards = [
    {
      icon: "icon-home",
      label: "专业调解组织",
      url: "icon-home.png",
    },
    {
      icon: "icon-user",
      label: "专业调解员",
      url: "icon-users.png",
    },
    {
      icon: "icon-doc",
      label: "调解案件",
      url: "icon-doc.png",
    },
  ];
  return (
    <div className="p-18px">
      <div className="flex text-white">
        <div className="w-2/3">
          <Swiper
            className="home-swiper"
            modules={[Navigation, Pagination, A11y]}
            autoplay
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src="slide.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="slide.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="slide.png" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="grow rounded-4xl border-2 border-home p-8 flex flex-col justify-between ml-8">
          <h1 className="text-black px-8 mt-8 text-center text-2xl font-bold">
            已调解纠纷（件）
          </h1>
          <div className="text-6xl font-bold mb-8 mt-4 flex justify-center ">
            <span className="mx-4 p-4 rounded-3xl bg-blue-1">0</span>
            <span className="mx-4 p-4 rounded-3xl bg-blue-1">0</span>
            <span className="mx-4 p-4 rounded-3xl bg-blue-1">0</span>
          </div>
          <div className="bg-blue-1 px-22 py-5 text-5xl font-bold text-center rounded-4xl">
            申请调解
          </div>
        </div>
      </div>
      <div className="flex justify-between  my-12 -mx-12">
        {cards.map(({ label, icon, url }) => (
          <Card icon={url} label={label} key={icon} />
        ))}
      </div>
      <Flow />
    </div>
  );
};

export default Home;
