'use client';

import dynamic from "next/dynamic";
import Masthead from "@/components/Masthead";
const TextContent = dynamic(() => import("@/components/TextContent"));
const ScalableImageOnScroll = dynamic(() => import("@/components/ScalableImageOnScroll"));
const ScrollableText = dynamic(() => import("@/components/ScrollableText"));
const TextImageMarquee = dynamic(() => import("@/components/TextImageMarquee"));
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"));
const SelectedWorks = dynamic(() => import("@/components/SelectedWorks"));

const ComponentRenderer = ({ components = [] }) => {
    const renderComponent = (layoutName, props) => {
        const Component = {
            masthead: Masthead,
            textContent: TextContent,
            scalableImageOnScroll: ScalableImageOnScroll,
            scrollableText: ScrollableText,
            textImageMarquee: TextImageMarquee,
            videoPlayer: VideoPlayer,
            selectedWorks: SelectedWorks
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