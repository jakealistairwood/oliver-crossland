'use client';

import dynamic from "next/dynamic";
import Masthead from "@/components/Masthead";
import HomeMasthead from "@/components/mastheads/HomeMasthead";
import AboutMasthead from "@/components/mastheads/AboutMasthead";
import PortfolioList from "@/components/PortfolioList";
import portfolio from "@/sanity/schemas/portfolio";
const TextContent = dynamic(() => import("@/components/TextContent"));
const ScalableImageOnScroll = dynamic(() => import("@/components/ScalableImageOnScroll"));
const ScrollableText = dynamic(() => import("@/components/ScrollableText"));
const TextImageMarquee = dynamic(() => import("@/components/TextImageMarquee"));
const SelectedWorks = dynamic(() => import("@/components/SelectedWorks"));
const FullWidthVideo = dynamic(() => import("@/components/FullWidthVideo"));
const ImageDivider = dynamic(() => import("@/components/ImageDivider"));
const LogoMarquee = dynamic(() => import("@/components/marquees/LogoMarquee"));
const ThreeColGridItems = dynamic(() => import("@/components/ThreeColGridItems"));
const Experiences = dynamic(() => import("@/components/accordions/Experiences"));
const AboutContent = dynamic(() => import("@/components/AboutContent"));

const ComponentRenderer = ({ components = [], portfolio, backgroundColor }) => {
    const renderComponent = (layoutName, props) => {
        const Component = {
            masthead: Masthead,
            homeMasthead: HomeMasthead,
            aboutMasthead: AboutMasthead,
            textContent: TextContent,
            scalableImageOnScroll: ScalableImageOnScroll,
            scrollableText: ScrollableText,
            textImageMarquee: TextImageMarquee,
            portfolioList: PortfolioList,
            textContent: TextContent,
            scalableImageOnScroll: ScalableImageOnScroll,
            scrollableText: ScrollableText,
            textImageMarquee: TextImageMarquee,
            selectedWorks: SelectedWorks,
            fullWidthVideo: FullWidthVideo,
            imageDivider: ImageDivider,
            logoMarquee: LogoMarquee,
            threeColGridItems: ThreeColGridItems,
            experiences: Experiences,
            aboutContent: AboutContent,
        }[layoutName];

        return Component ? <Component key={`${props.key}`} {...props} portfolio={portfolio} backgroundColor={backgroundColor}  /> : null;
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