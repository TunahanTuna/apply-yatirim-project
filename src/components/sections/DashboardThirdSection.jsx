import React from 'react'
import { RatioChart } from '..'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import DonutChart from '../dashboards/DonutChart'
import DashboardRatioChart from '../dashboards/DashboardRatioChart'

export default function DashboardThirdSection({ data }) {
    const { brutKar, asitTest, maddiDuran, aktifDevir } = data
    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <DonutChart data={brutKar && brutKar} />
            </div>
            <div className="flex flex-1 flex-col gap-1">
                <DashboardRatioChart data={asitTest && asitTest} type="dashboard" />
            </div>
            <div className="flex flex-1 ">
                <SpeedometerDashboard data={maddiDuran && maddiDuran} type="dashboard" />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={aktifDevir && aktifDevir} type="dashboard" />
            </div>
        </div>
    )
}
