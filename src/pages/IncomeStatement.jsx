import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ExcelTable } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { income_statement_key } from '../lib/helpers/helperText'

export default function IncomeStatement() {
    const { summary_income_statement } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == income_statement_key)?.label
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full  overflow-y-auto">
                <ExcelTable table_sheet={summary_income_statement} title={title} />
            </div>
        </motion.div>
    )
}
