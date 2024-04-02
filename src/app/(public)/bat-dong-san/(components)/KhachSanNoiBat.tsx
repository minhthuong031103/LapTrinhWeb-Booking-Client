"use client";

import { useBatDongSan } from "@/hooks/useBatDongSan";
import { parseJSON } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "VND",
  style: "currency",
});
export function formatCurrency(value: number) {
  return CURRENCY_FORMAT.format(value);
}
export const KhachSanNoiBat = () => {
  const listNoiBat = [
    {
      Name: "The Reverie Sài Gòn",
      Address:
        "22 – 36 Nguyen Hue Boulevard and 57 – 69F Dong Khoi Street Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
      Image:
        "https://th.bing.com/th/id/OIP.gAEfj4PPu3_rHS-MhWuqlQHaD6?w=327&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      Name: "Sofitel Saigon Plaza",
      Address:
        "17 Le Duan, District 1, Ho Chi Minh City, Vietnam, HO CHI MINH, Vietnam",
      Image: "https://www.ahstatic.com/photos/2077_ho_00_p_2048x1536.jpg",
    },
    {
      Name: "Park Hyatt Saigon",
      Address: "2 Lam Son Square, Ho Chi Minh City (Saigon), Vietnam",
      Image:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/02/23/1745/Park-Hyatt-Saigon-P312-Exterior.jpg/Park-Hyatt-Saigon-P312-Exterior.16x9.adapt.1920.1080.jpg",
    },
    {
      Name: "Caravelle Sài Gòn",
      Address: "19 - 23 Lam Son Square, District 1, Ho Chi Minh City, Vietnam",
      Image:
        "https://th.bing.com/th/id/OIP.DdEyP1ytIKHfzKR2q81E0AHaFd?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];
  //   const [listNoiBat, setListNoiBat] = useState([]);
  //   const { fetchBatDongSanNoiBat } = useBatDongSan();
  //   useEffect(() => {
  //     const getBatDongSanNoiBat = async () => {
  //       await fetchBatDongSanNoiBat().then((data) => {
  //         setListNoiBat(data);
  //       });
  //     };
  //     getBatDongSanNoiBat();
  //   }, []);
  return (
    <div className="p-8 mr-6 rounded-xl bg-white border-[1px] shadow-sm space-y-4">
      <div>Tin nổi bật mới nhất</div>
      <Carousel
        autoPlay={false}
        infiniteLoop={false}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
      >
        export default function App() {
            return (
            <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/images/hero-card-complete.jpeg"
                width={270}
                />
            </CardBody>
            </Card>
            );
}
      </Carousel>
    </div>
  );
};

function BranchPost(type) {
  return type?.type === "Yêu thích" ? (
    <p className="bg-blue-500 w-[82px] h-[36px] rounded-md text-white text-[14px] text-center py-2">
      Yêu thích
    </p>
  ) : type?.type === "Nổi bật" ? (
    <p className="bg-red-500 w-[82px] h-[36px] rounded-md text-white text-[14px] text-center py-2">
      Nổi bật
    </p>
  ) : (
    <></>
  );
}

function HinhThuc(type) {
  return (
    <p className="bg-[#3E4C66] w-[82px] h-[36px] rounded-md text-white text-[14px] text-center py-2">
      {type?.type === false ? "Đăng bán" : "Cho thuê"}
    </p>
  );
}
