import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'

export default function GelirGiderHesaplari() {
    const { financial_analysis_report } = useSelector((state) => state.dataReducer)
    const diger_gelir_ve_gider_hesaplari =
        financial_analysis_report && financial_analysis_report?.diger_gelir_ve_gider_hesaplari
    const chartLabels = diger_gelir_ve_gider_hesaplari && diger_gelir_ve_gider_hesaplari[0]
    const [selectedData, setSelectedData] = useState(diger_gelir_ve_gider_hesaplari[1])
    return (
        <div className="w-full items-center justify-center flex gap-2">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full  p-2 flex h-full">
                    <FinancialAnalysisTable data={diger_gelir_ve_gider_hesaplari} setSelectedData={setSelectedData} />
                </div>
            </div>

            <div className="w-full flex items-end justify-end h-full">
                <FinancialAnalysisChart data={selectedData} labels={chartLabels} setSelectedData={setSelectedData} />
            </div>
        </div>
    )
}
