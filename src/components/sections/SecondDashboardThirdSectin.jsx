import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'

export default function SecondDashboardThirdSection({ data }) {
    const { title, barChartFirst, speedometerFirst, speedometerSecond, speedometerThird } = data
    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={barChartFirst && barChartFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={speedometerSecond && speedometerSecond} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={speedometerThird && speedometerThird} color="#3b82f6" />
            </div>
        </div>
    )
}
