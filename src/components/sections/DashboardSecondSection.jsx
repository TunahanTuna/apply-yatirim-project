import React from 'react'
import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DonutChart from '../dashboards/DonutChart'

export default function DashboardSecondSection({ data }) {
    const { totalRevenue, TLRevenue, totalReveneu, cariOran, NetIsletmeSermayesi, table_title, toplamVarliklar } = data
    return (
        <div className="w-full flex gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <MiniBox data={totalRevenue && totalRevenue} />
                <MiniBox data={TLRevenue && TLRevenue} />
            </div>
            <div className="flex flex-1  bg-blue-300">
                <BarCharts
                    data={totalReveneu && totalReveneu}
                    table_title={table_title && table_title}
                    color="#3b82f6"
                />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={NetIsletmeSermayesi && NetIsletmeSermayesi} table_title={table_title && table_title} />
            </div>
            <div className="flex flex-1">
                <DonutChart data={toplamVarliklar && toplamVarliklar} table_title={table_title && table_title} />
            </div>
        </div>
    )
}