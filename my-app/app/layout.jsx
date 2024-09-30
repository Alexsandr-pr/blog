import Header from "@/components/Header"
import localFont from 'next/font/local'
import Footer from "@/components/Footer"
import "../styles/styles.css"



const sourceSerifPro = localFont({
    variable: '--sourceSerifPro',
    src: [
        {
            path: './fonts/SourceSerifPro-Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/SourceSerifPro-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/SourceSerifPro-ExtraLight.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/SourceSerifPro-Light.otf',
            weight: '300',
            style: 'normal',
        },
        { 
            path: './fonts/SourceSerifPro-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: "./fonts/SourceSerifPro-Semibold.otf",
            weight: '600',
            style: 'normal',
        }
    ],
})

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={`${sourceSerifPro.variable} font-serifPro`}>
                <div className="wrapper">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </body>
        </html>
    )
}
