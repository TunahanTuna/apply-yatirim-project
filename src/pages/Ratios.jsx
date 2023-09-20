import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ExcelTable } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { ratios_key } from '../lib/helpers/helperText'

export default function Ratios() {
    const { summary_ratios, ratio_desc } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == ratios_key)?.label
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <ExcelTable table_sheet={summary_ratios} title={title} />
            </div>
        </motion.div>
    )
}
