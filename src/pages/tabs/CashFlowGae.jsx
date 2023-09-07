import React from 'react'
import TabPanel from '@mui/lab/TabPanel'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'
export default function CashFlowGae() {
    const { cash_flow_gae } = useSelector((state) => state.dataReducer)
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                className="flex gap-4 flex-col"
            >
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={cash_flow_gae} />
                </div>
            </motion.div>
        </div>
    )
}
