import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import UpRightArrow from "../../assets/images/up-right-arrow.svg";

const Navbar = () => {
    return (
        <header className="fixed flex justify-center items-center w-full z-[99] py-4">
            <div className="container">
                <nav className="flex items-center w-full justify-between">
                    <div className="max-w-[250px] w-full relative">
                        <Image src={Logo} alt="oli crossland videography" width={250} height={56} objectFit="cover" priority />
                    </div>
                    <div className="flex items-center gap-5">
                        <Link className="flex items-center text-white" href="/contact">
                            <span className="h-[43px] flex items-center justify-center bg-white/20 backdrop-blur-md px-4 rounded-[10px]">Let's Work Together</span>
                            <div className="flex items-center justify-center h-[43px] w-[43px] bg-white/20 backdrop-blur-md rounded-[10px]">
                                <Image src={UpRightArrow} width={16} height={16} alt="" />
                            </div>
                        </Link>
                        <button className="flex items-center gap-[9px]" type="button">
                            <div className="flex flex-col gap-[5px]">
                                <div className="w-[11px] h-[1px] bg-white" />
                                <div className="w-[11px] h-[1px] bg-white" />
                            </div>
                            <span className="text-white">Menu</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;