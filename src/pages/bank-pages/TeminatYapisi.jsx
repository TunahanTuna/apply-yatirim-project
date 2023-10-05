import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function TeminatYapisi() {
    const { teminat_yapisi } = useSelector((state) => state.bankReducer)

    return (
        teminat_yapisi && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={teminat_yapisi} />
                </div>
            </div>
        )
    )
}
