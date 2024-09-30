import React from 'react'

const ParentBlock = ({children, title, clazz}) => {
    return (
        <div className={clazz ?? clazz}>
            <h2 className="title mb-6 !text-left">{title}</h2>
            {children}
        </div>
    
    )
}

export default ParentBlock