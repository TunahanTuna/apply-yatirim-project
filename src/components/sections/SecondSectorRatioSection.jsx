import React, { useState } from 'react'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import DonutChart from '../dashboards/DonutChart'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'
import DashboardDonutChartPopup from '../popups/DashboardDonutChartPopup'
import DashboardSpeedometerPopup from '../popups/DashboardSpeedometerPopup'

export default function SecondSectorRatioSection({ data }) {
    const { title, value1, value2, value3, value4 } = data && data
    const [modal, setModal] = useState([])

    const [openRatio, setOpenRatio] = useState(false)
    const [openDonut, setOpenDonut] = useState(false)
    const [openSpeedo, setOpenSpeedo] = useState(false)

    return (
        value1 &&
        value2 &&
        value3 &&
        value4 && (
            <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1  gap-2">
                <div className="flex flex-1">
                    <DashboardBarChart
                        type={'dashboard'}
                        data={value1 && value1}
                        table_title={title}
                        onClick={() => {
                            setModal(value1)
                            setOpenRatio(true)
                        }}
                    />
                </div>
                <div className="flex flex-1">
                    <DashboardBarChart
                        data={value2 && value2}
                        onClick={() => {
                            setModal(value2)
                            setOpenDonut(true)
                        }}
                    />
                </div>
                <div className="flex flex-1">
                    <SpeedometerDashboard
                        type={'dashboard'}
                        data={value3 && value3}
                        table_title={title}
                        onClick={() => {
                            setModal(value3)
                            setOpenRatio(true)
                        }}
                    />
                </div>
                <div className="flex flex-1">
                    <SpeedometerDashboard
                        data={value4 && value4}
                        onClick={() => {
                            setModal(value4)
                            setOpenSpeedo(true)
                        }}
                    />
                </div>
                <DashboardRatioChartPopup visible={openRatio} modal={modal} onClick={() => setOpenRatio(false)} />
                <DashboardDonutChartPopup
                    visible={openDonut}
                    modal={modal}
                    onClick={() => setOpenDonut(false)}
                    table_title={title}
                />

                <DashboardSpeedometerPopup visible={openSpeedo} modal={modal} onClick={() => setOpenSpeedo(false)} />
            </div>
        )
    )
}
