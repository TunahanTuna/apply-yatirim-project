import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'

export default function ThirdDashboardSectionThird({ data }) {
    const { title, donutChartFirst, BarChartFirst, BarChartSecond, BarChartThird } = data
    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1  bg-blue-300">
                <DonutChart data={donutChartFirst && donutChartFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={BarChartFirst && BarChartFirst} color="#3b82f6" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={BarChartSecond && BarChartSecond} color="#3b82f6" />
            </div>
            <div className="flex flex-1 h-[20rem] bg-blue-300">
                <BarCharts data={BarChartThird && BarChartThird} color="#3b82f6" />
            </div>
        </div>
    )
}
