import React from "react";
import Image from "next/image";
const ContactSection = () => {
    return (
        <section
            className="font-sans mb-4 bg-white pt-6 px-4 overflow-hidden relative"
            id="contact"
        >
            <div className="z-20 flex flex-col items-center ">
                <h1 className="py-8 text-[#343F52] text-4xl sm:text-5xl lg:text-5xl font-sans text-center relative mx-auto">
                    Kontak
                    <div className="border-[3px] border-[#FAB758] w-24 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2"></div>
                </h1>

                <p className="px-2 z-20 sm:w-3/4 text-[#999999] text-center pt-3">
                    Hubungi kami untuk informasi lebih lanjut dan konsultasi
                    mengenai layanan Smart City.
                </p>
            </div>
            <div className="mb-3 sm:pt-2 grid sm:h-[650px] z-20 place-items-start sm:grid-cols-12 mt-12">
                <div className="z-20 sm:h-full sm:col-span-5 w-full sm:px-8 lg:px-16  ">
                    <div className="hidden sm:flex justify-center  sm:h-full flex-wrap border-[2px] rounded-[10px] border-[#3A9DC2] bg-[#F0F8FF] px-1 py-3  items-center  gap-2 sm:gap-[47px] sm:flex-col sm:px-2 lg:px-4">
                        <div className="flex flex-col items-center">
                            <Image
                                className="w-8 sm:w-16"
                                src="/kontak-assets/location.svg"
                                alt="location"
                                width={20}
                                height={20}
                            />
                            <h4 className="text-black font-medium">Alamat</h4>
                            <p className="text-[#999999] mt-4 text-[12px] sm:text-sm  text-center">
                                Kendari, Sulawesi Tenggara
                            </p>
                        </div>
                        <div className=" flex flex-col items-center">
                            <Image
                                className="w-8 sm:w-16"
                                src="/kontak-assets/email.svg"
                                alt="location"
                                width={50}
                                height={50}
                            />
                            <h4 className="text-black font-medium text-[12px]">Email</h4>
                            <p className="text-[#999999] text-center text-[12px] sm:text-sm whitespace-normal break-words text-wrap mt-4">
                                smartcity@gmail.com
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                className="w-8 sm:w-16"
                                src="/kontak-assets/phone.svg"
                                alt="location"
                                width={50}
                                height={50}
                            />
                            <h4 className="text-black font-medium">Telepon</h4>
                            <p className="text-[#999999] text-center text-[12px] sm:text-sm mt-4 ">
                                +62 8581212320{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="z-20 w-full h-full mt-4 sm:mt-0 sm:pr-8 sm:col-span-7">
                    <div className="px-4 border-[2px] sm:h-full rounded-[10px] text-black border-[#3A9DC2] bg-[#F0F8FF] py-3 sm:p-12 sm:flex-col">
                        <form action="#">
                            <div className="block">
                                <label htmlFor="nama" className="text-black">
                                    Nama Lengkap
                                </label>
                                <br />
                                <input
                                    className="w-full h-12 rounded-[5px] border border-[#D9D9D9] mt-3"
                                    type="text"
                                    id="nama"
                                />
                            </div>
                            <div className="block mt-2">
                                <label htmlFor="email" className="">
                                    Email
                                </label>
                                <br />
                                <input
                                    className="w-full h-12 rounded-[5px] border border-[#D9D9D9] mt-3"
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div className="block mt-2">
                                <label htmlFor="subject" className="">
                                    Subject
                                </label>
                                <br />
                                <input
                                    className="w-full h-12 rounded-[5px] border border-[#D9D9D9] mt-3"
                                    type="text"
                                    id="subject"
                                />
                            </div>
                            <div className="block mt-2">
                                <label htmlFor="pesan" className="">
                                    Pesan
                                </label>
                                <br />
                                <textarea
                                    className="w-full h-32 rounded-[5px] border border-[#D9D9D9] mt-3"
                                    name=""
                                    id="pesan"
                                    placeholder="tulis pesan anda"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <button className="w-40 h-12 bg-[#3A9DC2] text-white rounded-xl">
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block w-36 h-36 border-[1px] opacity-50 border-[#FAB758] rounded-full absolute -left-8 top-32"></div>
            <div className="hidden sm:block w-36 h-36 border-[1px] opacity-50 border-[#FAB758] rounded-full absolute left-1/3 bottom-72"></div>
            <Image
                src="/mask.svg"
                className="absolute top-40 -right-1"
                alt="alt"
                width={100}
                height={100}
            />
        </section>
    );
};

export default ContactSection;
