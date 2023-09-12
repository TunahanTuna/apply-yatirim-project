import React from 'react'
import { useSelector } from 'react-redux'

export default function BalanceSummaryTable() {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)

    const BalanceTitle = base_financial_dashboard.find((dt) => dt[0] == 10102)
    const BalanceValues = base_financial_dashboard.filter(
        (dt) =>
            dt[0] == 199 ||
            dt[0] == 103 ||
            dt[0] == 120 ||
            dt[0] == 150 ||
            dt[0] == 299 ||
            dt[0] == 1000 ||
            dt[0] == 399 ||
            dt[0] == 300 ||
            dt[0] == 320 ||
            dt[0] == 499 ||
            dt[0] == 400 ||
            dt[0] == 599 ||
            dt[0] == 2000
    )
    return (
        <div className="w-full flex flex-col">
            <div className="pt-2 px-1 pb-1 text-red-600 border-b-4 border-red-600 text-lg">
                <strong>{BalanceTitle[1]}</strong>
            </div>
            <div className="w-full flex flex-col border-b-4 border-red-600">
                {BalanceValues.map((data, idx) => (
                    <div
                        key={idx}
                        className={`flex justify-between w-full p-1 ${
                            data[0] == 199 || data[0] == 299 || data[0] == 1000 || data[0] == 599 || data[0] == 2000
                                ? 'font-bold'
                                : null
                        }`}
                    >
                        {data.slice(1).map((row, idx) => (
                            <div key={`idx-${idx}`} className={`${idx != 0 ? 'text-right' : 'text-left'} w-full`}>
                                {row.toLocaleString()}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
