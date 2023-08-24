import React from 'react'
import order from '../assets/order.png'
const OrderChart = () => {
    return (
        <div className="flex flex-col p-4 justify-center ">
            <h2 className="text-xl  text-white">Orders</h2>
            <p className="text-2xl  text-orange">189K</p>
            <img src={order} alt={order} className="object-scale-down pt-3" />
        </div>
    )
}

export default OrderChart
