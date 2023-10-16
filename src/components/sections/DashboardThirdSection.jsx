import React from 'react'
import { RatioChart } from '..'
import SpeedometerDashboard from '../dashboards/SpeedometerDashboard'
import DonutChart from '../dashboards/DonutChart'
import DashboardRatioChart from '../dashboards/DashboardRatioChart'
import { useState } from 'react'
import DashboardRatioChartPopup from '../popups/DashboardRatioChartPopup'
import DashboardDonutChartPopup from '../popups/DashboardDonutChartPopup'
import DashboardSpeedometerPopup from '../popups/DashboardSpeedometerPopup'

export default function DashboardThirdSection({ data }) {
    const { title, brutKar, asitTest, maddiDuran, aktifDevir } = data
    const [modal, setModal] = useState([])
    const [open, setOpen] = useState(false)
    const [openRatio, setOpenRatio] = useState(false)
    const [openDonut, setOpenDonut] = useState(false)
    const [openSpeedo, setOpenSpeedo] = useState(false)

    return (
        <div className="w-full 2xl:flex grid lg:grid-cols-2 md:grid-cols-1 gap-2">
            <div className="flex flex-1 flex-col gap-1">
                <DonutChart
                    data={brutKar && brutKar}
                    onClick={() => {
                        setModal(brutKar)
                        setOpenDonut(true)
                    }}
                />
            </div>
            <div className="flex flex-1 flex-col gap-1">
                <DashboardRatioChart
                    data={asitTest && asitTest}
                    type="dashboard"
                    table_title={title && title}
                    onClick={() => {
                        setModal(asitTest)
                        setOpenRatio(true)
                    }}
                />
            </div>
            <div className="flex flex-1 ">
                <SpeedometerDashboard
                    data={maddiDuran && maddiDuran}
                    type="dashboard"
                    onClick={() => {
                        setModal(maddiDuran)
                        setOpenSpeedo(true)
                    }}
                />
            </div>
            <div className="flex flex-1">
                <SpeedometerDashboard
                    data={aktifDevir && aktifDevir}
                    type="dashboard"
                    onClick={() => {
                        setModal(aktifDevir)
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
}
