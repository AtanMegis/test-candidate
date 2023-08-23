import React from 'react'
import user from '../assets/user.png'
import wallet from '../assets/wallet.png'
import group from '../assets/Group 402.png'
import sales from '../assets/sales.png'
import cost from '../assets/cost.png'
import calendar from '../assets/calendar.png'
import EarningChart from './EarningChart.jsx'
import OrderChart from './OrderChart.jsx'

const Dashboard = () => {
    return (
        <div className="h-screen w-screen flex-1 bg-[#151A2E] ">
            <div className="flex items-center justify-end border-b-2 px-6">
                <img src={user} alt="user" className="cursor-pointer" />
            </div>
            <div className="flex flex-col px-6">
                <h1 className="pt-6 text-4xl font-bold text-white">
                    Marketing Dashboard
                </h1>
                <ul className="flex py-2">
                    <li className="text-[#6C747D]">Home</li>
                    <span className="px-2 text-[#6C747D]">/ </span>
                    <li className="text-[#0BB885]">Dashboard</li>
                </ul>
            </div>
            <div className="w-full h-[67%] px-6 pb-10">
                <div className="flex justify-between gap-6 h-36">
                    <div className="flex w-1/5 place-content-center rounded-md bg-[#0BB885] p-4 ">
                        <div className="flex place-items-center gap-5">
                            <img src={cost} alt="cost" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">Total Cost</h3>
                                <p>$31.868</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/5 place-content-center rounded-md bg-[#1C243F] p-4 ">
                        <div className="flex place-items-center gap-5">
                            <img src={sales} alt="sales" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">Total Sales</h3>
                                <p>$66.053</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/5 place-content-center rounded-md bg-[#1C243F] p-4">
                        <div className="flex place-items-center gap-4">
                            <img src={calendar} alt="calendar" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">This Week</h3>
                                <p>$35.000,00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/5 place-content-center rounded-md bg-[#1C243F] p-4">
                        <div className="flex place-items-center gap-4">
                            <img src={group} alt="group" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">Revenue</h3>
                                <p>$63,00k</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/5 place-content-center rounded-md bg-[#1C243F]">
                        <div className="flex place-items-center gap-4">
                            <img src={wallet} alt="wallet" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">$1250</h3>
                                <p>Last Payment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-full pt-6 gap-4">
                    <div className="w-[60%] flex flex-col gap-2">
                        <div className="h-[35%] flex w-full gap-6">
                            <div className="w-[40%] bg-[#1C243F] rounded-md">
                                <EarningChart />
                            </div>
                            <div className="w-[35%] bg-[#1C243F] rounded-md">
                                <OrderChart />
                            </div>
                            <div className="w-[25%] bg-[#1C243F] rounded-md">
                                7
                            </div>
                        </div>
                        <div className="h-[65%] w-full bg-[#1C243F] rounded-md mt-2"></div>
                    </div>
                    <div className="w-[39.5%] bg-[#1C243F] rounded-md ml-2"></div>
                </div>
                <div className="mt-4">
                    <ul className="flex text-md text-[#8A92A6] gap-4">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
