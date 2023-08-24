import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Dashboard from '../components/Dashboard.jsx'

const Home = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default Home
