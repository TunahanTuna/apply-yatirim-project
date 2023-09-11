import React from 'react'
import { RatioChart } from '..'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import DonutChart from '../dashboards/DonutChart'

export default function DashboardThirdSection({ data }) {
    const { brutKar, asitTest, maddiDuran, aktifDevir } = data
    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <DonutChart data={brutKar && brutKar} />
            </div>
            <div className="flex flex-1 flex-col gap-1">
                <RatioChart data={asitTest && asitTest} type="dashboard" />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <SpeedometerDashboard data={maddiDuran && maddiDuran} type="dashboard" />
            </div>
            <div className="flex ">
                <SpeedometerDashboard data={aktifDevir && aktifDevir} type="dashboard" />
            </div>
        </div>
    )
}
