import React from 'react'
import "../styles/Spinner.css"

export const Spinner = () => {

    return (
        <>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </>
    )
}
