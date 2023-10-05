import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function GayrimenkulListeleri() {
    const { gayrimenkul_listeleri, limit_risk_teminat } = useSelector((state) => state.bankReducer)

    return (
        gayrimenkul_listeleri && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={gayrimenkul_listeleri} />
                </div>
            </div>
        )
    )
}
