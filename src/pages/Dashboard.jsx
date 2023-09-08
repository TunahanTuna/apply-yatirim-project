import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import MiniBox from '../components/dashboards/MiniBox'

export default function Dashboard() {
    const { ek } = useSelector((state) => state.dataReducer)
    const totalAssets = ek && ek.find((data) => data[0] == 200001)
    const equiityAmount = ek && ek.find((data) => data[0] == 200002)
    const totalRevenue = ek && ek.find((data) => data[0] == 200004)
    const TLRevenue = ek && ek?.find((data) => data[0] == 200005)

    useEffect(() => {}, [ek])

    return (
        ek && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col">
                <div className="w-full flex gap-2">
                    <div className="flex flex-col gap-1">
                        <MiniBox data={totalAssets} />
                        <MiniBox data={equiityAmount} />
                    </div>
                    <div className="flex flex-1  bg-blue-300">Sales(Amout) by Product/Category</div>
                    <div className="flex flex-1 bg-blue-500">Actual Sales vs Target</div>
                </div>
                <div className="w-full flex gap-2">
                    <div className="flex flex-col gap-1">
                        <MiniBox data={totalRevenue} />
                        <MiniBox data={TLRevenue} />
                    </div>
                    <div className="flex flex-1  bg-blue-300">Sales(Amout) by Product/Category</div>
                    <div className="flex flex-1 bg-blue-500">Actual Sales vs Target</div>
                </div>
                <div className="w-full h-full bg-black"></div>
            </motion.div>
        )
    )
}
