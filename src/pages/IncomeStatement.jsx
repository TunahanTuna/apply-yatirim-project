import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExcelTable from '../components/ExcelTable'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation'

export default function IncomeStatement() {
    const { summary_balance_sheet, summary_ratios, summary_income_statement } = useSelector(
        (state) => state.dataReducer
    )
    const title = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == 'gelir-tablosu')?.label
    return (
        <div className="flex gap-4 flex-col">
            <div className="flex flex-row gap-4 w-full">
                <ExcelTable table_sheet={summary_income_statement} title={title} />
            </div>
        </div>
    )
}
