"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/footer-logo.svg";
import { fetchGlobalOptions, fetchPages } from "@/sanity/sanity-api";
import { urlFor } from "@/utils/SanityImage";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";

const Footer = () => {
    const [footerData, setFooterData] = useState({});
    const [pages, setPages] = useState([]);

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const fetchGlobalData = async () => {
            const data = await fetchGlobalOptions();
            const pageList = await fetchPages();
            setFooterData(data[0].footer);
            setPages(pageList);
            console.log(footerData);
        }
        fetchGlobalData();
    }, []);
    
    return (
        <footer className="bg-[#0D0F16] text-white">
            <div className="container">
                <div className="flex justify-between w-full py-[120px]">
                    <h2 className="font-serif text-6xl max-w-[780px] font-light" dangerouslySetInnerHTML={{ __html: footerData?.cta?.heading }} />
                    <Link className="bg-white uppercase font-light text-[#0D0F16] px-8 py-5 rounded-full text-2xl flex h-fit items-center justify-center" href={footerData?.cta?.link?.url || ""}>{footerData?.cta?.link?.label}</Link>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-8 flex flex-col">
                        <div className="max-w-[137px] w-full relative">
                            <Image src={Logo} alt="" width={137} height={29} objectFit="cover" />
                        </div>
                        <div className="flex flex-col mt-[140px]">
                            {footerData.social_links && footerData.social_links.length > 0 && (
                                <div className="flex items-center gap-4">
                                    {footerData.social_links?.map((link, i) => (
                                        <Link href={link?.url || ""}>
                                            <Image
                                                src={urlFor(link?.icon).url()}
                                                width={24}
                                                height={24}
                                                alt=""
                                            />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <nav className="flex justify-between w-full">
                            <div className="flex flex-col gap-y-8">
                                <p className="">Site</p>
                                <ul className="flex flex-col gap-y-5">
                                    <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                                        <Link href="/">About</Link>
                                    </li>
                                    <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                                        <Link href="/">Portfolio</Link>
                                    </li>
                                    <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                                        <Link href="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-y-8">
                                <p>Contact</p>
                                <ul className="flex flex-col gap-y-5">
                                    <li className="text-white/75 font-light">
                                        <Link className="flex items-center gap-2" href={`mailto:${footerData.contact_links.email}`}>
                                            <EmailIcon />
                                            <span>{footerData.contact_links.email}</span>
                                        </Link>
                                    </li>
                                    <li className="text-white/75 font-light">
                                        <Link className="flex items-center gap-2" href={`tel:${footerData.contact_links.phone_number}`}>
                                            <PhoneIcon />
                                            <span>{footerData.contact_links.phone_number}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full pb-10 pt-20">
                    <small className="opacity-60 font-extralight">&copy; Oliver Crossland Videography {currentYear}</small>
                    <small className="opacity-60 font-extralight">
                        Site designed and developed by <Link className="underline underline-offset-4" href="https://www.linkedin.com/in/jake-wood-726141114/" target="_blank" rel="noreferrer">Jake Wood</Link>
                    </small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;