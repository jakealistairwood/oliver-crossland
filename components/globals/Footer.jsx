import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo-white.svg";

const Footer = () => {
    return (
        <footer className="bg-[#0D0F16] text-white pt-16 pb-20">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-7">
                        <div className="max-w-[137px] w-full relative">
                            <Image src={Logo} alt="" width={137} height={29} objectFit="cover" />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <nav className="flex justify-between w-full">
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
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <strong>Socials</strong>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;