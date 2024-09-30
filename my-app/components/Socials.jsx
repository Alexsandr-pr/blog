import Link from "next/link"


const Socials = ({
    socials
}) => {
    return (
        <ul className='flex gap-7 items-center justify-center'>
            {
                socials.map(({imagePath, alt, link}) => {
                    return (
                        <li key={imagePath}>
                            <Link prefetch={false} href={link}>
                                <img src={imagePath} alt={alt} />
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Socials