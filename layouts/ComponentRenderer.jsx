'use client';

import dynamic from "next/dynamic";
import Masthead from "@/components/Masthead";
import HomeMasthead from "@/components/mastheads/HomeMasthead";
const TextContent = dynamic(() => import("@/components/TextContent"));
const ScalableImageOnScroll = dynamic(() => import("@/components/ScalableImageOnScroll"));
const ScrollableText = dynamic(() => import("@/components/ScrollableText"));
const TextImageMarquee = dynamic(() => import("@/components/TextImageMarquee"));
const SelectedWorks = dynamic(() => import("@/components/SelectedWorks"));
const FullWidthVideo = dynamic(() => import("@/components/FullWidthVideo"));
const ImageDivider = dynamic(() => import("@/components/ImageDivider"));
const LogoMarquee = dynamic(() => import("@/components/marquees/LogoMarquee"));

const ComponentRenderer = ({ components = [] }) => {
    const renderComponent = (layoutName, props) => {
        const Component = {
            masthead: Masthead,
            homeMasthead: HomeMasthead,
            textContent: TextContent,
            scalableImageOnScroll: ScalableImageOnScroll,
            scrollableText: ScrollableText,
            textImageMarquee: TextImageMarquee,
            selectedWorks: SelectedWorks,
            fullWidthVideo: FullWidthVideo,
            imageDivider: ImageDivider,
            logoMarquee: LogoMarquee,
        }[layoutName];

        return Component ? <Component key={`${props.key}`} {...props}  /> : null;
    }

    return (
        <>
            {components?.map((layout, index) => {
                const layoutName = layout.component;
                const key = layout?._key;
                return renderComponent(layoutName, { ...layout[layoutName], key });
            })}
        </>
    )
}

export default ComponentRenderer;