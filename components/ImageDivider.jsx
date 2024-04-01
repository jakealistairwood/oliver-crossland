import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";

const ImageDivider = ({ image }) => {


    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <div className="min-h-[80vh] w-full bg-transparent overflow-hidden relative" ref={containerRef}>
            <motion.div className="absolute w-full min-h-screen" style={{ y }}>
                <Image
                    src={urlFor(image).format("webp").url()}
                    fill 
                    alt=""
                    // objectFit="cover"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    )
}

export default ImageDivider;