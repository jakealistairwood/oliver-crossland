"use client";

import LayoutRenderer from "@/layouts/LayoutRenderer";

const Homepage = (props) => {
    const { data } = props;

    return (
        <div>
            <LayoutRenderer page={data} />
            <h1>This is the homepage</h1>
        </div>
    )
}

export default Homepage;