import React from 'react'
import BarCharts from '../BarCharts'
import classNames from 'classnames'
import { Hidden } from '@mui/material'

export default function DashboardBarChartPopup({ visible, modal, onClick }) {
    if (!visible) return null
    const description = modal && modal?.[8]
    const title = modal && modal?.[1]
    console.log(description)
    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex hidden justify-center items-center"
            onClick={onClick}
        >
            <div
                className={classNames(
                    'dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900 bg-neutral-100 grid 2xl:grid-cols-1 backdrop-blur-sm min-h-3/4 w-1/2  p-10  rounded-xl'
                )}
            >
                <div className="flex w-full justify-center gap-4">
                    <div className="2xl:block w-full ">
                        <BarCharts data={modal} />
                    </div>
                    {description != undefined ? (
                        <div className={classNames('w-full text-center ')}>
                            <h1 className="font-bold text-xl">{title && title}</h1>
                            <p className="text-justify">{description && description}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
