import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function TeminatMektubu() {
    const { teminat_mektubu } = useSelector((state) => state.bankReducer)

    return (
        teminat_mektubu && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={teminat_mektubu} />
                </div>
            </div>
        )
    )
}
