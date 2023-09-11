import React from 'react'

import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'

export default function DashboardSimpleSection({ data }) {
    const { table_title, totalAssets, equiityAmount, cariOran, NetIsletmeSermayesi, netFinansalBorç } = data

    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-col gap-1">
                <MiniBox data={totalAssets && totalAssets} />
                <MiniBox data={equiityAmount && equiityAmount} />
            </div>
            <div className="flex flex-1">
                <RatioChart type="dashboard" data={cariOran && cariOran} />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={NetIsletmeSermayesi && NetIsletmeSermayesi} table_title={table_title && table_title} />
            </div>
            <div className="flex flex-1 h-[20rem]">
                <BarCharts data={netFinansalBorç && netFinansalBorç} type="dashboard" chartStyle="negative" />
            </div>
        </div>
    )
}
