import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AudioBlock from './AudioBlock'

const Audio = ({
    type,
    src
}) => {


    if(type === "epizod") {
        return (
            <AudioBlock src={src}/>
        )
    }
    return (
        <div className="flex items-center justify-center">
            <Link href="/epizod" className='py-2 flex items-center gap-2 px-[14px] rounded-[4px] bg-[#F5F5F7] text-accent text-xs font-normal'>
                <Image width={11} height={13} alt='epizod' src={"/icons/epizod.svg"}/>
                Episode page
            </Link>
        </div>
    )
}

export default Audio