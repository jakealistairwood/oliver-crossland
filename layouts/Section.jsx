import React, { memo } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [] } = props;
    return (
        <section>
            <ComponentRenderer components={components} />
        </section>
    )
});

export default Section;

// section.componentName = "Section";