import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LiquidTable, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { financial_structure_ratios_key } from '../lib/helpers/helperText'
import ChartDescribtionPopup from '../components/popups/ChartDescribtionPopup'
export default function FinancialStructureRatios() {
    const [selector, setSelector] = useState(1)
    const { financial_structure_ratios, ratio_desc } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == financial_structure_ratios_key)?.label
    const ratio_descriptions = ratio_desc.filter(
        (data) =>
            data[0] == 'A10' ||
            data[0] == 'A11' ||
            data[0] == 'A12' ||
            data[0] == 'A13' ||
            data[0] == 'A14' ||
            data[0] == 'A15' ||
            data[0] == 'A16' ||
            data[0] == 'A17' ||
            data[0] == 'A18' ||
            data[0] == 'A19' ||
            data[0] == 'A20' ||
            data[0] == 'A21'
    )
    const [chartData, setChartData] = useState(1)
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState(0)
    const dates = financial_structure_ratios?.[0]?.slice(2)
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full overflow-y-auto">
                <LiquidTable setSelector={setSelector} table_sheet={financial_structure_ratios} title={title} />
            </div>
            <div className=" text-xl w-full flex flex-col items-center justify-center gap-4">
                <strong className="text-3xl dark:text-gray-200 text-black">Grafikler</strong>
                <div className="grid xl:grid-cols-3 grid-cols-1 h-[24rem] w-full gap-5">
                    <div className="flex w-full items-center justify-center">
                        <RatioChart
                            data={financial_structure_ratios[selector]}
                            setOpen={setOpen}
                            setChartData={() => setChartData(selector)}
                            setDescription={() => setDescription(selector - 1)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <RatioChart
                            data={financial_structure_ratios[(selector + 1) % 12]}
                            setOpen={setOpen}
                            setChartData={() => setChartData((selector + 1) % 12)}
                            setDescription={() => setDescription(selector % 12)}
                            title={dates}
                        />
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <RatioChart
                            data={financial_structure_ratios[(selector + 2) % 12]}
                            setOpen={setOpen}
                            setChartData={() => setChartData((selector + 2) % 12)}
                            setDescription={() => setDescription((selector + 1) % 12)}
                            title={dates}
                        />
                    </div>
                </div>
                <ChartDescribtionPopup
                    onClick={() => setOpen(false)}
                    visible={open}
                    modal={financial_structure_ratios[chartData]}
                    description={ratio_descriptions[description]}
                />
            </div>
        </motion.div>
    )
}
