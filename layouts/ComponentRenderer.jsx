"use client";

import dynamic from "next/dynamic";
import Masthead from "@/components/Masthead"
const ScalableImageOnScroll = dynamic(() => import("@/components/ScalableImageOnScroll"));
const ScrollableText = dynamic(() => import("@/components/ScrollableText"));

const ComponentRenderer = ({ components = [] }) => {
    const renderComponent = (layoutName, props) => {
        const Component = {
            masthead: Masthead,
            scalableImageOnScroll: ScalableImageOnScroll,
            scrollableText: ScrollableText,
        }[layoutName];

        return Component ? <Component key={`${props.key}`} {...props}  /> : null;
    }

    return (
        <>
            {components?.map((layout, index) => {
                const layoutName = layout.component;
                console.log(layoutName);
                const key = layout?._key;
                return renderComponent(layoutName, { ...layout[layoutName], key });
            })}
        </>
    )
}

export default ComponentRenderer;