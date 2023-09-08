import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import MiniBox from '../components/dashboards/MiniBox'
import { BarCharts, RatioChart, Speedometer } from '../components'
import SpeedometerDashboard from '../components/dashboards/SpeedometerDashboard'
import DonutChart from '../components/dashboards/DonutChart'

export default function Dashboard() {
    const { ek } = useSelector((state) => state.dataReducer)
    const table_title = ek && ek?.find((data) => data[0] == 200000)
    const totalAssets = ek && ek.find((data) => data[0] == 200001)
    const equiityAmount = ek && ek.find((data) => data[0] == 200002)
    const totalRevenue = ek && ek.find((data) => data[0] == 200005)
    const TLRevenue = ek && ek?.find((data) => data[0] == 200006)
    const cariOran = ek && ek?.find((data) => data[0] == 200019)
    const NetIsletmeSermayesi = ek && ek?.find((data) => data[0] == 200009)
    const totalReveneu = ek && ek?.find((data) => data[0] == 200004)
    const asitTest = ek && ek?.find((data) => data[0] == 200020)
    const brutKar = ek && ek?.find((data) => data[0] == 200023)
    const test = ek && ek?.find((data) => data[0] == 200012)

    const aktifDevir = ek && ek?.find((data) => data[0] == 30007)
    const maddiDuran = ek && ek?.find((data) => data[0] == 30005)

    useEffect(() => {}, [ek])

    return (
        ek && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col">
                <div className="w-full flex gap-2">
                    <div className="flex flex-col gap-1">
                        <MiniBox data={totalAssets} />
                        <MiniBox data={equiityAmount} />
                    </div>
                    <div className="flex w-1/4 ">
                        <RatioChart type="dashboard" data={cariOran} />
                    </div>
                    <div className="flex flex-1 ">
                        <BarCharts data={NetIsletmeSermayesi} table_title={table_title} />
                    </div>
                    <div className="flex ">
                        <SpeedometerDashboard data={aktifDevir} type="dashboard" />
                    </div>
                </div>
                <div className="w-full flex gap-2">
                    <div className="flex flex-col gap-1">
                        <MiniBox data={totalRevenue} />
                        <MiniBox data={TLRevenue} />
                    </div>
                    <div className="flex flex-1  bg-blue-300">
                        <BarCharts data={totalReveneu} color="#3b82f6" />
                    </div>
                    <div className="flex ">
                        <BarCharts data={NetIsletmeSermayesi} table_title={table_title} />
                    </div>
                    <div className="flex">
                        <DonutChart data={test} table_title={table_title} />
                    </div>
                </div>
                <div className="w-full flex gap-2">
                    <div className="flex flex-1 flex-col gap-1">
                        <DonutChart data={brutKar} />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                        <RatioChart data={asitTest} type="dashboard" />
                    </div>
                    <div className="flex flex-1  bg-blue-300">
                        <SpeedometerDashboard data={maddiDuran} type="dashboard" />
                    </div>
                    <div className="flex ">
                        <SpeedometerDashboard data={aktifDevir} type="dashboard" />
                    </div>
                </div>
            </motion.div>
        )
    )
}
