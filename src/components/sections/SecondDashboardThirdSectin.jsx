import React from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChartPopup from '../popups/DashboardBarChartPopup'
import { useState } from 'react'
import DashboardSpeedometerPopup from '../popups/DashboardSpeedometerPopup'

export default function SecondDashboardThirdSection({ data }) {
    const { title, barChartFirst, speedometerFirst, speedometerSecond, speedometerThird } = data
    const [modal, setModal] = useState([])
    const [openBar, setOpenBar] = useState(false)
    const [openSpeedo, setOpenSpeedo] = useState(false)

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
                <SpeedometerDashboard
                    data={speedometerFirst && speedometerFirst}
                    onClick={() => {
                        setModal(speedometerFirst)
                        setOpenSpeedo(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard
                    data={speedometerSecond && speedometerSecond}
                    onClick={() => {
                        setModal(speedometerSecond)
                        setOpenSpeedo(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard
                    data={speedometerThird && speedometerThird}
                    onClick={() => {
                        setModal(speedometerThird)
                        setOpenSpeedo(true)
                    }}
                />
            </div>
            <DashboardBarChartPopup visible={openBar} modal={modal} onClick={() => setOpenBar(false)} />
            <DashboardSpeedometerPopup visible={openSpeedo} modal={modal} onClick={() => setOpenSpeedo(false)} />
        </div>
    )
}
