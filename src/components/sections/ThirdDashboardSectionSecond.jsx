import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'

export default function ThirdDashboardSectionSecond({ data }) {
    const { title, donutChartFirst, donutChartSecond, ratioChartFirst, speedometerFirst } = data
    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1  bg-blue-300">
                <DonutChart data={donutChartFirst && donutChartFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <DonutChart data={donutChartSecond && donutChartSecond} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <DashboardBarChart data={ratioChartFirst && ratioChartFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} color="#3b82f6" />
            </div>
        </div>
    )
}
