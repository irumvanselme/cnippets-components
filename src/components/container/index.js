import React from 'react'

export default function Container ({ bgColor, children }){
    return (
        <div style={{backgroundColor: bgColor}}>
            {children}
        </div>
    )
}