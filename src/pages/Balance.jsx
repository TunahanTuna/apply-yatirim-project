import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExcelTable from '../components/ExcelTable'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
export default function Balance() {
    const { summary_balance_sheet, summary_ratios, summary_income_statement } = useSelector(
        (state) => state.dataReducer
    )
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == 'bilanco')?.label + ' ' + 'Analizi'
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <ExcelTable table_sheet={summary_balance_sheet} title={title} />
            </div>
        </motion.div>
    )
}
