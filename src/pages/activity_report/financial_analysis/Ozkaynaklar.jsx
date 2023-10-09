import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DonutChart from '../../../components/dashboards/DonutChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'
import BarCharts from '../../../components/BarCharts'
export default function Ozkaynaklar() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const ozkaynaklar = financial_analysis_report && financial_analysis_report?.ozkaynaklar
    const chartLabels = ozkaynaklar && ozkaynaklar[0]
    const [selectedData, setSelectedData] = useState(ozkaynaklar[1])

    const ToplamVarlik = ek && ek.find((data) => data[0] == 200001)
    const OzkaynakTutari = ek && ek.find((data) => data[0] == 200002)
    const ToplamVarlikOzkaynak = ek && ek.find((data) => data[0] == 200012)
    const OzkaynakKarlilik = ek && ek.find((data) => data[0] == 200025)

    return (
        ozkaynaklar &&
        setSelectedData &&
        selectedData &&
        chartLabels &&
        ToplamVarlik &&
        OzkaynakTutari &&
        ToplamVarlikOzkaynak &&
        OzkaynakKarlilik && (
            <div className="w-full items-center justify-center flex flex-col gap-2">
                <div className="w-full items-center justify-center 2xl:flex grid grid-cols-1 gap-2">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full p-2 flex h-full overflow-y-auto">
                            <FinancialAnalysisTable data={ozkaynaklar} setSelectedData={setSelectedData} />
                        </div>
                    </div>

                    <div className="w-full  h-full bg-red-50">
                        <FinancialAnalysisChart
                            data={selectedData}
                            labels={chartLabels}
                            setSelectedData={setSelectedData}
                        />
                    </div>
                </div>
                <div className="w-full grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 p-2 gap-2 opacity-90">
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts data={ToplamVarlik && ToplamVarlik} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts data={OzkaynakTutari && OzkaynakTutari} color="bg-red-50" />
                    </div>
                    <div className="w-full">
                        <DonutChart data={ToplamVarlikOzkaynak && ToplamVarlikOzkaynak} color="bg-red-50" />
                    </div>
                    <div className="w-full">
                        <DashboardBarChart data={OzkaynakKarlilik && OzkaynakKarlilik} color="bg-red-50" />
                    </div>
                </div>
            </div>
        )
    )
}
