import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import BuyerProfilePieChart from '../components/BuyerProfileChart'

export default function Dashboard() {
    return (
        <div className="flex gap-4 flex-col">
            <DashboardStatsGrid />
            <div className="flex flex-1 gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
        </div>
    )
}
