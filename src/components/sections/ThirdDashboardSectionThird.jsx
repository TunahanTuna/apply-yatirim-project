import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'

export default function ThirdDashboardSectionThird({ data }) {
    const { title, donutChartFirst, BarChartFirst, BarChartSecond, BarChartThird } = data
    return (
        <div className="w-full xl:flex grid grid-cols-2 gap-2">
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={donutChartFirst && donutChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={BarChartFirst && BarChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <BarCharts data={BarChartSecond && BarChartSecond} table_title={title} />
            </div>
            <div className="flex flex-1 h-[20rem] bg-blue-300">
                <BarCharts data={BarChartThird && BarChartThird} table_title={title} />
            </div>
        </div>
    )
}
