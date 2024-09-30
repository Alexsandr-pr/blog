"use client"
import Button from "@/components/Button"
import Input from "@/components/Input"
import ParentBlock from "@/components/ParentBlock"
import { useState } from "react"


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = () => {
        console.log("submit")
    }
    return (
        <ParentBlock title={"Contact"}>
            <p className="text-lg font-normal text-primary -mt-3  mb-11">Love to hear your thoughts, fears & feelings...</p>
            <form action="#" className="flex flex-col gap-10 h-auto">
                <div className="flex flex-col gap-7 ">
                    <Input required value={name} setValue={setName} placeholder="Enter your name" type="text" name="name" label="Name*" />
                    <Input required value={email} setValue={setEmail}  placeholder="Enter your email" type="email" name="email" label="Email*" />
                    <Input required value={message} setValue={setMessage}  placeholder="Enter your message" type="textarea" name="message" label="Message" />
                </div>
                <Button text="Submit" cb={onSubmit}/>
            </form>
        </ParentBlock>
    )
}

export default Contact