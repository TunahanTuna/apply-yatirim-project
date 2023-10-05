import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function LimitRiskTeminat() {
    const { limit_risk_teminat } = useSelector((state) => state.bankReducer)

    return (
        limit_risk_teminat && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={limit_risk_teminat} />
                </div>
            </div>
        )
    )
}
