"use client";

import React, { useState, useEffect } from "react";
import { fetchPortolio } from "@/sanity/sanity-api";
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";
import UpRightArrow from "../assets/images/up-right-arrow.svg";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import LinkButton from "./elements/LinkButton";

const animationVariant = {
    initial: {
        y: 10,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 10,
        opacity: 0,
    }
}

const link = {
    label: "View my complete portfolio",
    url: "/portfolio",
}

const SelectedWorks = (props) => {
    const { section_title, description, featured_projects } = props;
    // const [portfolio, setPortfolio] = useState([]);

    // useEffect(() => {
    //     const getPortfolioData = async () => {
    //         const data = await fetchPortolio();
    //         setPortfolio(data);
    //     }
    //     getPortfolioData();
    // }, []);

    return (
        <div>
            <header className="flex flex-col items-center text-center gap-0">
                {section_title && <h2 className="uppercase text-[8rem] tracking-tighter font-bold">{section_title}</h2>}
                {description && <p className="max-w-[680px] opacity-80 text-lg">{description}</p>}
            </header>
            {featured_projects && featured_projects.length > 0 && (
                <div className="grid grid-cols-12 gap-x-5 gap-y-20 pt-24">
                    {featured_projects?.map((project, i) => (
                        project?.make_featured ? (
                            <FeaturedProject key={`project-${i}`} project={project} />
                        ) : (
                            <DefaultProject key={`project-${i}`} project={project} />
                        )
                    ))}       
                </div>
            )}
            <div className="w-fit mx-auto mt-20">
                <LinkButton link={link} />
            </div>
        </div>
    )
}

export default SelectedWorks;


const FeaturedProject = (props) => {
    const { project } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-span-12 group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden relative aspect-[1180/538]">
                <Image className="scale-100 duration-300 ease group-hover:scale-105 group-hover:blur-sm" objectFit="cover" src={urlFor(project?.featured_image).format("webp").url()} alt={`${project?.title} Thumbnail`} fill />
            </div>
            <div className="pt-6 flex items-start justify-between px-4">
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-3xl font-light tracking-widest uppercase text-black">{project?.title}</h3>
                    <div className="flex text-xs items-center font-light text-[#5A5A5A] bg-[#f4f4f4] w-fit font-mono uppercase px-3 py-1 rounded-full">
                        {project?.category}
                    </div>
                </div>
            </div>
        </div>
    )
}

const DefaultProject = (props) => {
    const { project } = props;

    const [isHovered, setIsHovered] = useState(false);
    const caseStudyText = "View Case Study";
    let marqueeArr = [];
    marqueeArr = [caseStudyText, caseStudyText, caseStudyText, caseStudyText];

    const animationVariant = {
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
        <div className="col-span-6 cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden aspect-[580/322] relative">
                <Image className="scale-100 duration-300 ease group-hover:scale-105 group-hover:blur-sm" objectFit="cover" src={urlFor(project?.featured_image).format("webp").url()} alt={`${project?.title} Thumbnail`} fill />
                <motion.div variants={animationVariant} initial="initial" animate={isHovered ? "visible" : "initial"} className="absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <Marquee className="w-full" loop={0}>
                        {marqueeArr.map((text, i) => (
                            <h2 className="uppercase text-6xl text-white font-bold w-full px-4">{text}</h2>
                        ))}
                    </Marquee>
                </motion.div>
            </div>
            <div className="pt-6 flex flex-col items-start justify-between px-4">
                <div className="flex flex-row items-center justify-start w-full gap-y-4">
                    {/* <h3 className="text-3xl font-light tracking-widest uppercase text-black">{project?.title}</h3> */}
                    <h3 className="text-normal font-serif font-bold tracking-widest uppercase text-black">{project?.title}</h3>
                    <div className="flex text-xs items-center font-light text-[#5A5A5A] bg-[#f4f4f4] w-fit font-mono uppercase px-3 py-1 rounded-full">
                        {project?.category}
                    </div>
                </div>
                <p className="font-light text-sm mt-4 max-w-[640px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam. Facere quos rerum, numquam saepe alias nihil voluptas aperiam mollitia sequi iure eaque ad voluptate consequatur a impedit dolor doloremque.</p>
            </div>
        </div>
    )
}