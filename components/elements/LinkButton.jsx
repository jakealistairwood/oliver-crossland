import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LinkButton = ({ link }) => {
    const { label, url } = link;
    const [linkHovered, setLinkHovered] = useState(false);

    const linkAnimation = {
        initial: {
          scale: 0.2,
        },
        active: {
          scale: 1,
        },
    }

    return (
        <Link
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
                onFocus={() => setLinkHovered(true)}
                onBlur={() => setLinkHovered(false)}
                className="flex items-center gap-2 mt-10 bg-lighterNavy pl-4 pr-[10px] py-[10px] rounded-full text-white uppercase font-light"
                href={url || ''}
            >
                <span>{label}</span>
                <div className="w-[24px] h-[24px]">
                <motion.div
                    variants={linkAnimation}
                    animate={linkHovered ? 'active' : 'initial'}
                    initial="initial"
                    className="w-full h-full bg-white rounded-full overflow-hidden relative"
                >
                    <svg
                    //   className={min}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[18px] min-h-[18px] ${linkHovered ? "opacity-100" : "opacity-0"}`}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M6 3.85498V14.355L14.25 9.10498L6 3.85498Z" fill="#153243" />
                    </svg>
                </motion.div>
                </div>
            </Link>
    )
} 

export default LinkButton