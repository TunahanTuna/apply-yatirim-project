import React from 'react'

import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DashboardRatioChart from '../dashboards/DashboardRatioChart'

export default function DashboardSimpleSection({ data }) {
    const { title, miniBoxFirst, miniBoxSecond, ratioChart, barChartFirst, barChartSecond } = data && data

    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <MiniBox data={miniBoxFirst && miniBoxFirst} />
                <MiniBox data={miniBoxSecond && miniBoxSecond} />
            </div>
            <div className="flex flex-1 ">
                <DashboardRatioChart type="dashboard" data={ratioChart && ratioChart} table_title={title && title} />
            </div>
            <div className="flex flex-1">
                <BarCharts data={barChartFirst && barChartFirst} table_title={title && title} />
            </div>
            <div className="flex flex-1">
                <BarCharts data={barChartSecond && barChartSecond} type="dashboard" chartStyle="negative" />
            </div>
        </div>
    )
}
