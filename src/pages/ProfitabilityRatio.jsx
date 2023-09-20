import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BarCharts, LiquidTable, ProfitabilityBarChart, RatioChart } from '../components/index'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'
import { motion } from 'framer-motion'
import { profitability_ratios_key } from '../lib/helpers/helperText'

export default function ProfitabilityRatio() {
    const { profitability_ratios } = useSelector((state) => state.dataReducer)
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == profitability_ratios_key)?.label
    const temp = [
        profitability_ratios[0],
        ...profitability_ratios
            .slice(1)
            .map((data) =>
                data.map((dt) => (isNaN(parseFloat(dt)) || typeof dt == 'number' ? dt : parseFloat(dt) * 100))
            )
    ]
    const firstChartData = [
        {
            label: profitability_ratios[2][1],
            data: temp[2].slice(2),
            backgroundColor: '#93c5fd'
        },
        {
            label: profitability_ratios[3][1],
            data: temp[3].slice(2),
            backgroundColor: '#f87171'
        },
        {
            label: profitability_ratios[4][1],
            data: temp[4].slice(2),
            backgroundColor: '#d8b4fe'
        }
    ]
    const secondChartData = [
        {
            label: profitability_ratios[6][1],
            data: temp[6].slice(2),
            backgroundColor: '#93c5fd'
        },
        {
            label: profitability_ratios[7][1],
            data: temp[7].slice(2),
            backgroundColor: '#f87171'
        },
        {
            label: profitability_ratios[8][1],
            data: temp[8].slice(2),
            backgroundColor: '#d8b4fe'
        },
        {
            label: profitability_ratios[9][1],
            data: temp[9].slice(2),
            backgroundColor: '#f87171'
        },
        {
            label: profitability_ratios[10][1],
            data: temp[10].slice(2),
            backgroundColor: '#5eead4'
        }
    ]
    const thirdChartData = [
        {
            label: profitability_ratios[13][1],
            data: temp[13].slice(2),
            backgroundColor: '#f87171'
        },
        {
            label: profitability_ratios[14][1],
            data: temp[14].slice(2),
            backgroundColor: '#d8b4fe'
        }
    ]
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex gap-4 flex-col"
        >
            <div className="flex flex-row gap-4 w-full">
                <LiquidTable table_sheet={temp} title={title} />
            </div>
            <div className="text-black text-xl w-full flex flex-col items-center justify-center ">
                <div className="grid grid-cols-3 h-[43rem] w-full gap-5">
                    <div>
                        <ProfitabilityBarChart body={firstChartData} title={profitability_ratios[1][1]} />
                    </div>
                    <div>
                        <ProfitabilityBarChart body={secondChartData} title={profitability_ratios[5][1]} />
                    </div>
                    <div>
                        <ProfitabilityBarChart body={thirdChartData} title={profitability_ratios[11][1]} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
