"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const HeaderNavLink = ({
    label,
    route,
    imagePath,
    children,
    prefetch
}) => {
    const [state, setState] = useState(false);

    const linkStyle = `text-sm flex items-center gap-1.5 md:text-xs transition hover:text-accent text-primary font-semibold`;

    if(!children) {
        return (
            <Link prefetch={prefetch} className={`${linkStyle} uppercase`} href={route}>
                {imagePath && <Image width="14" height="14" alt="image" src={imagePath}/>}
                {label}
            </Link>
        )
    }

    return (
        <li className='relative'>
            <button onClick={() => setState(prev => !prev)} className={`${linkStyle} uppercase relative`} >
                {label}
                <Image width="10" height="8" alt="image" src="/icons/chevron.svg"/>
            </button>
            {
                state && <ul className="flex md:border-solid w-full md:w-44 flex-col md:absolute md:border md:border-[#EAEAEE] md:bg-white">
                            {
                                children && children.map((item, index) => {
                                    return (
                                        <li className='w-full' key={`${item.route}-${index}`}>
                                            <Link className={`${linkStyle} text-[#979797]  md:text-primary py-2 w-full px-4 hover:bg-[#F4F4F4]`} href={item.route}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
            }
        </li>
    )
}

export default HeaderNavLink