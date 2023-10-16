import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'
import { useState } from 'react'

export default function ThirdDashboardSectionThird({ data }) {
    const { title, donutChartFirst, BarChartFirst, BarChartSecond, BarChartThird } = data
    const [modal, setModal] = useState([])
    const [openBar, setOpenBar] = useState(false)

    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1 ">
                <BarCharts
                    data={donutChartFirst && donutChartFirst}
                    table_title={title}
                    onClick={() => {
                        setModal(donutChartFirst)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1 ">
                <BarCharts
                    data={BarChartFirst && BarChartFirst}
                    table_title={title}
                    onClick={() => {
                        setModal(BarChartFirst)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1 ">
                <BarCharts
                    data={BarChartSecond && BarChartSecond}
                    table_title={title}
                    onClick={() => {
                        setModal(BarChartSecond)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <BarCharts
                    data={BarChartThird && BarChartThird}
                    table_title={title}
                    onClick={() => {
                        setModal(BarChartThird)
                        setOpenBar(true)
                    }}
                />
            </div>
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
        </div>
    )
}

const onClickComp = (data) => {
    setModal(data && data)
    setOpenBar(true)
}
