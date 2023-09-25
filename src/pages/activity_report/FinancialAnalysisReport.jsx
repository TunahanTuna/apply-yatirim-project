import React from 'react'
import { useSelector } from 'react-redux'

export default function FinancialAnalysisReport() {
    const { financial_analysis_report } = useSelector((state) => state.dataReducer)

    console.log(financial_analysis_report)
    return <div>FinancialAnalysisReport</div>
}
