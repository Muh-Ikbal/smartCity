import React from "react";
import Image from "next/image";
// React
import { motion } from "framer-motion"
import { fadeIn } from "./variant";

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1,
            },
        },
    };
    return (
        <section className="font-sans overflow-hidden">
            <div
                className="grid grid-cols-1 sm:grid-cols-12 w-full sm:h-auto overflow-hidden py-24 sm:py-4 lg:pt-0 bg-none sm:bg-contain"
                style={{
                    backgroundImage: "url('/image/hero-left.png')",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="sm:col-span-5 flex flex-col sm:justify-center px-4 sm:p-8 mt-5 lg:mt-2"
                >
                    <h1 className="text-[#343F52]  drop-shadow-lg font-sans mb-6 text-4xl sm:text-5xl lg:text-6xl">
                        Layanan Smart City
                    </h1>
                    <p className="text-black mb-6 font-sans">
                        Smart City adalah konsep kota yang memanfaatkan
                        teknologi dan data untuk meningkatkan kualitas hidup
                        warganya, meningkatkan efisiensi layanan kota, dan
                        mengelola sumber daya secara lebih berkelanjutan.
                    </p>
                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-[#3A9DC2] text-white  py-2 px-6 rounded-lg hover:bg-[#20586c]">
                            Produk &rarr;
                        </button>
                        <button className="bg-[#3A9DC2] text-white  py-2 px-6 rounded-lg hover:bg-[#20586c]">
                            Mitra &rarr;
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className=" hidden sm:block sm:col-span-7 place-self-end relative"
                >
                    <div className=" ">
                        <Image
                            src="/image/hero-circle.png"
                            className="hidden sm:block absolute  top-16 right-40"
                            alt="alt"
                            width={150}
                            height={150}
                        />
                        <Image
                            src="/image/hero.png"
                            alt="alt"
                            width={1200}
                            height={500}
                            className=" object-contain relative z-20 top-8 hidden sm:block"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
