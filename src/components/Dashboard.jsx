import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'

export default function Dashboard() {
    return (
        <div className="flex flex-col">
            <DashboardStatsGrid />
        </div>
    )
}
