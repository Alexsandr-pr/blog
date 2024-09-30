import Image from 'next/image'
import React from 'react'
import Audio from './audio/Audio'

const TopBlock = ({type}) => {
    return (
        <div className='mx-auto text-center py-12 pb-16 md:py-24 flex items-center flex-col gap-10'>
            <Image width={180} height={180} alt="image" src={"/image/Img.png"}/>
            <div className="flex flex-col w-full gap-6">
                <h1 className='title'>How to rapidly test any experience!</h1>
                <Audio src="/audio/battle-of-the-dragons-8037.mp3" type={type}/>
            </div>
            <div className="flex flex-col gap-4">
                <span className='text-xs font-semibold text-primary uppercase'>Listen on</span>
                <ul className='flex gap-7 items-center'>
                    <li>
                        <img src="/icons/spotify.svg" alt="spotify" />
                    </li>
                    <li>
                        <img src="/icons/soundcloud.svg" alt="soundcloud" />
                    </li>
                    <li>
                        <img src="/icons/apple.svg" alt="apple" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBlock