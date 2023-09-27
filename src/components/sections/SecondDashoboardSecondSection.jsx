import React from 'react'
import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DonutChart from '../dashboards/DonutChart'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import DashboardBarChart from '../dashboards/DashboardRatioChart'

export default function SecondDashboardSecondSection({ data }) {
    const { title, donutChartFirst, donutChartSecond, ratioChart, donutChartThird } = data
    return (
        <div className="w-full 2xl:flex grid grid-cols-2 gap-2">
            <div className="flex flex-1">
                <BarCharts data={donutChartFirst && donutChartFirst} />
            </div>
            <div className="flex flex-1 min-h-[15rem">
                <BarCharts data={donutChartSecond && donutChartSecond} />
            </div>
            <div className="flex flex-1">
                <DashboardBarChart data={ratioChart && ratioChart} table_title={title} />
            </div>
            <div className="flex flex-1 min-h-[17rem">
                <DonutChart data={donutChartThird && donutChartThird} />
            </div>
        </div>
    )
}
