import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'
import SpeedometerDashboard from '../../../components/dashboards/SpeedometerDashboard'

export default function DuranVarliklar() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const { ticari_alacaklar, maddi_duran_varliklar } =
        financial_analysis_report && financial_analysis_report?.duran_varliklar
    const chartLabels = maddi_duran_varliklar && maddi_duran_varliklar[0]
    const maddiDuranVarlikDevirHizi = ek && ek.find((data) => data[0] == 30005)

    const [selectedData, setSelectedData] = useState(maddi_duran_varliklar[1])
    return (
        <div className="w-full items-center justify-center flex gap-2">
            <div className="w-full flex flex-col gap-5 h-full">
                <div className="w-full  p-2 flex h-full">
                    <FinancialAnalysisTable data={ticari_alacaklar} setSelectedData={setSelectedData} />
                </div>
                <div className="w-full  p-2 flex h-full">
                    <FinancialAnalysisTable data={maddi_duran_varliklar} setSelectedData={setSelectedData} />
                </div>
            </div>

            <div className="w-full flex flex-col items-end justify-end h-full gap-2 opacity-90">
                <div className="w-full bg-red-50">
                    <FinancialAnalysisChart
                        data={selectedData}
                        labels={chartLabels}
                        setSelectedData={setSelectedData}
                    />
                </div>
                <SpeedometerDashboard
                    data={maddiDuranVarlikDevirHizi && maddiDuranVarlikDevirHizi}
                    color={'bg-red-50'}
                />
            </div>
        </div>
    )
}
