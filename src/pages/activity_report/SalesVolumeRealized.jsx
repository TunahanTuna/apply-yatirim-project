import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SalesVolumeTable from '../../components/activity_report/sales_volume_realized/SalesVolumeTable'
import SalesVolumeBarChart from '../../components/activity_report/sales_volume_realized/SalesVolumeBarChart'
import SalesVolumeDonutChart from '../../components/activity_report/sales_volume_realized/SalesVolumeDonutChart'
import { motion } from 'framer-motion'

export default function SalesVolumeRealized() {
    const { sales_volume_realized } = useSelector((state) => state.dataReducer)
    const main_title = sales_volume_realized && sales_volume_realized.find((dt) => dt[0] == 70000)
    const sub_title = sales_volume_realized && sales_volume_realized.find((dt) => dt[0] == 70001)
    const body =
        sales_volume_realized &&
        sales_volume_realized.filter((dt) => dt[0] != 70000 && dt[0] != 70001 && dt[0] != 70012 && dt[0] != 70013)

    const [selected, setSelected] = useState(0)

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="w-full flex flex-row justify-center items-start"
        >
            <div className="flex w-full  flex-col ">
                <div className="w-full ">
                    <SalesVolumeTable
                        main_title={main_title}
                        sub_title={sub_title}
                        body={body}
                        setSelected={setSelected}
                    />
                </div>
                <div className="w-full  flex justify-center">
                    <SalesVolumeBarChart body={body[selected]} main_title={main_title} sub_title={sub_title} />
                </div>
            </div>
            <div className="w-4/5  justify-center">
                <SalesVolumeDonutChart year={main_title[2]} body={body && body} />
                <SalesVolumeDonutChart year={main_title[4]} body={body && body} />
                <SalesVolumeDonutChart year={main_title[6]} body={body && body} />
                <SalesVolumeDonutChart year={main_title[8]} body={body && body} />
            </div>
        </motion.div>
    )
}
