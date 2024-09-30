"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'

const Button = ({cb, text}) => {
    return (
        <button onClick={() => cb()} className='button'>
            {text}
            <ChevronRight className='w-4 h-4 mt-0.5'/>
        </button>
    )
}

export default Button