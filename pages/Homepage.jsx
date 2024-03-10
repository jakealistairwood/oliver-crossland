"use client";

import LayoutRenderer from "@/layouts/LayoutRenderer";

const Homepage = (props) => {
    const { data, portfolio } = props;

    return (
        <div>
            <LayoutRenderer page={data} portfolio={portfolio} />
        </div>
    )
}

export default Homepage;