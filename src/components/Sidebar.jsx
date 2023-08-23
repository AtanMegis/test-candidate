import React from 'react'
import logo from '../assets/Logo.png'
import home from '../assets/home.png'
import reports from '../assets/reports.png'
import notification from '../assets/notifications.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

const Sidebar = () => {
    return (
        <div className="h-full w-[250px] bg-[#171E37]">
            <div className="block p-4">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-[#6C747D] py-20 px-6 ">
                <ul className="flex flex-col gap-8 ">
                    <li>
                        <img src={home} alt="home" /> Home
                    </li>
                    <li>
                        <img src={reports} alt="reports" /> Reports
                    </li>
                    <li className="items-center">
                        <img src={notification} alt="notification" />{' '}
                        Notifications
                        <div className="inline-flex items-center justify-center w-4 h-4 bg-[#98FFE0] rounded-sm ml-8 font-medium text-xs">
                            <span>1</span> {/* notification pop up */}
                        </div>
                    </li>
                    <li>
                        <img src={settings} alt="settings" /> Settings
                    </li>
                    <li>
                        <img src={logout} alt="logout" /> Log out
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
