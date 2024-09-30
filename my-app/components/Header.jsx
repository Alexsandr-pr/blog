"use client";
import { navLinks } from "@/lib/consts/navLinks";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderNavLink from "./HeaderNavLink";


const Header = () => {
    const [state, setState] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if(state) {
            setState(false)
        }
    }, [pathname])
    return (
        <header className="w-full py-4 sm:py-6 md:py-8 z-[100] sticky top-0 border-b bg-white border-b-[#EAEAEE] border-solid">
            <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 gap-4">
                <Link href="/" className="text-[19px] relative z-50 text-primary font-normal logo">
                    InsightPost.
                </Link>
                <nav className={` hidden md:flex pt-24 top-0 w-full md:w-auto h-full md:py-0 md:h-auto z-40 bg-white`}>
                    <ul className="flex items-center flex-col md:flex-row gap-10">
                        {
                            navLinks.map((item, index) => {
                                return <HeaderNavLink key={`${item.route}-${index}-${item.label}`} {...item}/>
                            })
                        }
                        
                    </ul>
                </nav>
                <div className="flex items-center gap-4 md:hidden">
                    
                    <button onClick={() => setState(prev => !prev)} className="md:hidden  relative z-50 ">
                    {
                        state ?  <Image alt="menu" width={32} height={32} src={"/icons/menu-close.svg"}/> :  <Image alt="menu" width={32} height={32} src={"/icons/menu.svg"}/>
                    }
                    </button> 
                </div>
                {
                    state && <nav className={`fixed flex md:hidden pt-24 p-14 top-0 w-full h-full justify-end z-30 bg-white`}>
                    <ul className="flex items-end flex-col gap-10">
                        {
                            navLinks.map((item, index) => {
                                return <HeaderNavLink key={`${item.route}-${index}-${item.label}`} {...item}/>
                            })
                        }
                        
                    </ul>
                </nav>
                }
            </div>
        </header>
    )
}

export default Header