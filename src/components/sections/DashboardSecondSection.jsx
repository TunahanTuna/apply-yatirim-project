import React from 'react'
import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DonutChart from '../dashboards/DonutChart'
import MiniboxPopup from '../popups/MiniboxPopup'
import { useState } from 'react'

export default function DashboardSecondSection({ data }) {
    const { totalRevenue, TLRevenue, totalReveneu, cariOran, NetIsletmeSermayesi, table_title, toplamVarliklar } = data
    const [modal, setModal] = useState([])
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1  gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <MiniBox
                    data={totalRevenue && totalRevenue}
                    onClick={() => {
                        setModal(totalRevenue)
                        setOpen(true)
                    }}
                />
                <MiniBox
                    data={TLRevenue && TLRevenue}
                    onClick={() => {
                        setModal(TLRevenue)
                        setOpen(true)
                    }}
                />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={totalReveneu && totalReveneu} table_title={table_title && table_title} />
            </div>
            <div className="flex flex-1 ">
                <BarCharts data={NetIsletmeSermayesi && NetIsletmeSermayesi} table_title={table_title && table_title} />
            </div>
            <div className="flex flex-1">
                <DonutChart data={toplamVarliklar && toplamVarliklar} table_title={table_title && table_title} />
            </div>
            <MiniboxPopup visible={open} modal={modal} onClick={() => setOpen(false)} />
        </div>
    )
}
