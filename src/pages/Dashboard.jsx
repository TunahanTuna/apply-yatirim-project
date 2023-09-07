import React from 'react'
import { motion } from 'framer-motion'

export default function Dashboard() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col">
            <div className="w-full flex ">
                <div className="flex flex-col flex-1 bg-blue-200">
                    <div>sales</div>
                    <div>Gross Profit</div>
                </div>
                <div className="flex flex-1 bg-blue-300">Sales(Amout) by Product/Category</div>
                <div className="flex flex-1 bg-blue-500">Actual Sales vs Target</div>
            </div>
            <div className="w-full h-full bg-black"></div>
            <div className="w-full h-full bg-black"></div>
        </motion.div>
    )
}
