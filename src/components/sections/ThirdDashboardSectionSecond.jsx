import React, { useState } from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'
import DashboardDonutChartPopup from '../popups/DashboardDonutChartPopup'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'

export default function ThirdDashboardSectionSecond({ data }) {
    const { title, donutChartFirst, donutChartSecond, ratioChartFirst, speedometerFirst } = data
    const [modal, setModal] = useState([])
    const [openBar, setOpenBar] = useState(false)
    const [openRatio, setOpenRatio] = useState(false)
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
            <div className="flex flex-1">
                <DonutChart
                    data={donutChartSecond && donutChartSecond}
                    onClick={() => {
                        setModal(donutChartSecond)
                        setOpenDonut(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <DashboardBarChart
                    type={'dashboard'}
                    data={ratioChartFirst && ratioChartFirst}
                    table_title={title}
                    onClick={() => {
                        setModal(ratioChartFirst)
                        setOpenRatio(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
            <DashboardRatioChartPopup visible={openRatio} modal={modal} onClick={() => setOpenRatio(false)} />
            <DashboardDonutChartPopup
                visible={openDonut}
                modal={modal}
                onClick={() => setOpenDonut(false)}
                table_title={title}
            />
        </div>
    )
}
