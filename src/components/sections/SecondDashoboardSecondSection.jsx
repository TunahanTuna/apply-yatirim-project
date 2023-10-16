import React from 'react'
import MiniBox from '../dashboards/MiniBox'
import { BarCharts, RatioChart } from '../index'
import DonutChart from '../dashboards/DonutChart'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import { useState } from 'react'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'
import DashboardDonutChartPopup from '../popups/DashboardDonutChartPopup'

export default function SecondDashboardSecondSection({ data }) {
    const { title, donutChartFirst, donutChartSecond, ratioChart, donutChartThird } = data
    const [modal, setModal] = useState([])

    const [openRatio, setOpenRatio] = useState(false)
    const [openBar, setOpenBar] = useState(false)
    const [openDonut, setOpenDonut] = useState(false)

    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1  gap-2">
            <div className="flex flex-1">
                <BarCharts
                    data={donutChartFirst && donutChartFirst}
                    table_title={title && title}
                    onClick={() => {
                        setModal(donutChartFirst)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1 min-h-[15rem">
                <BarCharts
                    data={donutChartSecond && donutChartSecond}
                    table_title={title && title}
                    onClick={() => {
                        setModal(donutChartSecond)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <DashboardBarChart
                    data={ratioChart && ratioChart}
                    table_title={title && title}
                    onClick={() => {
                        setModal(ratioChart)
                        setOpenRatio(true)
                    }}
                />
            </div>
            <div className="flex flex-1 min-h-[17rem">
                <DonutChart
                    data={donutChartThird && donutChartThird}
                    onClick={() => {
                        setModal(donutChartThird)
                        setOpenDonut(true)
                    }}
                />
            </div>
            <DashboardRatioChartPopup visible={openRatio} modal={modal} onClick={() => setOpenRatio(false)} />
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
            <DashboardDonutChartPopup
                visible={openDonut}
                modal={modal}
                onClick={() => setOpenDonut(false)}
                table_title={title}
            />
        </div>
    )
}
