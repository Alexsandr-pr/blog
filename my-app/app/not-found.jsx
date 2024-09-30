"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Error () {
    
    return (
        <main className='max-w-[702px] main  mx-auto px-4'>
            <div className="flex flex-col gap-5 text-center py-12 md:pb-16 md:pt-16 lg:pt-24">
                <h1 className="font-semibold text-[144px] ">404</h1>
                <p className="text-[26px] font-semibold leading-8">Page not found!</p>
                <p className="text-base hidden md:block font-normal text-center">This page not found (deleted or never exists).<br/>Try a phrase in search box or back to home and start again.</p>
                <div className="flex justify-center">
                    <Link className="button" href="/">
                        HOMEPAGE
                        <ChevronRight className='w-4 h-4 mt-0.5'/>
                    </Link>
                </div>
            </div>
        </main>
    )

}
