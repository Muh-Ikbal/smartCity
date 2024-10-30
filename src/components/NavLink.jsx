import React from "react";
import Link from "next/link";

const NavLink = ({ href, title ,className}) => {
    return (
        <Link
            className={`block py-2 pl-3 text-[#000000] sm:text-xl rounded md:p-0 ${className}`}
            href={href}
            scroll={true}
        >
            {title}
        </Link>
    );
};

export default NavLink;
