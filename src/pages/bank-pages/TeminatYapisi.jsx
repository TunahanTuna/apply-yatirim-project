import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function TeminatYapisi() {
    const { teminat_yapisi } = useSelector((state) => state.bankReducer)
    const temp = teminat_yapisi.map((data) => data.map((dt) => (dt == null ? '-' : dt))).slice(1)

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
