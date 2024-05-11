"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";
import { motion, useAnimation, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

const DynamicProjectCard = dynamic(() => import("./elements/ProjectCard"));

const PortfolioList = (props) => {
    const { heading, description, portfolio } = props;

    return (
        <>
            <header className="flex flex-col items-center text-center pt-[80px] md:pt-[140px] pb-20">
                <h1 className="uppercase text-[3rem] md:text-[5rem] leading-none lg:text-[7rem] tracking-tighter font-bold" dangerouslySetInnerHTML={{ __html: heading }} />
                <p className="max-w-[680px] mt-10 md:mt-6 opacity-80 text-normal md:text-lg font-serif" dangerouslySetInnerHTML={{ __html: description }} />
            </header>
            {portfolio && portfolio.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20 pb-[140px]">
                    {portfolio?.map((project, i) => (
                        // <DefaultProject key={`project-${i}`} index={i} project={project} />
                        <DynamicProjectCard key={`project-${i}`} index={i} project={project} />
                    ))}       
                </div>
            )}
        </>
    )
}

export default PortfolioList

const DefaultProject = (props) => {
    const { project, index } = props;

    const [isHovered, setIsHovered] = useState(false);
    const caseStudyText = "View Case Study";
    let marqueeArr = [];
    marqueeArr = [caseStudyText, caseStudyText, caseStudyText, caseStudyText];

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
    });

    useEffect(() => {
        if (isInView) {
            controls.start("fadeIn");
        }
    }, [controls, isInView]);

    // const textVariants = {
    //     hidden: { opacity: 0, y: 50 },
    //     visible: (custom) => ({
    //       opacity: 1,
    //       y: 0,
    //       transition: {
    //         duration: 0.5, // Adjust the transition duration as needed
    //         delay: custom % 2 === 0 ? custom * 0.1 : custom * 0.2 // Alternating delays for odd and even indexes
    //       }
    //     })
    //   };
      

    const fadeInProject = {
        initial: {
            opacity: 0,
            y: 50,
        },
        fadeIn: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: custom % 2 === 0 ? 0.1 : 0.3 
                // delay: custom * 0.2
            },
        })
    }

    const animationMarqueeOnHover = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.div ref={ref} initial="initial" animate={controls} variants={fadeInProject} custom={index}>
            <Link href={`/portfolio/${project?.slug.current}` || ""} className="cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="overflow-hidden aspect-[580/322] relative">
                    <Image 
                        className="scale-100 duration-300 ease group-hover:scale-105 group-hover:blur-sm object-cover" 
                        // objectFit="cover" 
                        src={urlFor(project?.featured_image).format("webp").url()} 
                        alt={`${project?.title} Thumbnail`} 
                        fill 
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <motion.div variants={animationMarqueeOnHover} initial="initial" animate={isHovered ? "visible" : "initial"} className="absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <Marquee className="w-full" loop={0}>
                            {marqueeArr.map((text, i) => (
                                <h2 className="uppercase text-6xl text-white font-bold w-full px-4">{text}</h2>
                            ))}
                        </Marquee>
                    </motion.div>
                </div>
                <div className="pt-6 flex flex-col items-start justify-between md:px-4">
                    <div className="flex flex-col-reverse md:flex-row items-left md:items-center justify-between w-full gap-y-4">
                        {/* <h3 className="text-3xl font-light tracking-widest uppercase text-black">{project?.title}</h3> */}
                        <h3 className="text-normal font-serif font-bold tracking-widest uppercase text-black">{project?.title}</h3>
                        <div className="flex text-[0.6rem] md:text-xs items-center font-light text-[#5A5A5A] bg-[#f4f4f4] w-fit font-mono uppercase px-3 py-1 rounded-full">
                            {project?.category}
                        </div>
                    </div>
                    <p className="font-light text-sm mt-4 max-w-[640px]">{project?.excerpt}</p>
                </div>
            </Link>
        </motion.div>
    )
}