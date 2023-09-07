import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import MiniBox from '../components/dashboards/MiniBox'

export default function Dashboard() {
    const { ek } = useSelector((state) => state.dataReducer)
    const totalSales = ek.find((data) => data[0] == 200004)
    const netProfit = ek.find((data) => data[0] == 200009)

    const changeOverLastYearTotalSales = `%${parseFloat(totalSales[5]) * 100}`
    useEffect(() => {}, [ek])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col">
            <div className="w-full flex gap-2">
                <div className="flex flex-col gap-1">
                    <MiniBox data={totalSales} />
                    <MiniBox data={netProfit} />
                </div>
                <div className="flex flex-1  bg-blue-300">Sales(Amout) by Product/Category</div>
                <div className="flex flex-1 bg-blue-500">Actual Sales vs Target</div>
            </div>
            <div className="w-full h-full bg-black"></div>
            <div className="w-full h-full bg-black"></div>
        </motion.div>
    )
}
