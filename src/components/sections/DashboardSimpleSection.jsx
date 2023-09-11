import React from 'react'

import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DashboardRatioChart from '../dashboards/DashboardRatioChart'

export default function DashboardSimpleSection({ data }) {
    const { table_title, totalAssets, equiityAmount, cariOran, NetIsletmeSermayesi, netFinansalBorç, FAVOK } = data

    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <MiniBox data={totalAssets && totalAssets} />
                <MiniBox data={equiityAmount && equiityAmount} />
            </div>
            <div className="flex flex-1 ">
                <DashboardRatioChart type="dashboard" data={cariOran && cariOran} />
            </div>
            <div className="flex flex-1">
                <BarCharts data={FAVOK && FAVOK} table_title={table_title && table_title} />
            </div>
            <div className="flex flex-1">
                <BarCharts data={netFinansalBorç && netFinansalBorç} type="dashboard" chartStyle="negative" />
            </div>
        </div>
    )
}
