import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LiquidTable from '../components/LiquidTable'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'

export default function FinancialStructureRatios() {
    const { financial_structure_ratios } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == 'finansal-yapi-oranlari')?.label

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable table_sheet={financial_structure_ratios} title={title} />
            </div>
        </motion.div>
    )
}
