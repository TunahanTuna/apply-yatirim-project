import React from 'react'
import BarCharts from '../BarCharts'
import classNames from 'classnames'
import { Hidden } from '@mui/material'
import DonutChart from '../dashboards/DonutChart'
import DonutChartPopupItem from './components/DonutChartPopupItem'
export default function DashboardDonutChartPopup({ visible, modal, table_title, onClick }) {
    if (!visible) return null
    const description = modal && modal?.[8]
    const title = modal && modal?.[1]
    const dataOne = modal && modal?.[2]
    const dataTwo = modal && modal?.[4]
    const dataThree = modal && modal?.[6]
    const years = table_title && table_title
    console.log(years)
    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex hidden justify-center items-center"
            onClick={onClick}
        >
            <div className={classNames('bg-neutral-100 flex flex-col backdrop-blur-sm w-1/2  p-10 gap-4 rounded-xl')}>
                <div className={classNames('w-full text-center', description ? 'visible' : 'hidden')}>
                    <h1 className="font-bold text-xl">{title && title}</h1>
                    <p className="text-justify">{description && description}</p>
                </div>
                <div className=" hidden 2xl:flex gap-2 h-[22rem]">
                    <DonutChartPopupItem data={dataOne} year={years && years?.[2]} title={title && title} />
                    <DonutChartPopupItem data={dataTwo} year={years && years?.[4]} title={title && title} />
                    <DonutChartPopupItem data={dataThree} year={years && years?.[6]} title={title && title} />
                </div>
            </div>
        </div>
    )
}
