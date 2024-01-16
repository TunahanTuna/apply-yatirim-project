import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ExcelTable } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { balance_key } from '../lib/helpers/helperText'
import BalanceTable from '../components/BalanceTable'
export default function Balance() {
    const { summary_balance_sheet } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == balance_key)?.label

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex xl:gap-4 w-full overflow-y-auto">
                <BalanceTable table_sheet={summary_balance_sheet} title={title} />
            </div>
        </motion.div>
    )
}
