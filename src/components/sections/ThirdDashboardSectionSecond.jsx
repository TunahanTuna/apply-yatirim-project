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
                <BarCharts data={donutChartFirst && donutChartFirst} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <DonutChart data={donutChartSecond && donutChartSecond} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <DashboardBarChart type={'dashboard'} data={ratioChartFirst && ratioChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
        </div>
    )
}
