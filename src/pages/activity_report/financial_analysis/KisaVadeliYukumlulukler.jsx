import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'

export default function KisaVadeliYukumlulukler() {
    const { financial_analysis_report } = useSelector((state) => state.dataReducer)
    const { mali_borclar, ticari_borclar, yaygin_insaat_hakedis } =
        financial_analysis_report && financial_analysis_report?.kisa_vadeli_yabanci_kaynaklar
    const chartLabels = mali_borclar && mali_borclar[0]

    const [selectedData, setSelectedData] = useState(mali_borclar[1])
    return (
        <div className="w-full items-center justify-center grid grid-cols-2 gap-2">
            <div className="w-full  p-2 flex h-full">
                <FinancialAnalysisTable data={mali_borclar} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full  p-2 flex h-full">
                <FinancialAnalysisTable data={ticari_borclar} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full  p-2">
                <FinancialAnalysisTable data={yaygin_insaat_hakedis} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full">
                <FinancialAnalysisChart data={selectedData} labels={chartLabels} setSelectedData={setSelectedData} />
            </div>
        </div>
    )
}
