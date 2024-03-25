import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion"
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";

const ImageDivider = ({ image }) => {
    const scrollY = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollY]);

    const parallaxValue = useTransform(scrollY, [0, 1], [0, 100]);

    return (
        <div className="min-h-screen w-full relative bg-transparent overflow-hidden">
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    y: parallaxValue
                }}
            >
                <Image
                    src={urlFor(image).format("webp").url()}
                    fill 
                    alt=""
                    objectFit="cover"
                />
            </motion.div>
        </div>
    )
}

export default ImageDivider;