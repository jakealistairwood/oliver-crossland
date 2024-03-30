import React from "react";
import FooterWrapper from "./client/FooterWrapper";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/footer-logo.svg";
import { fetchGlobalOptions, fetchPages } from "@/sanity/sanity-api";
import { urlFor } from "@/utils/SanityImage";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";

const Footer = async () => {
    // const [footerData, setFooterData] = useState({});
    // const [pages, setPages] = useState([]);

    // const currentYear = new Date().getFullYear();

    // useEffect(() => {
    //     const fetchGlobalData = async () => {
    //         const data = await fetchGlobalOptions();
    //         const pageList = await fetchPages();
    //         setFooterData(data[0].footer);
    //         setPages(pageList);
    //         console.log(footerData);
    //     }
    //     fetchGlobalData();
    // }, []);

    const footer_data = await fetchGlobalOptions();
    const pages = await fetchPages();
    
    return (
        <footer className="bg-[#0D0F16] text-white">
            <FooterWrapper data={footer_data[0].footer} site_pages={pages} />
        </footer>
    )
}

export default Footer;