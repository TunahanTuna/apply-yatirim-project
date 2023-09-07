import React from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { texts } from '../lib/constants/constants'
import { motion } from 'framer-motion'
import { liquid_ratios_key } from '../lib/helpers/helperText'

export default function LiquidRatios() {
    const { liquid_ratios } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == liquid_ratios_key)?.label
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable table_sheet={liquid_ratios} title={title} />
            </div>
            <div className="text-black text-xl w-full flex flex-col items-center justify-center gap-4">
                <strong className="text-3xl">{texts.charts_main_title}</strong>
                <div className="grid grid-cols-3 h-[43rem] w-full gap-5">
                    <div>
                        <RatioChart data={liquid_ratios[1]} />
                    </div>
                    <div>
                        <RatioChart data={liquid_ratios[2]} />
                    </div>
                    <div>
                        <RatioChart data={liquid_ratios[3]} />
                    </div>
                    <div>
                        <RatioChart data={liquid_ratios[4]} />
                    </div>
                    <div>
                        <RatioChart data={liquid_ratios[5]} />
                    </div>
                    <div>
                        <RatioChart data={liquid_ratios[6]} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
