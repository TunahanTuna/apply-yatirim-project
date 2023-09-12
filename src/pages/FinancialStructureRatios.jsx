import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { financial_structure_ratios_key } from '../lib/helpers/helperText'
export default function FinancialStructureRatios() {
    const [selector, setSelector] = useState(1)
    const { financial_structure_ratios } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == financial_structure_ratios_key)?.label

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable setSelector={setSelector} table_sheet={financial_structure_ratios} title={title} />
            </div>
            <div className="text-white text-xl w-full flex flex-col items-center justify-center gap-4">
                <strong className="text-3xl">Chart</strong>
                <div className="grid grid-cols-3 h-[24rem] w-full gap-5">
                    <div>
                        <RatioChart data={financial_structure_ratios[selector]} />
                    </div>
                    <div>
                        <RatioChart data={financial_structure_ratios[(selector + 1) % 12]} />
                    </div>
                    <div>
                        <RatioChart data={financial_structure_ratios[(selector + 2) % 12]} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
