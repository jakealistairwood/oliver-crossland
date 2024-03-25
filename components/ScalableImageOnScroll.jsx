import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion"
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";

const ScalableImageOnScroll = (props) => {
    const { image_to_animate, caption, add_caption } = props;

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start','end end'],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky overflow-hidden top-0 h-[100vh]">
                <motion.div style={{ scale }} className="w-full h-full absolute flex items-center justify-center top-0">
                    <div className="relative w-[75vw] h-[75vh]">
                        <Image src={urlFor(image_to_animate).format("webp").url()} alt="" fill objectFit="cover" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ScalableImageOnScroll;