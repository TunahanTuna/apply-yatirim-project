import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default function SpeedometerDashboard({ data }) {
    return (
        <div className="gap-2 flex flex-col h-full w-full bg-white p-2 rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <div>
                <ReactSpeedometer
                    width={500}
                    maxValue={10}
                    value={parseFloat(data[6])}
                    needleColor="#172554"
                    segments={5}
                    segmentColors={['#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb']}
                    needleHeightRatio={0.8}
                    needleTransition="easeElastic"
                    needleTransitionDuration={6000}
                />
            </div>
        </div>
    )
}
