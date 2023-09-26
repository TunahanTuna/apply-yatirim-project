import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DonutChart from '../../../components/dashboards/DonutChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'

export default function KisaVadeliYukumlulukler() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const { mali_borclar, ticari_borclar, yaygin_insaat_hakedis } =
        financial_analysis_report && financial_analysis_report?.kisa_vadeli_yabanci_kaynaklar
    const chartLabels = mali_borclar && mali_borclar[0]
    const KisaVadeliBorclar = ek && ek.find((data) => data[0] == 200017)
    const nakitKisaVadeYukumlulukler = ek && ek.find((data) => data[0] == 200021)
    const BorcDevir = ek && ek.find((data) => data[0] == 200032)

    const [selectedData, setSelectedData] = useState(mali_borclar[1])
    return (
        <div className="w-full items-center justify-center grid grid-cols-2 gap-2">
            <div className="w-full  p-2 flex flex-col h-full">
                <FinancialAnalysisTable data={mali_borclar} setSelectedData={setSelectedData} />
                <div className="w-full  flex h-full">
                    <FinancialAnalysisTable data={ticari_borclar} setSelectedData={setSelectedData} />
                </div>
            </div>
            <div className="w-full  flex flex-col items-center justify-center gap-2">
                <div className="w-9/12 bg-red-50">
                    <FinancialAnalysisChart
                        data={selectedData}
                        labels={chartLabels}
                        setSelectedData={setSelectedData}
                    />
                </div>
                <div className="w-9/12 bg-red-50">
                    <FinancialAnalysisChart data={BorcDevir} labels={chartLabels} setSelectedData={setSelectedData} />
                </div>
            </div>
            <div className="w-full  p-2">
                <FinancialAnalysisTable data={yaygin_insaat_hakedis} setSelectedData={setSelectedData} />
            </div>
            <div className="w-full min-h-[17rem] flex opacity-90 gap-2">
                <div className="w-full">
                    <DonutChart data={KisaVadeliBorclar && KisaVadeliBorclar} color="bg-red-50" />
                </div>
                <div className="w-full">
                    <DashboardBarChart
                        data={nakitKisaVadeYukumlulukler && nakitKisaVadeYukumlulukler}
                        color="bg-red-50"
                    />
                </div>
            </div>
        </div>
    )
}
