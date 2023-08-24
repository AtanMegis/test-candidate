import React, { useState } from 'react'

const Box = ({ title, amount, images }) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div
            className={`box ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            <div className="box-container">
                <img src={images} alt="group" />
                <div className="flex flex-col place-items-start text-white">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-grey">{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default Box
