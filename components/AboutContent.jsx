import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/utils/SanityImage";

const AboutContent = ({ subheading, heading, content, gallery }) => {
    const { images } = gallery;

    return (
        <section className="">
            <div className="container">
                <div className="grid grid-cols-12 py-[90px]">
                    <div className="col-span-3">
                        {subheading && subheading.length > 0 && <div className="bg-ivory text-slateGrey text-[0.8rem] md:text-lg w-fit px-3 py-[6px] mx-auto rounded-full flex items-center uppercase" dangerouslySetInnerHTML={{ __html: subheading }} />}
                    </div>
                    <div className="col-span-8">
                        <article className="flex flex-col">
                            {heading && heading.length > 0 && <h2 className="font-serif pb-16 mb-16 border-b border-[#E5E5E5] text-[2.625rem] leading-[1.2] tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: heading }} />}
                            {content && content.length > 0 && (
                                <div className="flex flex-col prose text-2xl">
                                    <PortableText value={content} />
                                </div>
                            )}
                            {images && images.length > 0 && (
                                <div className="flex items-center gap-6 mt-20">
                                    {images?.map((image, i) => (
                                        <div className="aspect-[16/9] grow relative">
                                            <Image src={urlFor(image).format("webp").url()} fill objectFit="cover" alt="" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>
                    </div>
                    <div className="col-span-1" />
                </div>
            </div>
        </section>
    )
}

export default AboutContent;