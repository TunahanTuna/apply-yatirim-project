import React from 'react'
import CashFlowLineChart from '../CashFlowLineChart'
import { RatioChart } from '..'
import ReactSpeedometer from 'react-d3-speedometer'
import { GaugeSpeedometer } from '../Speedometer'

export default function SpeedometerDescriptionPopup({ visible, modal, title, onClick, description }) {
    if (!visible) return null
    const maxValue = modal && modal?.[0] == 30006 ? 20 : 10
    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex flex-col justify-center items-center gap-5 hidden"
            onClick={onClick}
        >
            <div className="w-4/6 flex flex-col bg-neutral-50 rounded-xl xl:overflow-hidden overflow-y-scroll p-10">
                <strong className="text-3xl text-center">{modal && modal?.[1]}</strong>
                <div className="w-full flex items-center justify-center p-5">
                    <span className="text-justify">{description && description?.[2]}</span>
                </div>
                <div className="w-full xl:flex xl:flex-row grid grid-cols-1 justify-center gap-4">
                    <div className="flex justify-center items-center ">
                        <GaugeSpeedometer data={modal && modal?.[2]} maxValue={maxValue} />
                    </div>
                    <div className="flex justify-center items-center">
                        <GaugeSpeedometer data={modal && modal?.[3]} maxValue={maxValue} />
                    </div>
                    <div className="flex justify-center items-center">
                        <GaugeSpeedometer data={modal && modal?.[4]} maxValue={maxValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}
