import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import SalesVolumeProjectionTable from '../../components/activity_report/sales_volume_projection/SalesVolumeProjectionTable'
import SalesVolumeProjectionBarChart from '../../components/activity_report/sales_volume_projection/SalesVolumeProjectionBarChart'
export default function SalesVolumeProjection() {
    const { sales_volume_realized, sales_volume_projection } = useSelector((state) => state.dataReducer)
    const main_title = sales_volume_projection && sales_volume_projection.find((dt) => dt[0] == 80000)
    const sub_title = sales_volume_projection && sales_volume_projection.find((dt) => dt[0] == 80001)
    const body =
        sales_volume_projection &&
        sales_volume_projection.filter((dt) => dt[0] != 80000 && dt[0] != 80001 && dt[0] != 80012 && dt[0] != 80013)

    const [selected, setSelected] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="w-full flex flex-row justify-center items-start"
        >
            <div className="w-full flex flex-col ">
                <div className="w-full items-center justify-center max-h-[80%] overflow-x-auto">
                    <SalesVolumeProjectionTable
                        main_title={main_title}
                        sub_title={sub_title}
                        body={body}
                        setSelected={setSelected}
                    />
                </div>
                <div className="w-full xl:max-h-[50%] flex flex-col justify-center items-center pt-2">
                    <div className="xl:w-4/6 w-full overflow-y-auto">
                        <div className="dark:text-gray-200 w-full text-center text-xl">
                            <strong className="w-full font-bold ">Satış Adetleri Projeksiyon</strong>
                        </div>
                        <SalesVolumeProjectionBarChart
                            body={body && body?.[selected]}
                            main_title={main_title}
                            sub_title={sub_title}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
