import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'

export default function OlagandisiGelirKar() {
    const { financial_analysis_report } = useSelector((state) => state.dataReducer)
    const olagandisi_gelir_kar = financial_analysis_report && financial_analysis_report?.olagandisi_gelir_kar

    const chartLabels = olagandisi_gelir_kar && olagandisi_gelir_kar[0]
    const [selectedData, setSelectedData] = useState(olagandisi_gelir_kar[1])
    return (
        <div className="w-full items-center justify-center flex gap-2">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full  p-2 flex h-full">
                    <FinancialAnalysisTable data={olagandisi_gelir_kar} setSelectedData={setSelectedData} />
                </div>
            </div>

            <div className="w-full flex items-end justify-end h-full">
                <FinancialAnalysisChart data={selectedData} labels={chartLabels} setSelectedData={setSelectedData} />
            </div>
        </div>
    )
}
