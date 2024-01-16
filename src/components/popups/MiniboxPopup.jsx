import React from 'react'
import BarCharts from '../BarCharts'
import classNames from 'classnames'
import { Hidden } from '@mui/material'

export default function MiniboxPopup({ visible, modal, onClick }) {
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
                    'dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900 bg-neutral-100 grid 2xl:grid-cols-1 backdrop-blur-sm w-1/2 rounded-xl',
                    description ? 'min-h-1/2' : ' h-3/4'
                )}
            >
                <div className="flex w-full justify-center p-10 gap-4 ">
                    <div className="w-full 2xl:block">
                        <BarCharts data={modal} />
                    </div>
                    <div className={classNames('w-full text-center', description ? 'visible' : 'hidden')}>
                        <h1 className="font-bold text-xl">{title && title}</h1>
                        <p className="text-justify">{description && description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
