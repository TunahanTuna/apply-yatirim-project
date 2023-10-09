import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function LimitRiskTeminat() {
    const { limit_risk_teminat } = useSelector((state) => state.bankReducer)
    const temp = limit_risk_teminat.map((data) => data.map((dt) => (dt == '0.00' || dt == '0' ? '-' : dt))).slice(3)

    return (
        temp && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={temp} />
                </div>
            </div>
        )
    )
}
