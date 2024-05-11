import React from "react";
import { fetchGlobalOptions, fetchPages } from "@/sanity/sanity-api";
import NavbarWrapper from "./client/NavbarWrapper";
import { useWindowSize } from "@/hooks/useWindowSize";

const Navbar = async () => {

    const navbar_data = await fetchGlobalOptions();
    const pages = await fetchPages();
    
    return (
      <>
        <NavbarWrapper data={{ navbar_data, pages }} />
      </>
    )
}

export default Navbar;