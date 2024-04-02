"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Balancer } from "react-wrap-balancer";
// import Link from "next/link";

function BatDongSanKhuVuc() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-2  py-6 md:pt-10 px-10"
    >
      <div className="flex max-w-[58rem] mb-10 flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Các loại phòng khách sạn
        </h2>
        <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-base sm:leading-7">
          Các loại phòng khách sạn chuẩn 5 sao
        </Balancer>
      </div>
      <div className="w-full h-auto overflow-visible grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
          <img
            src={
              "https://phuchoa.com.vn/wp-content/uploads/2021/04/phong-STD.jpg"
            }
            alt={"Standard"}
            className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
            style={{ transitionDuration: "500ms" }}
          />
          <div
            className="px-5 absolute inset-0 z-20 flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to top, #25253bdc 0%, #20202b00 100%)",
            }}
          >
            <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
              Standard
            </h3>
          </div>
        </div>
        <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
          <img
            src={
              "https://phuchoa.com.vn/wp-content/uploads/2021/04/phong-Superior.jpg"
            }
            alt={"Superior"}
            className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
            style={{ transitionDuration: "500ms" }}
          />
          <div
            className="px-5 absolute inset-0 z-20 flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to top, #25253bdc 0%, #20202b00 100%)",
            }}
          >
            <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
              Superior
            </h3>
          </div>
        </div>
        <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
          <img
            src={
              "https://phuchoa.com.vn/wp-content/uploads/2021/04/phong-deluxe.jpg"
            }
            alt={"Deluxe"}
            className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
            style={{ transitionDuration: "500ms" }}
          />
          <div
            className="px-5 absolute inset-0 z-20 flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to top, #25253bdc 0%, #20202b00 100%)",
            }}
          >
            <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
              Deluxe
            </h3>
          </div>
        </div>
        <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
          <img
            src={
              "https://phuchoa.com.vn/wp-content/uploads/2021/04/phong-president-suite.jpg"
            }
            alt={"Suite"}
            className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
            style={{ transitionDuration: "500ms" }}
          />
          <div
            className="px-5 absolute inset-0 z-20 flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to top, #25253bdc 0%, #20202b00 100%)",
            }}
          >
            <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
              Suite
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BatDongSanKhuVuc;
