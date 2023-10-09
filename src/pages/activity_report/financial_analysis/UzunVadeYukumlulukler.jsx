import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import BarCharts from '../../../components/BarCharts'

export default function UzunVadeYukumlulukler() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const { mali_borclar, ticari_borclar } =
        financial_analysis_report && financial_analysis_report?.uzun_vadeli_yabanci_kaynaklar
    const chartLabels = mali_borclar && mali_borclar[0]
    const [selectedData, setSelectedData] = useState(mali_borclar[1])

    const Favok = ek && ek.find((data) => data[0] == 200018)

    return (
        mali_borclar &&
        setSelectedData &&
        ticari_borclar &&
        selectedData &&
        chartLabels &&
        Favok && (
            <div className="w-full items-center justify-center flex flex-col gap-2">
                <div className="w-full grid xl:grid-cols-2 grid-cols-1">
                    <div className="w-full flex flex-col">
                        <div className="w-full  p-2 flex h-full">
                            <FinancialAnalysisTable data={mali_borclar} setSelectedData={setSelectedData} />
                        </div>
                    </div>
                    <div className="w-full  p-2 flex h-full">
                        <FinancialAnalysisTable data={ticari_borclar} setSelectedData={setSelectedData} />
                    </div>
                </div>
                <div className="w-full grid h-full gap-2 p-2  xl:grid-cols-2 grid-cols-1">
                    <div className="w-full bg-red-50">
                        <FinancialAnalysisChart
                            data={selectedData}
                            labels={chartLabels}
                            setSelectedData={setSelectedData}
                        />
                    </div>
                    <BarCharts data={Favok && Favok} color="bg-red-50" />
                </div>
            </div>
        )
    )
}
