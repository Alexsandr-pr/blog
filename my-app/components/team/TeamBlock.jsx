import ParentBlock from "../ParentBlock"
import TeamUser from "./TeamUser"


const data = [
    {
        name:"Aida Cave",
        position:"Position",
        imagePath:"/image/dmitry-vechorko-yXhJ_eQK0mE-unsplash.png"
    },
    {
        name:"Nick Carleton",
        position:"Position",
        imagePath:"/image/christian-buehner-DItYlc26zVI-unsplash-2.png"
    }
]


const TeamBlock = () => {
    return (
        <ParentBlock title={"Team"}>
            <div className="flex flex-col items-center gap-6 sm:grid sm:gap-12  lg:gap-16 grid-cols-1 sm:grid-cols-2">
                {
                    data.map(item => {
                        return <TeamUser {...item} key={item.name}/>
                    })
                }
            </div>
        </ParentBlock>
    )
}

export default TeamBlock