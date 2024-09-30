import React from 'react'

const Input = ({
    type,
    label,
    placeholder,
    name,
    value,
    setValue,
    required
}) => {

    if(type === "textarea") {
        return (
            <div className="flex flex-col">
                <label className='text-grey-dark font-normal leading-normal text-base mb-2.5' htmlFor={placeholder}>{label}</label>
                <textarea required={required} onChange={(e) => setValue(e.target.value)} value={value}  className='min-h-[150px] p-2.5 rounded bg-grey-light-01 focus:outline-none border text-accent focus:border-accent  resize-none border-solid border-transparent placeholder:text-gray' name={name} id={placeholder} type={type}  placeholder={placeholder}></textarea>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <label className='text-grey-dark font-normal leading-normal text-base mb-2.5' htmlFor={placeholder}>{label}</label>
            <input required={required} onChange={(e) => setValue(e.target.value)} value={value} className='h-[42px] p-2.5 rounded bg-grey-light-01 focus:outline-none border text-accent focus:border-accent border-solid border-transparent placeholder:text-gray content-center' name={name} id={placeholder} type={type}  placeholder={placeholder}/>
        </div>
    )
}

export default Input