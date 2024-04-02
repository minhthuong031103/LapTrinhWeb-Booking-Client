"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Balancer } from "react-wrap-balancer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function KhachSanNoiBat() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-2  py-6 md:pt-10 px-10"
    >
      <div className="flex max-w-[58rem] mb-10 flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Các khách sạn nổi bật
        </h2>
        <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-base sm:leading-7">
          Các khách sạn được nhiều lượt booking
        </Balancer>
      </div>
      <div className="w-full h-auto overflow-visible grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="py-4 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_-8px_15px_-3px_rgba(0,0,0,0.2)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Caravelle Sài Gòn</h4>
            <small className="text-default-500 italic">
              19 - 23 Lam Son Square, District 1, Ho Chi Minh
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Caravelle Sài Gòn"
              className="object-cover rounded-xl"
              src="https://th.bing.com/th/id/OIP.CYI5O6ZF8NP1pEg1SGeZJQHaFj?w=248&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
          </CardBody>
        </Card>
        <Card className="py-4 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_-8px_15px_-3px_rgba(0,0,0,0.2)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Sofitel Saigon Plaza</h4>
            <small className="text-default-500 italic">
              17 Le Duan, District 1, Ho Chi Minh City
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Sofitel Saigon Plaza"
              className="object-cover rounded-xl"
              src="https://www.ahstatic.com/photos/2077_ho_00_p_2048x1536.jpg"
            />
          </CardBody>
        </Card>
        <Card className="py-4 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_-8px_15px_-3px_rgba(0,0,0,0.2)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Park Hyatt Saigon</h4>
            <small className="text-default-500 italic">
              2 Lam Son Square, Ho Chi Minh City
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Park Hyatt Saigon"
              className="object-cover rounded-xl"
              src="https://th.bing.com/th/id/OIP.zR6QSYv6Od8JHQSfvidudgHaFj?w=266&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
          </CardBody>
        </Card>
        <Card className="py-4 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_-8px_15px_-3px_rgba(0,0,0,0.2)]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">The Reverie Sài Gòn</h4>
            <small className="text-default-500 italic">
              22 Nguyen Hue, District 1, Ho Chi Minh
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="The Reverie Sài Gòn"
              className="object-cover rounded-xl"
              src="https://th.bing.com/th/id/OIP.FYHXFUxqzIVfnuzIAce4kAHaFj?rs=1&pid=ImgDetMain"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default KhachSanNoiBat;
