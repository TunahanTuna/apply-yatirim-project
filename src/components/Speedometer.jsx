import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import GaugeChart from 'react-gauge-chart'
import GaugeComponent from 'react-gauge-component'
import { defaultSubArcs } from 'react-gauge-component/dist/lib/GaugeComponent/types/Arc'

export default function Speedometer({ data }) {
    const maxValue = data[0] == 30006 ? 20 : 10
    return (
        <div className="w-full grid xl:grid-cols-3 grid-cols-1 items-center justify-center gap-2  pt-10">
            <div className="flex w-full justify-center items-center">
                <GaugeSpeedometer data={data[2]} maxValue={maxValue} />
            </div>
            <div className="flex   justify-center items-center">
                <GaugeSpeedometer data={data[3]} maxValue={maxValue} />
            </div>
            <div className="flex justify-center items-center">
                <GaugeSpeedometer data={data[4]} maxValue={maxValue} />
            </div>
        </div>
    )
}

export const GaugeSpeedometer = ({ data, maxValue }) => {
    return (
        <GaugeComponent
            labels={{
                valueLabel: {
                    style: {
                        fill: '#6b7280'
                    }
                },
                tickLabels: {
                    type: 'inner',
                    ticks: [{ value: 0 }, { value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }, { value: 10 }]
                }
            }}
            type="semicircle"
            colors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
            value={data && data}
            minValue={0}
            maxValue={maxValue && maxValue}
            arc={{
                padding: 0.02,
                subArcs: [
                    {
                        limit: 2,
                        color: '#b91c1c',
                        showTick: true
                    },
                    {
                        limit: 4,
                        color: '#ea580c',
                        showTick: true
                    },
                    {
                        limit: 6,
                        color: '#facc15',
                        showTick: true
                    },
                    {
                        limit: 8,
                        color: '#a3be8c',
                        showTick: true
                    },
                    {
                        limit: 10,
                        color: '#4d7c0f',
                        showTick: true
                    }
                ]
            }}
        />
    )
}
