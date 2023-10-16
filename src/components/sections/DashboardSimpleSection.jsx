import React, { useState } from 'react'

import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DashboardRatioChart from '../dashboards/DashboardRatioChart'
import MiniboxPopup from '../popups/MiniboxPopup'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'

export default function DashboardSimpleSection({ data }) {
    const { title, miniBoxFirst, miniBoxSecond, ratioChart, barChartFirst, barChartSecond } = data && data
    const [modal, setModal] = useState([])
    const [open, setOpen] = useState(false)
    const [openRatio, setOpenRatio] = useState(false)
    const [openBar, setOpenBar] = useState(false)

    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1 flex-col gap-1 rounded-3xl">
                <MiniBox
                    data={miniBoxFirst && miniBoxFirst}
                    onClick={() => {
                        setModal(miniBoxFirst)
                        setOpen(true)
                    }}
                />
                <MiniBox
                    data={miniBoxSecond && miniBoxSecond}
                    onClick={() => {
                        setModal(miniBoxSecond)
                        setOpen(true)
                    }}
                />
            </div>
            <div className="flex flex-1 ">
                <DashboardRatioChart
                    type="dashboard"
                    data={ratioChart && ratioChart}
                    table_title={title && title}
                    onClick={() => {
                        setModal(ratioChart)
                        setOpenRatio(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <BarCharts
                    data={barChartFirst && barChartFirst}
                    table_title={title && title}
                    onClick={() => {
                        setModal(barChartFirst)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <BarCharts
                    data={barChartSecond && barChartSecond}
                    table_title={title && title}
                    type="dashboard"
                    chartStyle="negative"
                    onClick={() => {
                        setModal(barChartSecond)
                        setOpenBar(true)
                    }}
                />
            </div>
            <MiniboxPopup visible={open} modal={modal} onClick={() => setOpen(false)} />
            <DashboardRatioChartPopup visible={openRatio} modal={modal} onClick={() => setOpenRatio(false)} />
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
        </div>
    )
}
