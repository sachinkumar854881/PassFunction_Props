import React from 'react'

const Child=(props)=>{
    const {message}=props
    return(
        <div>
            Child component
            <div>
                <strong>Child Sum</strong>
            </div>
            <div>
                sum is:{message(5,6)}
            </div>
        </div>
    )
}
export default Child;