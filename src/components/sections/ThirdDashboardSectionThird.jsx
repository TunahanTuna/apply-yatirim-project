import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'

export default function ThirdDashboardSectionThird({ data }) {
    const { title, donutChartFirst, BarChartFirst, BarChartSecond, BarChartThird } = data
    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1 ">
                <BarCharts data={donutChartFirst && donutChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={BarChartFirst && BarChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={BarChartSecond && BarChartSecond} table_title={title} />
            </div>
            <div className="flex flex-1">
                <BarCharts data={BarChartThird && BarChartThird} table_title={title} />
            </div>
        </div>
    )
}
