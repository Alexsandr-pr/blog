
const Tags = ({
    tags
}) => {
    return (
        <ul className='flex flex-wrap gap-6 items-center '>
            {
                tags.map(({title}) => {
                    return (
                        <li key={title}>
                            <p className="text hover:text-accent duration-300 transition-all cursor-pointer">#{title}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Tags