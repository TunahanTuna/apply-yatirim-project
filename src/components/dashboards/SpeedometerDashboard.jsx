import classNames from 'classnames'
import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import { GaugeSpeedometer } from '../Speedometer'

export default function SpeedometerDashboard({ data, color, onClick }) {
    const maxValue = data && data?.[0] == 30006 ? 20 : 10

    return (
        <div
            className={classNames(
                'gap-2 flex flex-col h-full w-full p-2 border border-gray-300 rounded-xl',
                color && color
                    ? `${color} dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900 `
                    : 'dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900  bg-neutral-50 '
            )}
            onClick={onClick}
        >
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <div className="h-full w-full flex items-center justify-center">
                <GaugeSpeedometer data={data && data?.[6]} maxValue={maxValue} />
            </div>
        </div>
    )
}
