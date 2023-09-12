import React from 'react'
import { useSelector } from 'react-redux'

export default function IncomeStatementSummaryHeader() {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)
    const mainTitle = base_financial_dashboard.find((dt) => dt[0] == 10100)
    return (
        <div className="w-full flex p-2 justify-between bg-red-600 text-white text-md rounded-xs">
            <div className="w-1/3">
                <strong>{mainTitle[1]}</strong>
            </div>
            <div className="flex justify-between w-full">
                <strong className="w-full text-right">{mainTitle && mainTitle?.[2]}</strong>
                <strong className="w-full text-right">{mainTitle && mainTitle?.[3]}</strong>
                <strong className="w-full text-right">{mainTitle && mainTitle?.[4]}</strong>
            </div>
        </div>
    )
}
