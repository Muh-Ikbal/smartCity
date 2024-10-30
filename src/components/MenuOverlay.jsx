import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <div className="p-2 bg-[#3A9DC2] relative">
            <ul className="flex flex-col py-4 items-center xl:hidden text-white">
                {links.map((link, index) => (
                    <div key={index}>
                        <li>
                            <NavLink className={'text-white'} href={link.path} title={link.title} />
                        </li>
                    </div>
                ))}
                <li>
                    <div className="flex mt-3  items-center justify-center h-[57px] w-[170px] cursor-pointer rounded-xl bg-[#3A9DC2] border-2 text-center hover:text-white">
                        <NavLink href={"#contact"} title={"Hubungi Kami"} />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MenuOverlay;
