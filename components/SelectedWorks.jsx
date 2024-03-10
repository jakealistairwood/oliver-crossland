"use client";

import { useState, useEffect } from "react";
import { fetchPortolio } from "@/sanity/sanity-api";
import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";
import UpRightArrow from "../assets/images/up-right-arrow.svg";
import { motion } from "framer-motion";

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

const SelectedWorks = (props) => {
    console.log(props);
    const { section_title, description } = props;
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const getPortfolioData = async () => {
            const data = await fetchPortolio();
            setPortfolio(data);
        }
        getPortfolioData();
    }, []);

    return (
        <div className="py-32">
            <header className="flex items-start gap-52">
                {section_title && <h2 className="uppercase text-6xl tracking-tighter font-bold">{section_title}</h2>}
                {description && <p className="max-w-[480px] opacity-80 text-lg">{description}</p>}
            </header>
            {portfolio && portfolio.length > 0 && (
                <div className="grid grid-cols-12 gap-x-5 gap-y-20 pt-16">
                    {portfolio?.map((project, i) => (
                        project?.make_featured ? (
                            <FeaturedProject key={`project-${i}`} project={project} />
                        ) : (
                            <DefaultProject key={`project-${i}`} project={project} />
                        )
                    ))}       
                </div>
            )}
        </div>
    )
}

export default SelectedWorks;


const FeaturedProject = (props) => {
    const { project } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-span-12 group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden relative aspect-[1180/538] rounded-2xl">
                <Image className="scale-100 duration-300 ease group-hover:scale-105" objectFit="cover" src={urlFor(project?.featured_image).format("webp").url()} alt={`${project?.title} Thumbnail`} fill />
            </div>
            <div className="pt-6 flex items-start justify-between px-4">
                <div className="flex flex-col gap-y-4">
                    <h3 className="uppercase text-4xl tracking-tight font-bold">{project?.title}</h3>
                    <div className="flex items-center font-medium py-[2px] px-3 border-2 border-black rounded-full w-fit">
                        {project?.category}
                    </div>
                </div>
                <motion.div variants={animationVariant} initial="initial" animate={isHovered ? "visible" : "exit"} className="flex items-center pt-1" transition={{ duration: 0.5 }}>
                    View Project
                    <div className="text-black relative w-6 h-6">
                        <Image src={UpRightArrow} alt="" fill />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

const DefaultProject = (props) => {
    const { project } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-span-6 cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden aspect-[580/322] relative rounded-xl">
                <Image className="scale-100 duration-300 ease group-hover:scale-105" objectFit="cover" src={urlFor(project?.featured_image).format("webp").url()} alt={`${project?.title} Thumbnail`} fill />
            </div>
            <div className="pt-6 flex items-start justify-between px-4">
                <div className="flex flex-col gap-y-4">
                    <h3 className="uppercase text-3xl font-bold tracking-tight">{project?.title}</h3>
                    <div className="flex items-center py-[2px] font-medium px-3 border-2 border-black rounded-full w-fit">
                        {project?.category}
                    </div>
                </div>
                <motion.div variants={animationVariant} initial="initial" animate={isHovered ? "visible" : "exit"} className="flex items-center pt-1" transition={{ duration: 0.5 }}>
                    View Project
                    <div className="text-black relative w-6 h-6">
                        <Image src={UpRightArrow} alt="" fill />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}