import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'

export default function ThirdDashboardSectionFirst({ data }) {
    const { title, ratioChartFirst, donutChartFirst, ratioChartSecond, speedometerFirst } = data
    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1  gap-2">
            <div className="flex flex-1">
                <DashboardBarChart type={'dashboard'} data={ratioChartFirst && ratioChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1">
                <DonutChart data={donutChartFirst && donutChartFirst} />
            </div>
            <div className="flex flex-1">
                <DashboardBarChart type={'dashboard'} data={ratioChartSecond && ratioChartSecond} table_title={title} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
        </div>
    )
}
