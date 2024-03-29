"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";

const typeCollections = [
  {
    title: "Vũng Tàu",
    image:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/11/1/1111523/Vung-Tau-2.jpg",
  },
  {
    title: "Đà Lạt",
    image:
      "https://media.techcity.cloud/vietnam.vn/2023/05/anh-dep-da-lat-nang-som_085717263-9.jpg",
  },
  {
    title: "Đà nẵng",
    image:
      "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
  },
  {
    title: "Phú Quốc",
    image:
      "https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/2/6/656344/01.jpg",
  },
];

function TypeCollections() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-10  py-6 md:pt-10 mt-8 px-10"
    >
      <div className="flex max-w-[58rem] flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Các điểm đến thu hút nhất Việt Nam
        </h2>
      </div>
      <Swiper
        style={
          {
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-width": "10px",
            "--swiper-pagination-bullet-height": "10px",
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto overflow-visible relative"
      >
        {typeCollections?.map((collection) => (
          <SwiperSlide className="h-full relative mb-16 overflow-visible">
            <Link
              href={`/bat-dong-san/loai-hinh-bat-dong-san/${
                collection?.title === "Căn hộ"
                  ? "1"
                  : collection?.title === "Đất"
                  ? "2"
                  : collection?.title === "Nhà ở"
                  ? "3"
                  : "4"
              }`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <AspectRatio ratio={3 / 2}>
                  <img
                    src={collection.image}
                    alt={"Loại bất động sản"}
                    className="object-cover h-full w-full transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <div
                  className="px-5 absolute inset-0 z-20 flex items-end justify-center"
                  style={{
                    background:
                      "linear-gradient(to top, #25253bdc 0%, #20202b00 80%)",
                  }}
                >
                  <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TypeCollections;
