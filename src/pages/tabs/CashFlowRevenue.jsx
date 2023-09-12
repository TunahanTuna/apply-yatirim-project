import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { BarCharts, CashFlowTable, ExcelTable } from '../../components'
import CashFlowReveneuPopup from '../../components/popups/CashFlowReveneuPopup'
export default function CashFlowRevenue() {
    const { cash_flow_revenue } = useSelector((state) => state.dataReducer)
    const temp =
        cash_flow_revenue &&
        cash_flow_revenue.map((dt) => dt.map((data) => (!isNaN(parseFloat(data)) ? parseFloat(data) : data)))
    const title = temp && temp?.[0] && temp[0]
    const [chartData, setChartData] = useState(1)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                className="flexW gap-4 flex-col"
            >
                <div className="flex flex-row gap-4 w-full">
                    <CashFlowTable table_sheet={temp && temp} setChartData={setChartData} setOpen={setOpen} />
                </div>
            </motion.div>
            <CashFlowReveneuPopup visible={open} modal={temp[chartData]} onClick={() => setOpen(false)} title={title} />
        </div>
    )
}
