import React from 'react'
import BarCharts from '../BarCharts'
import ProfitabilityBarChat from '../ProfitabilityBarChat'

export default function ProfitabilityRatioPopup({ visible, modal, title, onClick, description }) {
    if (!visible) return null
    if (modal[0] == 40001 || modal[0] == 40005 || modal[0] == 40011 || modal[0] == 40012) return null

    return (
        <div
            className="fixed hidden z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex justify-center items-center"
            onClick={onClick && onClick}
        >
            <div className="bg-neutral-50 grid grid-cols-2 backdrop-blur-sm w-5/6 gap-4 p-10 rounded-xl">
                <div>
                    <ProfitabilityBarChat data={modal && modal} table_title={title && title} />
                </div>
                <div className="w-full items-center justify-center">
                    <span className="text-justify">{description && description?.[2]}</span>
                </div>
            </div>
        </div>
    )
}
