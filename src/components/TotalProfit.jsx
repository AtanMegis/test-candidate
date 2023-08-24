import React from 'react'
import chart from '../assets/chart.png'
import path from '../assets/path.png'
import Select from 'react-dropdown-select'

const options = [
    {
        value: 1,
        label: '2022',
    },
    {
        value: 2,
        label: '2021',
    },
]
const TotalProfit = () => {
    return (
        <>
            <div className="flex">
                <div className="w-[65%] p-2 text-white items-center ">
                    <div className="flex justify-between px-4 py-2 ">
                        <h2>Total Profit</h2>
                        <div className="flex gap-6">
                            <p className="list-item marker:text-orange">
                                <span className="pr-2">Earning</span>
                            </p>
                            <p className="list-item marker:text-green">
                                <span className="pr-2">Expense</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start ">
                        <img
                            src={chart}
                            alt={chart}
                            className="object-scale-down pt-10 self-center"
                        />
                    </div>
                </div>
                <div className="w-[35%] flex flex-col border-l-2 border-gray-700 items-center p-6 gap-6 justify-center">
                    <Select
                        options={options}
                        placeholder="2023"
                        style={{
                            fontSize: '14px',
                            borderRadius: '4px',
                            borderColor: '#0BB885',
                            color: '#0BB885',
                            cursor: 'pointer',
                            width: '80px',
                            alignItems: 'center',
                        }}
                    ></Select>
                    <h1 className="text-4xl text-white">$842.98</h1>
                    <p className="text-sm text-grey self-center text-center">
                        Latest Month Balance $426.20k
                    </p>
                    <img src={path} alt={path} />
                    <button className="bg-green text-white p-2 rounded-md">
                        View Report
                    </button>
                </div>
            </div>
        </>
    )
}

export default TotalProfit
