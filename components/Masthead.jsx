"use client"

import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";

const Masthead = (props) => {
    console.log(props);
    const { title, image } = props;
    console.log(image);
    return (
        <div className="relative min-h-screen w-full">
            {image && <Image src={urlFor(image).format("webp").url()} priority objectFit="cover" fill alt={image?.alt || ""} />}
            <div className="container relative z-[2]">
                {title && <h1 className="text-center max-w-[946px] mx-auto w-full">{title}</h1>}
            </div>
        </div>
    )
}

export default Masthead;