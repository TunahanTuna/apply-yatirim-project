import React from 'react'
import { useSelector } from 'react-redux'
import DepreciationGroupSalesTable from '../../components/activity_report/depreciation_group_sales/DepreciationGroupSalesTable'
import DepreciationGroupSalesChart from '../../components/activity_report/depreciation_group_sales/DepreciationGroupSalesChart'
import { motion } from 'framer-motion'

export default function DepreciationGroupSales() {
    const { depreciation_group_sales } = useSelector((state) => state.dataReducer)
    const depreciation =
        depreciation_group_sales &&
        depreciation_group_sales.filter((data) => data[0] == 90000 || data[0] == 90001 || data[0] == 90002)
    const group_sales =
        depreciation_group_sales &&
        depreciation_group_sales.filter((data) => data[0] == 90003 || data[0] == 90004 || data[0] == 90005)
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="w-full flex flex-col"
        >
            <div className="w-full grid xl:grid-cols-2 grid-cols-1 pt-5 p-2">
                <div className="w-full">{depreciation && <DepreciationGroupSalesTable data={depreciation} />}</div>
                <div className="w-full flex items-center justify-center">
                    <DepreciationGroupSalesChart data={depreciation && depreciation} />
                </div>
            </div>
            <div className="w-full grid xl:grid-cols-2 grid-cols-1 ">
                <div className="w-full">{group_sales && <DepreciationGroupSalesTable data={group_sales} />}</div>
                <div className="w-full flex items-center justify-center">
                    <DepreciationGroupSalesChart data={group_sales && group_sales} color="#eab308" />
                </div>
            </div>
        </motion.div>
    )
}
