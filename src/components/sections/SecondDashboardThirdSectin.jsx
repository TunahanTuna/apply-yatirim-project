import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'
import { useState } from 'react'

export default function SecondDashboardThirdSection({ data }) {
    const { title, barChartFirst, speedometerFirst, speedometerSecond, speedometerThird } = data
    const [modal, setModal] = useState([])
    const [openBar, setOpenBar] = useState(false)

    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1">
                <BarCharts
                    data={barChartFirst && barChartFirst}
                    table_title={title}
                    onClick={() => {
                        setModal(barChartFirst)
                        setOpenBar(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerFirst && speedometerFirst} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerSecond && speedometerSecond} />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard data={speedometerThird && speedometerThird} />
            </div>
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
        </div>
    )
}
