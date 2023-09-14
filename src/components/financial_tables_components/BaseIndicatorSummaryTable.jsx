import React from 'react'
import { useSelector } from 'react-redux'

export default function BaseIndicatorSummaryTable() {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)

    const BaseIndicatortTitle = base_financial_dashboard && base_financial_dashboard?.find((dt) => dt[0] == 10103)
    const BaseIndicatorValues =
        base_financial_dashboard &&
        base_financial_dashboard?.filter(
            (dt) => dt[0] == 701 || dt[0] == 702 || dt[0] == 703 || dt[0] == 10001 || dt[0] == 10002 || dt[0] == 705
        )
    return (
        <div className="w-full flex flex-col">
            <div className="pt-2 px-1 pb-1 text-red-600 border-b-4 border-red-600 text-lg">
                <strong>{BaseIndicatortTitle && BaseIndicatortTitle[1]}</strong>
            </div>
            <div className="w-full flex flex-col border-b-4 border-red-600">
                {BaseIndicatorValues &&
                    BaseIndicatorValues.map((data, idx) => (
                        <div key={idx} className={`flex justify-between w-full p-1`}>
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
