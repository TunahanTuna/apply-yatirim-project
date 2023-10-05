import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function YillikOdeme() {
    const { yillik_odeme } = useSelector((state) => state.bankReducer)

    return (
        yillik_odeme && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={yillik_odeme} />
                </div>
            </div>
        )
    )
}
