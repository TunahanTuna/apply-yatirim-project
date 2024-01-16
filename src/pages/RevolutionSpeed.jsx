import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, Speedometer } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { revolution_speeds_key } from '../lib/helpers/helperText'
import SpeedometerDescriptionPopup from '../components/popups/SpeedometerDescriptionPopup'

export default function RevolutionSpeed() {
    const [selector, setSelector] = useState(1)

    const { revolution_speeds, ratio_desc } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == revolution_speeds_key)?.label
    const ratio_descriptions = ratio_desc.filter(
        (data) =>
            data[0] == 'A24' ||
            data[0] == 'A25' ||
            data[0] == 'A26' ||
            data[0] == 'A27' ||
            data[0] == 'A28' ||
            data[0] == 'A29' ||
            data[0] == 'A30'
    )
    const [chartData, setChartData] = useState(1)
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable setSelector={setSelector} table_sheet={revolution_speeds} title={title} />
            </div>
            <div className="text-indigo-950 dark:text-gray-200 text-xl w-full flex flex-col items-center justify-center gap-4">
                <strong className="text-3xl">{revolution_speeds[selector][1]}</strong>
                <div className=" w-full gap-5">
                    <div onClick={() => setOpen(true)}>
                        <Speedometer data={revolution_speeds[selector]} />
                    </div>
                </div>
                <SpeedometerDescriptionPopup
                    onClick={() => setOpen(false)}
                    visible={open}
                    modal={revolution_speeds[selector]}
                    description={ratio_descriptions[selector - 1]}
                />
            </div>
        </motion.div>
    )
}
