import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function ProjeLimitleri() {
    const { proje_limitleri } = useSelector((state) => state.bankReducer)

    return (
        proje_limitleri && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={proje_limitleri} />
                </div>
            </div>
        )
    )
}
