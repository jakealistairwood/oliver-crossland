"use client";

import React from "react";
import dynamic from "next/dynamic";
import LinkButton from "./elements/LinkButton";

const DynamicProjectCard = dynamic(() => import("./elements/ProjectCard"));

const link = {
    label: "View my complete portfolio",
    url: "/portfolio",
}

const SelectedWorks = (props) => {
    const { section_title, description, featured_projects } = props;

    return (
        <div>
            <header className="flex flex-col items-center text-center gap-0">
                {section_title && <h2 className="uppercase text-[5rem] leading-none md:text-[8rem] tracking-tighter font-bold">{section_title}</h2>}
                {description && <p className="max-w-[680px] mt-10 md:mt-0 opacity-80 text-normal md:text-lg font-serif">{description}</p>}
            </header>
            {featured_projects && featured_projects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20 pt-14 md:pt-24">
                    {featured_projects?.map((project, i) => (
                        <DynamicProjectCard key={`project-${i}`} project={project} index={i} />
                    ))}       
                </div>
            )}
            <div className="w-fit mx-auto mt-20">
                <LinkButton link={link} color="navy" />
            </div>
        </div>
    )
}

export default SelectedWorks;