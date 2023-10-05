import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function KrediTakip() {
    const { kredi_takip, limit_risk_teminat } = useSelector((state) => state.bankReducer)

    return (
        kredi_takip && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={kredi_takip} />
                </div>
            </div>
        )
    )
}
