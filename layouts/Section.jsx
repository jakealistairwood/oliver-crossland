import React, { memo, useRef, useState, useEffect } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [], remove_container, make_sticky, add_rounded_top_border, background_color, padding_top, padding_bottom, portfolio } = props;
    console.log(props);

    const containerRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(null);

    let containerClasses = [];

    const paddingBottomSizes = {
        none: "pb-none",
        "extra-small": "pb-xs",
        small: "pb-sm",
        medium: "pb-md",
        large: "pb-lg",
    }

    const paddingTopSizes = {
        none: "pt-none",
        "extra-small": "pt-xs",
        small: "pt-sm",
        medium: "pt-md",
        large: "pt-lg",
    }

    if (make_sticky) containerClasses.push("sticky top-0");
    if (add_rounded_top_border) containerClasses.push("rounded-section");
    if (components[0].component === "homeMasthead") containerClasses.push("z-[2]");

    const backgroundColors = {
        offWhite: "bg-offWhite",
        white: "bg-white",
        black: "bg-black",
        navy: "bg-navy",
        blueGrey: "bg-blueGrey",
    }


    return (
        <section ref={containerRef} className={`relative ${backgroundColors[background_color] || "bg-white"} ${padding_bottom ? paddingBottomSizes[padding_bottom] : ""} ${padding_top ? paddingTopSizes[padding_top] : ""} ${containerClasses.join(" ")}`}>
            <div className={remove_container ? "" : "container"}>
                <ComponentRenderer components={components} backgroundColor={background_color} portfolio={portfolio} />
            </div>
        </section>
    )
});

export default Section;

// section.componentName = "Section";