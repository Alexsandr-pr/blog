import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials"

const data = [
    {
        imagePath:"/icons/facebook.svg",
        alt:"facebook",
        link:"/"
    },
    {
        imagePath:"/icons/github-color.svg",
        alt:"github",
        link:"/"
    },
    {
        imagePath:"/icons/twitter-color.svg",
        alt:"twitter",
        link:"/"
    },
]

const Footer = () => {
    const link = "text-sm font-semibold text-grey-dark leading-7 transition hover:cursor-pointer hover:text-accent"
    return (
        <footer className="pt-10  md:pt-16 pb-10 w-full px-4 md:max-w-[702px] mx-auto md:px-4 border-t border-t-[#EAEAEE] border-solid">
            <div className="mb-12 md:mb-24 gap-10 flex flex-col sm:flex-row justify-between">
                <nav>
                    <ul className="flex flex-col gap-2">
                        {/* <li>
                            <Link href="/epizodes" className={link}>
                                Episodes
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/blog"  className={link}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"  className={link}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/donate"  className={link}>
                                Donate
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="">
                    <p className="text-base mb-2 uppercase tracking-[2.56px] font-semibold text-primary">Newsletter</p>
                    <p className="text-xs mb-[14px] capitalize font-normal text-grey-dark">Sign up now;  get closer to our action.</p>
                    <div className="relative ">
                        <input className="input w-full sm:w-[315px]" type="email" placeholder="Email  adress..." />
                        <button className="w-9 h-9 bg-accent rounded-md flex items-center  right-[3px] top-1/2 -translate-y-1/2 absolute justify-center">
                            <Image alt="arrow" width={10} height={8} src={"/icons/arrow-3.svg"}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <Link href={"/privacy-policy"} className="text-sm capitalize text-primary transition hover:text-accent">  
                    Privacy policy 
                </Link>
                <Socials socials={data} />
            </div>
            
        </footer>
    )
}

export default Footer