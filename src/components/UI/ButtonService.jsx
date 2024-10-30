import React from "react";

const ButtonService = ({ isActive, selected, children }) => {
    const active = isActive
        ? "border-[#FAB758]  bg-[#FAB758] text-white"
        : "border-[#C7E8F9] bg-white text-black ";
    return (
        <button
            className={`p-2 border-[2px] rounded-[10px]  ${active}`}
            onClick={selected}
        >
            {children}
        </button>
    );
};

export default ButtonService;
