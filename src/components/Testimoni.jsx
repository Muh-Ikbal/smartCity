import React from "react";
import Image from "next/image";
import TESTIMONI from "./data/TESTIMONI";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimoni = () => {
    return (
        <section className="font-sans px-4 sm:px-20 relative overflow-hidden my-8">
            <div className="flex flex-col">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="z-20 flex flex-col items-center sm:px-24"
                >
                    <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl font-sans text-center relative mx-auto">
                        Testimoni
                        <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                    </h1>
                    <p className="lg:w-3/4 text-[#999999] text-center pt-3">
                        Kami bangga berbagi pengalaman para pengguna yang puas
                        dengan layanan kami.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="hidden sm:block"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {TESTIMONI.map((value, index) => (
                            <SwiperSlide
                                key={index}
                                className="sm:px-24 px-2 py-24"
                            >
                                <div className="block sm:flex items-center justify-center gap-8">
                                    <div className=" flex items-center justify-center">
                                        <div className="h-24 w-24 sm:w-54 border-[#3A9DC2] border-[1px] overflow-hidden sm:h-54 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                                            <Image
                                                src={value.profile}
                                                alt="alt"
                                                width={200}
                                                height={200}
                                                className="h-24 w-24 sm:h-54 sm:w-54 rounded-full "
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm mt-5 sm:mt-0 lg:text-lg text-center sm:text-left">
                                        <p className="text-black">
                                            {value.testimoni}
                                        </p>
                                        <p className="mt-3 text-[#999999]">
                                            {value.name} <br />
                                            <i>{value.company}</i>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="block sm:hidden"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {TESTIMONI.map((value, index) => (
                            <SwiperSlide
                                key={index}
                                className="sm:px-24 px-2 py-24"
                            >
                                <div className="block sm:flex items-center justify-center w-full gap-8">
                                    <div className=" flex items-center justify-center">
                                        <div className="h-24 w-24 sm:w-54 border-[#3A9DC2] border-[1px] overflow-hidden sm:h-54 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                                            <Image
                                                src={value.profile}
                                                alt="alt"
                                                width={200}
                                                height={200}
                                                className="h-24 w-24 sm:h-54 sm:w-54 rounded-full "
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm mt-5 sm:mt-0 lg:text-lg text-center sm:text-left">
                                        <p className="text-black">
                                            {value.testimoni}
                                        </p>
                                        <p className="mt-3 text-[#999999]">
                                            {value.name} <br />
                                            <i>{value.company}</i>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
            <div className="hidden sm:block w-36 h-36 border-[1px] opacity-50 border-[#FAB758] rounded-full absolute -left-12 top-8"></div>
            <div className="hidden sm:block w-36 h-36 border-[1px] opacity-50 border-[#3A9DC2] rounded-full absolute -right-12 top-36"></div>
            <Image
                className="hidden sm:block absolute top-1/3 left-1/4"
                src="/kontak-assets/quoteicon.svg"
                alt="alt"
                width={100}
                height={100}
            />
        </section>
    );
};

export default Testimoni;
