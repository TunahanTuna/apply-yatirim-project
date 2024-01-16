import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BarCharts, LiquidTable, ProfitabilityBarChart, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { profitability_ratios_key } from '../lib/helpers/helperText'
import ProfitabilityRatioPopup from '../components/popups/ProfitabilityRatioPopup'

export default function ProfitabilityRatio() {
    const { profitability_ratios, ratio_desc } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == profitability_ratios_key)?.label
    const years = profitability_ratios?.[0]?.slice(2)
    const temp = [
        profitability_ratios[0],
        ...profitability_ratios
            .slice(1)
            .map((data) => data.map((dt) => (isNaN(parseFloat(dt)) || typeof dt == 'number' ? dt : parseFloat(dt))))
    ]

    const ratio_descriptions = ratio_desc.filter((data) => data_filter(data))
    const [chartData, setChartData] = useState(null)
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState(null)
    const firstChartData = [
        {
            label: profitability_ratios[2][1],
            data: temp[2].slice(2),
            backgroundColor: '#0369a1',
            barThickness: 30
        },
        {
            label: profitability_ratios[3][1],
            data: temp[3].slice(2),
            backgroundColor: '#b91c1c',
            barThickness: 30
        },
        {
            label: profitability_ratios[4][1],
            data: temp[4].slice(2),
            backgroundColor: '#8b5cf6',
            barThickness: 30
        }
    ]
    const secondChartData = [
        {
            label: profitability_ratios[6][1],
            data: temp[6].slice(2),
            backgroundColor: '#0369a1',
            barThickness: 25
        },
        {
            label: profitability_ratios[7][1],
            data: temp[7].slice(2),
            backgroundColor: '#b91c1c',
            barThickness: 25
        },
        {
            label: profitability_ratios[8][1],
            data: temp[8].slice(2),
            backgroundColor: '#8b5cf6',
            barThickness: 25
        },
        {
            label: profitability_ratios[9][1],
            data: temp[9].slice(2),
            backgroundColor: '#f87171',
            barThickness: 25
        },
        {
            label: profitability_ratios[10][1],
            data: temp[10].slice(2),
            backgroundColor: '#0f766e',
            barThickness: 25
        }
    ]
    const thirdChartData = [
        {
            label: profitability_ratios[13][1],
            data: temp[13].slice(2),
            backgroundColor: '#b91c1c',
            barThickness: 30
        },
        {
            label: profitability_ratios[14][1],
            data: temp[14].slice(2),
            backgroundColor: '#8b5cf6',
            barThickness: 30
        }
    ]
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable
                    table_sheet={temp}
                    title={title}
                    setChartData={setChartData}
                    setOpen={setOpen}
                    setDescription={setDescription}
                />
            </div>
            <div className="text-black text-xl w-full flex flex-col items-center justify-center ">
                <div className="grid grid-cols-1 xl:grid-cols-3  h-[43rem] w-full gap-5">
                    <div className="h-1/2">
                        <ProfitabilityBarChart
                            body={firstChartData}
                            title={profitability_ratios[1][1]}
                            table_title={years && years}
                        />
                    </div>
                    <div className="h-1/2">
                        <ProfitabilityBarChart
                            body={secondChartData}
                            title={profitability_ratios[5][1]}
                            table_title={years && years}
                        />
                    </div>
                    <div className="h-1/2">
                        <ProfitabilityBarChart
                            body={thirdChartData}
                            title={profitability_ratios[11][1]}
                            table_title={years && years}
                        />
                    </div>
                </div>
                <ProfitabilityRatioPopup
                    onClick={() => setOpen(false)}
                    visible={open}
                    modal={chartData}
                    description={ratio_descriptions[description]}
                    title={years && years}
                />
            </div>
        </motion.div>
    )
}
const data_filter = (data) => {
    return (
        data[0] == 'A33' ||
        data[0] == 'A34' ||
        data[0] == 'A35' ||
        data[0] == 'A36' ||
        data[0] == 'A37' ||
        data[0] == 'A38' ||
        data[0] == 'A39' ||
        data[0] == 'A40' ||
        data[0] == 'A41' ||
        data[0] == 'A42' ||
        data[0] == 'A43' ||
        data[0] == 'A44' ||
        data[0] == 'A45' ||
        data[0] == 'A46'
    )
}
