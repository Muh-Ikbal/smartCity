import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
    return (
        <section className="font-sans mt-0 bg-[#F0F8FF] p-5 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-12 z-20">
                <div className="sm:col-span-5 z-20">
                    <div className=" flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            className="w-16"
                            width={200}
                            height={200}
                        />
                        <h1 className="text-[#343F52] text-lg sm:text-xl font-medium">
                            Smart City
                        </h1>
                    </div>
                    <p className="mt-2 text-black">
                        Smart City menghadirkan teknologi inovatif untuk
                        menciptakan kota yang aman, nyaman, dan efisien bagi
                        seluruh masyarakat.
                    </p>
                </div>
                <div className="sm:col-span-4  sm:ps-3 mt-4 sm:mt-0">
                    <div className=" flex items-center gap-2">
                        <h1 className="text-black text-lg sm:text-xl font-medium">
                            Informasi Kontak
                            <div className="h-[3px] bg-[#FAB758] w-1/2"></div>
                        </h1>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/kontak-assets/location.svg"
                                alt="location"
                                width={30}
                                height={30}
                                className="w-30"
                            />
                            <h3 className="text-[#343F52]">
                                Kendari, Sulawesi Tenggara
                            </h3>
                        </div>
                        <div className="flex items-center mt-4 gap-3">
                            <Image
                                src="/kontak-assets/email.svg"
                                alt="location"
                                width={30}
                                height={30}
                                className="w-30"
                            />
                            <h3 className="text-[#343F52]">
                                smartcity@gmail.com
                            </h3>
                        </div>
                        <div className="flex items-center mt-4 gap-3">
                            <Image
                                src="/kontak-assets/phone.svg"
                                alt="location"
                                width={30}
                                height={30}
                                className="w-30"
                            />
                            <h3 className="text-[#343F52]">+62 12897362</h3>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-3 sm:ps-2 mt-4 sm:mt-0">
                    <div className=" flex items-center gap-2">
                        <h1 className="text-black text-lg sm:text-xl font-medium">
                            Layanan
                            <div className="h-[3px] bg-[#FAB758] w-1/2"></div>
                        </h1>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 text-black">
                        <Link href={"#"}>Infrastruktur Cerdas</Link>
                        <Link href={"#"}>Keamanan Publik</Link>
                        <Link href={"#"}>Energi Terbarukan</Link>
                        <Link href={"#"}>Pelayanan Publik</Link>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10">
                <div className="flex justify-center gap-4">
                    <Image
                        src="/kontak-assets/instagram.svg"
                        alt="alt"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/kontak-assets/linkedin.svg"
                        alt="alt"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/kontak-assets/tweet.svg"
                        alt="alt"
                        width={30}
                        height={30}
                    />
                </div>
                <div className="mt-5">
                    <p className="text-sm text-center text-black">
                        Copyright &copy; {new Date().getFullYear()} Smart City from ikbal <br />design by ade sulastric
                    </p>
                </div>
            </div>
            <div className="hidden sm:block w-52 h-52 border-[2px] opacity-50 border-[#FAB758] rounded-full absolute -right-20 sm:-left-20 -bottom-16"></div>
            <div className="hidden sm:block w-52 h-52 border-[2px] opacity-50 border-[#3A9DC2] rounded-full absolute sm:-right-20 -top-16"></div>
        </section>
    );
};

export default FooterSection;
