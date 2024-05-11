import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import {urlFor} from "@/utils/SanityImage";

const LogoMarquee = (props) => {
    const { heading, logos } = props;

    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="bg-paleSkyBlue max-w-[1180px] mx-auto rounded-[20px] flex flex-col items-center text-center p-10 gap-10 mt-16 md:mt-[90px] overflow-hidden">
            {heading && heading.length > 0 && <p dangerouslySetInnerHTML={{ __html: heading }} />}
            {logos && logos.length > 0 && (
                <Marquee pauseOnHover direction="right" speed={10} loop={0} gradient gradientColor="#F0F9FD">
                    {extendedLogos?.map((logo, i) => (
                        logo?.link ? (
                            <Link 
                                className="relative h-full w-auto flex items-center justify-center pr-20" 
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Redirects to company website"
                                href={logo?.link || ""}
                            >
                                <Image 
                                    src={urlFor(logo?.image).url()}
                                    className="!w-auto !h-full object-contain"
                                    width={0}
                                    height={0}
                                    loading="eager"
                                    alt=""
                                />
                            </Link>
                        ) : (
                            <div className="relative">
                                <Image
                                    src={urlFor(logo?.image)}
                                    alt=""
                                    className="!w-auto !h-full"
                                    objectFit="cover"
                                    width={0}
                                    height={0}
                                    loading="eager"
                                />
                            </div>
                        )
                    ))}
                </Marquee>
            )}
        </div>
    )
}

export default LogoMarquee;