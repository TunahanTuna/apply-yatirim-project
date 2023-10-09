import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function KrediTakip() {
    const { kredi_takip, limit_risk_teminat } = useSelector((state) => state.bankReducer)
    console.log(kredi_takip)
    const temp = kredi_takip
        .filter((data) => data[1] != 0)
        .map((data) => data.map((dt) => (dt == '0.00' || dt == '0' ? '-' : dt)))
        .slice(3)
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
