import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, Speedometer } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { revolution_speeds_key } from '../lib/helpers/helperText'

export default function RevolutionSpeed() {
    const [selector, setSelector] = useState(1)

    const { revolution_speeds } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == revolution_speeds_key)?.label

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable setSelector={setSelector} table_sheet={revolution_speeds} title={title} />
            </div>
            <div className="text-indigo-950 text-xl w-full flex flex-col items-center justify-center gap-4">
                <strong className="text-3xl">{revolution_speeds[selector][1]}</strong>
                <div className=" w-full gap-5">
                    <div>
                        <Speedometer data={revolution_speeds[selector]} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
