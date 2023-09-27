import React from 'react'
import CashFlowLineChart from '../CashFlowLineChart'
import { RatioChart } from '..'
import ReactSpeedometer from 'react-d3-speedometer'

export default function SpeedometerDescriptionPopup({ visible, modal, title, onClick, description }) {
    if (!visible) return null
    return (
        <div
            className="fixed z-10 inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex flex-col justify-center items-center gap-5"
            onClick={onClick}
        >
            <div className="w-4/6 flex flex-col bg-orange-50 rounded-xl xl:overflow-hidden overflow-y-scroll p-10">
                <strong className="text-3xl text-center">{modal[1]}</strong>
                <div className="w-full flex items-center justify-center p-5">
                    <span className="text-justify">{description && description?.[2]}</span>
                </div>
                <div className="w-full xl:flex xl:flex-row grid grid-cols-1 justify-center gap-4">
                    <div className="flex justify-center items-center ">
                        <ReactSpeedometer
                            width={400}
                            height={210}
                            maxValue={10}
                            value={parseFloat(modal[2])}
                            needleColor="#3730a3"
                            segments={5}
                            segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <ReactSpeedometer
                            width={400}
                            height={210}
                            maxValue={10}
                            value={parseFloat(modal[3])}
                            needleColor="#3730a3"
                            segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                            segments={5}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <ReactSpeedometer
                            width={400}
                            height={210}
                            maxValue={10}
                            value={parseFloat(modal[4])}
                            needleColor="#3730a3"
                            segments={5}
                            segmentColors={['#b91c1c', '#ea580c', '#facc15', '#a3be8c', '#4d7c0f']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
