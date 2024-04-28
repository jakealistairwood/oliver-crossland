import React from "react";
import dynamic from "next/dynamic";
import LinkButton from "../elements/LinkButton";
const AnimatedText = dynamic(() => import("../AnimatedText"));
import { urlFor } from "@/utils/SanityImage";
import Image from "next/image";

const AboutMasthead = ({ heading, link, image }) => {

    return (
        <header className="md:min-h-[110vh] w-full pb-20 md:pb-0">
            <div className="container">
                <div className="flex flex-col items-center text-center mx-auto pb-20">
                    <div
                        className="text-transparent font-bold text-[8rem] md:text-[16rem] font-outline-2 uppercase masthead-marquee-item pr-8"
                        dangerouslySetInnerHTML={{__html: "About Me"}}
                    />
                    <h1 className="font-light font-serif text-white text-[1.3rem] md:text-2xl leading-tight max-w-[728px] mx-auto min-h-[70px]">
                        <AnimatedText text={heading} />
                    </h1>
                    {link && link.url.length > 0 && (
                        <LinkButton link={link} />
                    )}
                </div>
            </div>
            {image?.asset && (
                <div className="w-full aspect-[16/9] relative">
                    <Image objectFit="cover" src={urlFor(image).format("webp").url()} alt="Portrait of Oli Crossland" fill />
                </div>
            )}
        </header>
      )
}

export default AboutMasthead