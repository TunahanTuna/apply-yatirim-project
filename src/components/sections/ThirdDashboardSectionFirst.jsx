import React, { useState } from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'
import DashboardDonutChartPopup from '../popups/DashboardDonutChartPopup'

export default function ThirdDashboardSectionFirst({ data }) {
    const { title, ratioChartFirst, donutChartFirst, ratioChartSecond, speedometerFirst } = data && data
    const [modal, setModal] = useState([])

    const [openRatio, setOpenRatio] = useState(false)
    const [openDonut, setOpenDonut] = useState(false)
    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1  gap-2">
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
                <DonutChart
                    data={donutChartFirst && donutChartFirst}
                    onClick={() => {
                        setModal(donutChartFirst)
                        setOpenDonut(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <DashboardBarChart
                    type={'dashboard'}
                    data={ratioChartSecond && ratioChartSecond}
                    table_title={title}
                    onClick={() => {
                        setModal(ratioChartSecond)
                        setOpenRatio(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
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
