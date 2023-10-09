import React from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { texts } from '../lib/constants/constants'
import { motion } from 'framer-motion'
import { liquid_ratios_key } from '../lib/helpers/helperText'
import { useState } from 'react'
import ChartDescribtionPopup from '../components/popups/ChartDescribtionPopup'

export default function LiquidRatios() {
    const { liquid_ratios, ratio_desc } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == liquid_ratios_key)?.label
    const ratio_descriptions = ratio_desc.filter(
        (data) =>
            data[0] == 'A2' ||
            data[0] == 'A3' ||
            data[0] == 'A4' ||
            data[0] == 'A5' ||
            data[0] == 'A6' ||
            data[0] == 'A7'
    )
    const [chartData, setChartData] = useState(1)
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState(0)
    const dates = liquid_ratios?.[0]?.slice(2)
    console.log('first')
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
                <div className="grid lg:grid-cols-2 md:grid-cols-1   xl:grid-cols-3 h-[43rem] w-full gap-5">
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[1]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(1)}
                            setDescription={() => setDescription(0)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[2]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(2)}
                            setDescription={() => setDescription(1)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[3]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(3)}
                            setDescription={() => setDescription(2)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[4]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(4)}
                            setDescription={() => setDescription(3)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[5]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(5)}
                            setDescription={() => setDescription(4)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <RatioChart
                            data={liquid_ratios[6]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(6)}
                            setDescription={() => setDescription(5)}
                            title={dates}
                        />
                    </div>
                </div>
                <ChartDescribtionPopup
                    onClick={() => setOpen(false)}
                    visible={open}
                    modal={liquid_ratios[chartData]}
                    description={ratio_descriptions[description]}
                    title={dates}
                />
            </div>
        </motion.div>
    )
}
