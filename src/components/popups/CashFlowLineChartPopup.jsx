import React from 'react'
import CashFlowLineChart from '../CashFlowLineChart'

export default function CashFlowLineChartPopup({ visible, modal, title, onClick }) {
    if (!visible) return null
    return (
        <div
            className="fixed z-10 inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
            onClick={onClick}
        >
            <div className="bg-orange-50 flex backdrop-blur-sm w-5/6 h-5/6  p-10 rounded-xl">
                <CashFlowLineChart data={modal && modal} table_title={title && title} />
            </div>
        </div>
    )
}
