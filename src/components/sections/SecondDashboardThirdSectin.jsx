import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'

export default function SecondDashboardThirdSection({ data }) {
    const { title, barChartFirst, speedometerFirst, speedometerSecond, speedometerThird } = data
    return (
        <div className="w-full 2xl:flex grid grid-cols-2 gap-2">
            <div className="flex flex-1">
                <BarCharts data={barChartFirst && barChartFirst} table_title={title} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerSecond && speedometerSecond} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerThird && speedometerThird} />
            </div>
        </div>
    )
}
