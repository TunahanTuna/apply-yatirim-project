import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'

export default function MaliyetHesaplari() {
    const { financial_analysis_report } = useSelector((state) => state.dataReducer)
    const maaliyet_hesaplari = financial_analysis_report && financial_analysis_report?.maaliyet_hesaplari
    const chartLabels = maaliyet_hesaplari && maaliyet_hesaplari[0]
    const [selectedData, setSelectedData] = useState(maaliyet_hesaplari[1])
    return (
        <div className="w-full items-center justify-center flex gap-2">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full  p-2 flex h-full">
                    <FinancialAnalysisTable data={maaliyet_hesaplari} setSelectedData={setSelectedData} />
                </div>
            </div>

            <div className="w-full flex items-end justify-end h-full">
                <FinancialAnalysisChart data={selectedData} labels={chartLabels} setSelectedData={setSelectedData} />
            </div>
        </div>
    )
}
