import React, { memo, useRef, useState, useEffect } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [], remove_container } = props;

    const containerRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state based on whether the section is intersecting the viewport
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0 // Trigger when section enters viewport
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section ref={containerRef} className="bg-white">
            <div className={remove_container ? "" : "container"}>
                <ComponentRenderer components={components} />
            </div>
        </section>
    )
});

export default Section;

// section.componentName = "Section";