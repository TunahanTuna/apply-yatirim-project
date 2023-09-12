import React, { useState } from 'react'
import TabPanel from '@mui/lab/TabPanel'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { CashFlowTable, ExcelTable } from '../../components'
import CashFlowBarChartPopup from '../../components/popups/CashFlowBarChartPopup'
export default function CashFlowGrossProfit() {
    const { cash_flow_gross_profit } = useSelector((state) => state.dataReducer)
    const temp = cash_flow_gross_profit.map((dt) =>
        dt.map((data) => (!isNaN(parseFloat(data)) ? parseFloat(data) : data))
    )
    const title = temp && temp?.[0] && temp[0]
    const [chartData, setChartData] = useState(1)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                className="flex gap-4 flex-col"
            >
                <div className="flex flex-row gap-4 w-full">
                    <CashFlowTable table_sheet={temp} setChartData={setChartData} setOpen={setOpen} />
                </div>
            </motion.div>
            <CashFlowBarChartPopup
                visible={open}
                modal={temp[chartData]}
                onClick={() => setOpen(false)}
                title={title}
            />
        </div>
    )
}
