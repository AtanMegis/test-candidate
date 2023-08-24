import React from 'react'
import profit from '../assets/profit.png'

const Profit = () => {
    return (
        <div className="flex flex-col p-4 justify-center ">
            <h2 className="text-white text-xl">Profit</h2>
            <p className="text-[#0BB885] text-2xl">8,24K</p>
            <img src={profit} alt={profit} className="object-scale-down" />
        </div>
    )
}

export default Profit
