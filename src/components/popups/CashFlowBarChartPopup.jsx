import React from 'react'
import BarCharts from '../BarCharts'

export default function CashFlowReveneuPopup({ visible, modal, title, onClick }) {
    if (!visible) return null
    return (
        <div
            className="fixed z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm xl:flex hidden justify-center items-center"
            onClick={onClick}
        >
            <div className="bg-neutral-50 flex backdrop-blur-sm w-5/6 h-5/6  p-10 rounded-xl">
                <BarCharts data={modal && modal} table_title={title && title} />
            </div>
        </div>
    )
}
