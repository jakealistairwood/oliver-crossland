import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";
import { motion, useAnimation, useInView } from "framer-motion";

const ThreeColGridItems = ({ section_header, grid_items }) => {
    const { heading, subheading, description } = section_header;

    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {
        once: true,
        amount: 0.7
    });

    const fadeInGridItem = {
        initial: {
            opacity: 0,
            y: 50,
        }, 
        fadeInItem: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.1
            }
        })
    }

    useEffect(() => {
        if (isInView) {
            controls.start("fadeInItem");
        }
    }, [controls, isInView])

    return (
        <div className="flex flex-col">
            <header>
                {subheading && subheading.length > 0 && <div className="bg-ivory text-slateGrey text-[0.8rem] md:text-normal w-fit px-3 py-[6px] rounded-full flex uppercase">{subheading}</div>}
                {heading && heading.length > 0 && <h2 className="text-[5rem] uppercase font-bold" dangerouslySetInnerHTML={{ __html: heading }} />}
            </header>
            {grid_items && grid_items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {grid_items?.map((item, i) => (
                        <motion.div ref={ref} initial="initial" animate={controls} variants={fadeInGridItem} custom={i} className={`flex flex-col px-10 py-12 rounded-xl ${i === 0 ? "bg-frostWhite" : ""} hover:bg-frostWhite duration-300 ease`}>
                            <div className="w-[66px] h-[66px] bg-navy rounded-lg relative flex items-center justify-center">
                                <Image src={urlFor(item?.icon).format("webp").url()} width={40} height={40} alt="" />
                            </div>
                            <div className="mt-auto pt-10">
                                <h3 className="uppercase font-serif text-lg font-medium">{item?.heading}</h3>
                                {item?.description && item?.description.length > 0 && (
                                    <p className="font-serif font-normal text-navy opacity-80 mt-6">{item?.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ThreeColGridItems