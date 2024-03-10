import Image from "next/image";
import { urlFor } from "@/utils/SanityImage";
import Marquee from "react-fast-marquee";

const TextImageMarquee = (props) => {
    const { marquee_items } = props;

    const itemsToDisplay = [...marquee_items, ...marquee_items, ...marquee_items, ...marquee_items];

    return (itemsToDisplay && itemsToDisplay.length > 0) && (
        <div className="bg-[#D2FF50] py-5">
            <Marquee loop={0}>
                {itemsToDisplay?.map((item, i) => (
                    <div className="flex justify-items-center gap-10" key={`marquee-item-${i}`}>
                        <span className="uppercase font-bold pl-10 text-4xl">{item?.text}</span>
                        <Image
                            src={urlFor(item?.image).format("webp").url()}
                            alt=""
                            width={48}
                            height={24}
                            loading="eager"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default TextImageMarquee;