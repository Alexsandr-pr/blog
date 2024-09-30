
import TeamUser from "./_components/TeamUser"

const data = [
    {
        name:"Aida Cave",
        position:"Position",
        description:"Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. ",
        imagePath:"/image/dmitry-vechorko-yXhJ_eQK0mE-unsplash.png"
    },
    {
        name:"Nick Carleton",
        position:"Position",
        description:"Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. ",
        imagePath:"/image/christian-buehner-DItYlc26zVI-unsplash-2.png"
    }
]

const Page = () => {
    return (
        <main className='max-w-[702px] main mx-auto px-4'>
            <div className="flex flex-col gap-10 py-12 md:pt-24 md:pb-16">
                <h1 className="title !text-left ">About</h1>

                <div className="">
                    <h2 className="title-2 mb-6">What, when and how?</h2>
                    <p className="text">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque.
                    Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut. </p>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="title-2">Team members</h2>
                   <div className="flex flex-col gap-6 md:gap-10">
                    {
                            data.map(item => {
                                return <TeamUser key={item.name} {...item}/>
                            })
                        }
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Page