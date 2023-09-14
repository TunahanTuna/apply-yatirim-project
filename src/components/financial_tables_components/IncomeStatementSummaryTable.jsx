import React from 'react'
import { useSelector } from 'react-redux'

export default function IncomeStatementSummaryTable() {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)

    const incomeStatementTitle = base_financial_dashboard && base_financial_dashboard?.find((dt) => dt[0] == 10101)
    const incomeStatementValues =
        base_financial_dashboard &&
        base_financial_dashboard?.filter(
            (dt) => dt[0] == 619 || dt[0] == 629 || dt[0] == 697 || dt[0] == 639 || dt[0] == 689 || dt[0] == 699
        )

    return (
        <div className="w-full flex flex-col">
            <div className="pt-2 px-1 pb-1 text-red-600 border-b-4 border-red-600 text-lg">
                <strong>{incomeStatementTitle && incomeStatementTitle[1]}</strong>
            </div>
            <div className="w-full flex flex-col border-b-4 border-red-600">
                {incomeStatementValues &&
                    incomeStatementValues.map((data, idx) => (
                        <div
                            key={idx}
                            className={`flex justify-between w-full p-1 ${data[0] == 619 ? 'font-bold' : null}`}
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
