import React from 'react'
import order from '../assets/order.png'
const OrderChart = () => {
    return (
        <div className="flex flex-col  place-content-start justify-center pt-6">
            <h2 className="text-2xl  text-white">Orders</h2>
            <p className="text-2xl  text-orange-400">189k</p>
            <img src={order} alt={order} className="object-scale-down" />
        </div>
    )
}

export default OrderChart
