import Socials from './Socials'

const Share = ({socials}) => {
    return (
        <div className='py-10 border-b border-solid border-grey-light border-t  flex items-center gap-6'>
             <p className='text-base text-primary '>Share:</p>
             <Socials socials={socials}/>
        </div>
    )
}

export default Share