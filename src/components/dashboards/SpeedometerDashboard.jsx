import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default function SpeedometerDashboard({ data }) {
    return (
        <div className="gap-2 flex flex-col h-full w-full bg-orange-50 p-2 rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <div className="h-full w-full flex items-center justify-center">
                <ReactSpeedometer
                    width={350}
                    height={200}
                    maxValue={10}
                    value={parseFloat(data[6])}
                    needleColor="#172554"
                    segments={5}
                    segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                    needleHeightRatio={0.8}
                    needleTransition="easeElastic"
                    needleTransitionDuration={6000}
                />
            </div>
        </div>
    )
}
