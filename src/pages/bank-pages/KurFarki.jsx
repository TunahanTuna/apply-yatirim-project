import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function KurFarki() {
    const { kur_farki } = useSelector((state) => state.bankReducer)

    return (
        kur_farki && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={kur_farki} />
                </div>
            </div>
        )
    )
}
