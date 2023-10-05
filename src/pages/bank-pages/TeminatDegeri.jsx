import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function TeminatDegeri() {
    const { teminat_degeri } = useSelector((state) => state.bankReducer)

    return (
        teminat_degeri && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={teminat_degeri} />
                </div>
            </div>
        )
    )
}
