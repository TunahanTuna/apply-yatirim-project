import React from 'react'
import BarCharts from '../BarCharts'
import DashboardBarChart from '../dashboards/DashboardRatioChart'
import classNames from 'classnames'
import { Hidden } from '@mui/material'

export default function DashboardRatioChartPopup({ visible, modal, onClick }) {
    if (!visible) return null
    const description = modal && modal?.[8]
    const title = modal && modal?.[1]

    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex hidden justify-center items-center"
            onClick={onClick}
        >
            <div
                className={classNames(
                    'bg-neutral-100 grid 2xl:grid-cols-2 backdrop-blur-sm w-1/2  p-10 gap-4 rounded-xl',
                    description ? 'grid-cols-2 2xl:grid-cols-2 min-h-1/2' : 'grid-cols-1 2xl:grid-cols-1 h-3/4'
                )}
            >
                <div className=" hidden 2xl:block">
                    <DashboardBarChart data={modal} />
                </div>
                <div className={classNames('w-full text-center', description ? 'visible' : 'hidden')}>
                    <h1 className="font-bold text-xl">{title && title}</h1>
                    <p className="text-justify">{description && description}</p>
                </div>
            </div>
        </div>
    )
}
