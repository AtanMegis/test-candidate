import React from 'react'
import logo from '../assets/Logo.png'
import home from '../assets/home.png'
import reports from '../assets/reports.png'
import notification from '../assets/notifications.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

const Sidebar = () => {
    return (
        <div className="h-full min-w-[15%] bg-[#171E37]">
            <div className="block p-4">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-[#6C747D] py-20 px-6 ">
                <ul className="flex flex-col gap-6 ">
                    <li className="bg-[#1F2849] p-2 rounded-md">
                        <img src={home} alt="home" />
                        Home
                    </li>
                    <li className="p-2 rounded-md">
                        <img src={reports} alt="reports" /> Reports
                    </li>
                    <li className="items-center p-2 rounded-md">
                        <img src={notification} alt="notification" />{' '}
                        Notifications
                        <div className="flex items-center justify-center w-4 h-4 bg-[#98FFE0] rounded-sm font-medium text-xs ml-8 ">
                            <span>1</span> {/* notification pop up */}
                        </div>
                    </li>
                    <li className="p-2 rounded-md">
                        <img src={settings} alt="settings" /> Settings
                    </li>
                    <li className="p-2 rounded-md">
                        <img src={logout} alt="logout" /> Log out
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
