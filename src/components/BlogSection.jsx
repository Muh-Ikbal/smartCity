"use client";
import React, { useState } from "react";
import BLOGS from "./data/blog";
import Image from "next/image";
import Link from "next/link";
import CardBlog from "./UI/CardBlog";
import "@/styles/globals.css";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const BlogSection = () => {
    const [cardActive, setCardActive] = useState(0);
    return (
        <section className="font-sans bg-[#F0F8FF] py-6 px-4" id="blog">
            <div className="flex flex-col items-center">
                <div className="z-20 flex flex-col items-center">
                    <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl lg:text-5xl font-sans text-center relative mx-auto">
                        Blog
                        <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                    </h1>

                    <p className="px-2 sm:w-3/4 text-[#999999] text-center pt-3">
                        Temukan berbagai artikel menarik dan informasi terbaru
                        di sini. Jelajahi wawasan seputar inovasi, teknologi,
                        dan inspirasi yang dapat memperkaya pengetahuan Anda!
                    </p>
                </div>
                <div className="my-20 w-full sm:px-16 lg:px-16 relative">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 85,
                            modifier: 2.5,
                        }}
                        modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            EffectCoverflow,
                        ]}
                        spaceBetween={0}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation
                        onSlideChange={(swiper) =>
                            setCardActive(swiper.activeIndex)
                        }
                        className="swiper-container"
                    >
                        {BLOGS.map((value, index) => (
                            <SwiperSlide key={value.id}>
                                <div className="flex justify-center">
                                    <CardBlog
                                        title={value.title}
                                        deskripsi={value.deskripsi}
                                        image={value.image}
                                        active={index == cardActive}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Link
                        className="-top-10 right-0 absolute text-[#3A9DC2]"
                        href={"#"}
                    >
                        Lihat semua &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
