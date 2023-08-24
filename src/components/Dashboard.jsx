import React from 'react'
import user from '../assets/user.png'
import wallet from '../assets/wallet.png'
import group from '../assets/Group 402.png'
import sales from '../assets/sales.png'
import cost from '../assets/cost.png'
import calendar from '../assets/calendar.png'
import EarningChart from './EarningChart.jsx'
import OrderChart from './OrderChart.jsx'
import Profit from './Profit.jsx'
import Activity from './Activity.jsx'
import TotalProfit from './TotalProfit.jsx'
import Box from './Box.jsx'

const Dashboard = () => {
    return (
        <div className="h-full w-screen flex-1 bg-mainBg ">
            <div className="flex items-center justify-end border-b-2 px-6">
                <img src={user} alt="user" className="cursor-pointer" />
            </div>
            <div className="flex flex-col px-6">
                <h1 className="pt-6 text-4xl font-bold text-white">
                    Marketing Dashboard
                </h1>
                <ul className="flex py-2">
                    <li className="text-grey">Home</li>
                    <span className="px-2 text-grey">/ </span>
                    <li className="text-green">Dashboard</li>
                </ul>
            </div>
            <div className="w-full h-[67%] px-6 pb-10 ">
                <div className="flex justify-between gap-6 h-36">
                    <div className="flex w-1/5 place-content-center rounded-md bg-green p-4 ">
                        <div className="box-container">
                            <img src={cost} alt="cost" />
                            <div className="flex flex-col place-items-start text-white">
                                <h3 className="font-bold">Total Cost</h3>
                                <p className="text-white">$31.868</p>
                            </div>
                        </div>
                    </div>
                    <Box images={sales} title="Total Sales" amount="$66.053" />
                    <Box
                        images={calendar}
                        title="This Week"
                        amount="$35.000,00"
                    />
                    <Box images={group} title="Revenue" amount="$63,00K" />
                    <Box images={wallet} title="Last Payment" amount="$1250" />
                </div>
                <div className="flex w-full h-full pt-6 gap-4">
                    <div className="w-[60%] flex flex-col gap-2">
                        <div className="h-[35%] flex w-full gap-6">
                            <div className="w-[45%] flex-grow bg-boxBg rounded-md">
                                <EarningChart />
                            </div>
                            <div className="w-[30%] flex-grow bg-boxBg rounded-md ">
                                <OrderChart />
                            </div>
                            <div className="w-[25%] flex-grow bg-boxBg rounded-md">
                                <Profit />
                            </div>
                        </div>
                        <div className="h-[65%] w-full bg-boxBg rounded-md mt-2">
                            <TotalProfit />
                        </div>
                    </div>
                    <div className="w-[39.5%] flex-grow bg-boxBg rounded-md ml-2">
                        <Activity />
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="flex text-md text-grey gap-4">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
