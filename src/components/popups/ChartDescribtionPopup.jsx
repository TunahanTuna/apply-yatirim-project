import React from 'react'
import CashFlowLineChart from '../CashFlowLineChart'
import { RatioChart } from '..'

export default function ChartDescribtionPopup({ visible, modal, title, onClick, description }) {
    if (!visible) return null
    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex hidden justify-center items-center"
            onClick={onClick}
        >
            <div className="bg-neutral-50 grid grid-cols-2 backdrop-blur-sm w-5/6 min-h-[50%] p-10 rounded-xl">
                <div className="w-full h-full flex items-center justify-center backdrop-blur-lg opacity-70">
                    <RatioChart data={modal && modal} />
                </div>
                <div className="flex justify-center items-center flex-col w-full p-5 gap-5">
                    <h3 className="w-full font-bold text-3xl">{description && description?.[1]}</h3>
                    <p className="w-full text-justify text-ellipsis">{description && description?.[2]}</p>
                </div>
            </div>
        </div>
    )
}
