import React from 'react'
import { useState } from 'react'
import { data } from '../data.js'
import Select from 'react-dropdown-select'

const EarningChart = () => {
    const [value, setValue] = useState([data[0]])

    return (
        <>
            <div className="flex p-4 text-white justify-between">
                <h3 className="text-white">Earnings</h3>
                <Select
                    name="select"
                    options={data}
                    valueField="time"
                    labelField="time"
                    color="#1C243F"
                    onChange={(value) => setValue(value)}
                    placeholder="This Weak"
                    style={{
                        fontSize: '14px',
                        borderColor: 'transparent',
                        color: '#6C747D',
                        cursor: 'pointer',
                    }}
                />
            </div>
            <div className="flex place-content-center gap-4">
                {value.map((data) => (
                    <div key={data.id} className="flex gap-4">
                        <img
                            src={data.image}
                            alt={data.id}
                            className="h-[110px]"
                        />
                        <div className="flex flex-col place-content-center text-white px-6 gap-4 ">
                            <p className="list-item marker:text-[#0BB885] text-sm ">
                                Total Sales
                                <span className="block text-[#8A92A6] justify-center ">
                                    {data.sales}
                                </span>
                            </p>
                            <p className="list-item marker:text-[#FF814A] text-sm ">
                                Total Order
                                <span className="block text-green justify-center">
                                    {data.order}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EarningChart
