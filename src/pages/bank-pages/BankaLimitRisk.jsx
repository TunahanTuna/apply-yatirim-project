import React from 'react'
import { useSelector } from 'react-redux'
import { ExcelTable } from '../../components'

export default function BankaLimitRisk() {
    const { banka_limit_risk } = useSelector((state) => state.bankReducer)

    return (
        banka_limit_risk && (
            <div className="w-full">
                <div className="flex flex-row gap-4 w-full">
                    <ExcelTable table_sheet={banka_limit_risk} />
                </div>
            </div>
        )
    )
}
