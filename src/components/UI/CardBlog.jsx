import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardBlog = ({ title, deskripsi, image, active }) => {
    return (
        <div
            className={`card rounded-[10px] w-80 lg:w-full overflow-hidden bg-white border-[1px]  ${
                active ? "py-4 px-3 border-[#3A9DC2] pb-6" : "py-0 px-0"
            }`}
        >
            <div
                className="overflow-hidden bg-center bg-cover h-40 sm:h-52 lg:h-80 bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></div>
            {active && (
                <>
                    <h1 className="text-center text-black font-bold text-sm sm:text-xl py-3">
                        {title}
                    </h1>
                    <p className="text-[#999999] text-[10px] sm:text-lg">{deskripsi}</p>
                    <Link href="#" className="text-[#3A9DC2] text-[10px] sm:text-lg">
                        Baca Selengkapnya &rarr;
                    </Link>
                </>
            )}
        </div>
    );
};

export default CardBlog;
