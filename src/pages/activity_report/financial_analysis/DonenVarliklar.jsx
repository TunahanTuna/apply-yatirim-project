import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'
export default function DonenVarliklar() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const { hazir_degerler, ticari_alacaklar, stoklar } =
        financial_analysis_report && financial_analysis_report?.donen_varliklar
    const chartLabels = hazir_degerler && hazir_degerler[0]
    const cariOran = ek && ek.find((data) => data[0] == 200019)
    const [selectedData, setSelectedData] = useState(hazir_degerler[1])
    return (
        <div className="w-full items-center justify-center grid grid-cols-2 gap-2">
            <div className="w-full  p-2 flex h-full">
                <FinancialAnalysisTable data={hazir_degerler} setSelectedData={setSelectedData} />
                <DashboardBarChart data={cariOran && cariOran} />
            </div>
            <div className="w-full  p-2 flex h-full">
                <FinancialAnalysisTable data={ticari_alacaklar} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full  p-2">
                <FinancialAnalysisTable data={stoklar} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full">
                <FinancialAnalysisChart data={selectedData} labels={chartLabels} setSelectedData={setSelectedData} />
            </div>
        </div>
    )
}
