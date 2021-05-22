import React from 'react'
import BasketBall from "../../Assets/Basketball.gif"

function Preloader() {
    return (
       <>
        <h1 className="flex items-center justify-start">
            <img className="mr-2" src={BasketBall} alt="loading" />
            <span className="font-black">Loading...</span>
         </h1>
       </>
    )
}

export default Preloader
