import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default function Speedometer({ data }) {
    return (
        <div className="w-full flex items-center justify-center flex-wrap gap-10 pt-10">
            <div>
                <ReactSpeedometer
                    width={500}
                    maxValue={10}
                    value={parseFloat(data[2])}
                    needleColor="#3730a3"
                    segments={5}
                    segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                />
            </div>
            <div>
                <ReactSpeedometer
                    width={500}
                    maxValue={10}
                    value={parseFloat(data[3])}
                    needleColor="#3730a3"
                    segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                    segments={5}
                />
            </div>
            <div>
                <ReactSpeedometer
                    width={500}
                    maxValue={10}
                    value={parseFloat(data[4])}
                    needleColor="#3730a3"
                    segments={5}
                    segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                />
            </div>
        </div>
    )
}
