import React from "react";
import dynamic from "next/dynamic";
import LinkButton from "../elements/LinkButton";
const AnimatedText = dynamic(() => import("../AnimatedText"));
import { urlFor } from "@/utils/SanityImage";
import Image from "next/image";

const AboutMasthead = ({ heading, link, image }) => {

    return (
        <header className="md:min-h-[110vh] w-full pt-20">
            <div className="container">
                <div className="flex flex-col items-center text-center mx-auto pb-20 px-4">
                    <div
                        className="text-transparent leading-[0.9] font-bold text-[8rem] md:text-[16rem] font-outline-2 uppercase masthead-marquee-item"
                        dangerouslySetInnerHTML={{__html: "About Me"}}
                    />
                    <h1 className="font-light font-serif text-white text-[1.3rem] md:text-2xl leading-tight max-w-[728px] mx-auto min-h-[70px] mt-10">
                        <AnimatedText text={heading} />
                    </h1>
                    {link && link.url.length > 0 && (
                        <LinkButton link={link} />
                    )}
                    {image?.asset && (
                        <div className="hidden md:block w-full aspect-[16/9] md:rounded-2xl mt-20 relative">
                            <Image className="md:rounded-2xl" objectFit="cover" src={urlFor(image).format("webp").url()} alt="Portrait of Oli Crossland" fill />
                        </div>
                    )}
                </div>
            </div>
            {image?.asset && (
                <div className="block md:hidden w-full aspect-[16/9] md:rounded-2xl mt-0 relative">
                    <Image className="md:rounded-2xl" objectFit="cover" src={urlFor(image).format("webp").url()} alt="Portrait of Oli Crossland" fill />
                </div>
            )}
        </header>
      )
}

export default AboutMasthead