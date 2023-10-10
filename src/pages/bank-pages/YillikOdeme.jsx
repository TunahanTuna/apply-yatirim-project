import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function YillikOdeme() {
    const { yillik_odeme } = useSelector((state) => state.bankReducer)
    const temp = yillik_odeme.map((data) => data.map((dt) => (dt == '0.00' || dt == '0' ? '-' : dt))).slice(2)

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
