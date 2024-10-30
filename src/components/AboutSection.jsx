"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./UI/TabButton";
import pilarSmartCity from "@/components/data/pilarSmartCity";
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
const AboutSection = () => {
    const [tab, setTab] = useState("governance");
    const [isPending, startTransition] = useTransition();
    const handleChange = (id) => {
        startTransition(() => {
            console.log("Tab changed to:", id);
            setTab(id);
        });
    };

    return (
        <section className="mt-10 font-sans" id="about">
            <div className="relative flex sm:flex-col flex-col-reverse items-center">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.9 }}
                    className="z-20 flex flex-col items-center"
                >
                    <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl lg:text-5xl font-sans text-center relative mx-auto">
                        Tentang Kami
                        <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                    </h1>

                    <p className="px-2 sm:w-3/4 text-[#999999] text-center pt-3">
                        Kami adalah pelopor dalam solusi kota pintar,
                        berkomitmen untuk membangun infrastruktur digital yang
                        mendukung efisiensi, kenyamanan, dan keberlanjutan.
                    </p>
                </motion.div>

                <Image
                    src="/mask.svg"
                    alt="alt"
                    width={200}
                    height={200}
                    className="w-24  sm:w-52 absolute right-8 sm:right-24"
                />
            </div>
            <div className="md:grid md:grid-cols-2 gap-5 overflow-hidden py-16 px-4 sm:ps-8 place-items-center">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="sm:ps-8"
                >
                    <p className="text-base text-justify  text-black lg:text-lg">
                        Dengan fokus pada inovasi dan teknologi, kami
                        menyediakan solusi yang mengintegrasikan berbagai aspek
                        kota, mulai dari tata kelola, lingkungan, transportasi,
                        hingga layanan masyarakat. Melalui kolaborasi dan
                        teknologi canggih, kami terus berupaya menciptakan kota
                        yang lebih cerdas dan ramah bagi semua.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="overflow-hidden"
                >
                    <Image
                        src="/image/about-image.png"
                        alt="alt"
                        width={500}
                        height={378}
                    />
                </motion.div>
            </div>

            <div className="bg-[#C7E8F9] bg-opacity-30 relative">
                <motion.div
                    variants={fadeIn("top", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="hidden sm:flex pt-20 flex-wrap gap-4 lg:gap-12  px-8 items-center justify-center"
                >
                    {pilarSmartCity.map((value, index) => (
                        <TabButton
                            key={index}
                            icon={value.icon}
                            selectTab={() => {
                                handleChange(value.id);
                            }}
                            active={tab === value.id}
                        >
                            {value.title}{" "}
                        </TabButton>
                    ))}
                </motion.div>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className=" hidden sm:block mt-16 ms-3 sm:ms-10 pt-8"
                >
                    {pilarSmartCity.find((t) => t.id == tab).content}
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="sm:hidden"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {pilarSmartCity.map((value, index) => (
                            <SwiperSlide className="py-12 px-3" key={index}>
                                <div>
                                    <h1 className="sm:hidden text-center text-[#999999] font-semibold text-3xl mb-6">
                                        {value.title}
                                    </h1>
                                </div>

                                {value.content}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <Image
                    src="/image/background-pilar.png"
                    className="relative bottom-0"
                    alt="alt"
                    width={1359.56}
                    height={169.51}
                />
            </div>
        </section>
    );
};

export default AboutSection;
