import { ChevronRight } from "lucide-react"
import Link from "next/link"


const Page = () => {
    return (
        <main className='max-w-[702px] main mx-auto px-4'>
            <div className="flex flex-col gap-10 py-12 md:pt-24 md:pb-16">
                <h1 className="title !text-left">Support InsightPost.</h1>
                <p className="text">Help us continue to break down silos and spread knowledge through CastPress.
                By being funded, with your valuable donations, we can continue to bring you podcast content that is fresh, relevant and helps you grow.</p>
                <Link className="button" href="/">
                    Donate Now
                    <ChevronRight className='w-4 h-4 mt-0.5'/>
                </Link>
            </div>
        </main>
    )
}

export default Page