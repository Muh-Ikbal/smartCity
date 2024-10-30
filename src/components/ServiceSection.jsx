import React, { useState, useTransition } from "react";
import Image from "next/image";
import layanan from "./data/layanan";
import ButtonService from "./UI/ButtonService";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ServiceSection = () => {
    const [tab, setTab] = useState("infrastruktur");
    const [isPending, startTransition] = useTransition();
    const handleChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    const service = layanan.filter((value) => value.id === tab);

    return (
        <section
            id="service"
            className="my-24 font-sans relative px-2 sm:px-16"
        >
            <div className="flex flex-col gap-4 items-center">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="z-20 flex flex-col items-center sm:px-4 lg:px-24"
                >
                    <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl font-sans text-center relative mx-auto">
                        Layanan
                        <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                    </h1>
                    <p className="sm:w-3/4 text-[#999999] text-center pt-3">
                        Kami hadir dengan layanan terbaik untuk mendukung
                        pembangunan kota pintar yang berkelanjutan dan berfokus
                        pada peningkatan kualitas hidup masyarakat.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="hidden sm:flex flex-wrap gap-8 justify-center z-30"
                >
                    {layanan.map((value, index) => (
                        <ButtonService
                            key={index}
                            isActive={tab === value.id}
                            selected={() => {
                                handleChange(value.id);
                            }}
                        >
                            {value.title}
                        </ButtonService>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="hidden sm:block z-20"
                >
                    {service.map((data, index) => (
                        <div
                            key={index}
                            className="sm:grid grid-cols-1 sm:grid-cols-12 mt-12 gap-4 z-20"
                        >
                            <div className="sm:col-span-5 place-items-start">
                                <Image
                                    src={data.image}
                                    alt="alt"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="sm:col-span-7">
                                {data.content.map((item, id) => (
                                    <div key={id} className="">
                                        <div className="flex items-start gap-3 mt-3">
                                            <Image
                                                src="/centang.svg"
                                                alt="alt"
                                                width={30}
                                                height={30}
                                            />
                                            <div>
                                                <h1 className="text-2xl text-black font-medium">
                                                    {item.title}
                                                </h1>
                                                <p className="mt-2 text-black">
                                                    {item.deskripsi}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile Swiper */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="block sm:hidden w-full"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {layanan.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center gap-4 mt-6 py-8">
                                    <Image
                                        src={data.image}
                                        alt="alt"
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div className="">
                                        {data.content.map((item, id) => (
                                            <div
                                                key={id}
                                                className="flex items-start gap-3 mt-3"
                                            >
                                                <Image
                                                    src="/centang.svg"
                                                    alt="alt"
                                                    width={30}
                                                    height={30}
                                                />
                                                <div>
                                                    <h1 className="text-xl font-medium text-[#999999]">
                                                        {item.title}
                                                    </h1>
                                                    <p className="mt-1 text-sm text-gray-700">
                                                        {item.deskripsi}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="h-screen flex relative justify-start items-center z-20"
            >
                <h1 className="text-[#343F52] font-bold text-lg sm:text-4xl lg:text-6xl w-3/4 lg:w-1/2 z-20">
                    Mewujudkan Kota Cerdas untuk Kehidupan yang Lebih Baik
                </h1>
                <Image
                    src="/mask.svg"
                    alt="alt"
                    width={50}
                    height={50}
                    className="w-24  sm:w-32 sm:block absolute top-32 sm:left-[-80px]"
                />
                <Image
                    src="/small-cirlce.svg"
                    alt="alt"
                    width={50}
                    height={50}
                    className="w-12  sm:w-16 sm:block absolute bottom-1/3 lg:bottom-1/4 right-1/3 lg:right-1/3"
                />
                <Image
                    src="/small-circle2.svg"
                    alt="alt"
                    width={50}
                    height={50}
                    className="w-6  sm:w-8 sm:block absolute bottom-1/2 lg:bottom-2/3 right-7 lg:right-24"
                />
                <Image
                    src="/bubble.svg"
                    alt="alt"
                    width={50}
                    height={50}
                    className="w-20 sm:w-32 lg:w-52 sm:block absolute top-1/3 lg:top-1/4 right-10 sm:right-20 lg:right-1/4"
                />
                <Image
                    src="/bubble2.svg"
                    alt="alt"
                    width={50}
                    height={50}
                    className="w-20 sm:w-32 lg:w-52 sm:block absolute  bottom-1/3 sm:top-1/2 right-4 sm:right-8 lg:right-16"
                />
            </motion.div>

            <Image
                src="/circle-3.svg"
                className="absolute top-52 w-96 left-0 hidden sm:block"
                alt=""
                width={50}
                height={50}
            />
            <Image
                src="/circle-1.svg"
                className="absolute w-32 top-4 left-[67px] hidden sm:block"
                alt=""
                width={200}
                height={200}
            />
            <Image
                src="/circle-2.svg"
                className="absolute w-16 top-28 left-[245px] hidden sm:block"
                alt=""
                width={200}
                height={200}
            />
            <Image
                src="/circle-4.svg"
                className="absolute w-48 sm:top-1/3 lg:top-1/3 right-14 hidden sm:block"
                alt=""
                width={200}
                height={200}
            />
            <Image
                src="/mask.svg"
                alt="alt"
                width={200}
                height={200}
                className="w-24  sm:w-52 hidden sm:block absolute top-0 -right-4"
            />
        </section>
    );
};

export default ServiceSection;
