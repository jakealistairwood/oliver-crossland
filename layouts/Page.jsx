"use client";

import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";

const Page = (props) => {
    const { data, portfolio } = props;

    return (
        <div>
            <LayoutRenderer page={data} portfolio={portfolio} />
        </div>
    )
}

export default Page;