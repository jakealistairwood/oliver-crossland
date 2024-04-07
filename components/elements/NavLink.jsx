import React from "react";
import Link from "next/link";

const NavLink = ({ link, label, isLight, scrolled }) => {
    return (
        <Link href={link || ""} role="link" class={`relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 ${isLight ? "after:bg-neutral-800" : "after:bg-white"} ${scrolled ? "after:!bg-neutral-800" : ""} after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100`}>{label}</Link>
    )
}

export default NavLink