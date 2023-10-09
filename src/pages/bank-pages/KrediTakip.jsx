import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'
import moment from 'moment'

export default function KrediTakip() {
    const { kredi_takip, limit_risk_teminat } = useSelector((state) => state.bankReducer)
    const temp = kredi_takip
        .filter((data) => data[1] != 0)
        .map((data) => data.map((dt) => (dt == '0.00' || dt == '0' ? '-' : dt)))
        .slice(3)
    const test = new Date('test')
    // console.log(
    //     temp.map((data) => data.map((dt) => (new Date(dt) == 'Invalid Date' || dt == null ? dt : new Date(dt))))
    // )
    // console.log(temp)

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
