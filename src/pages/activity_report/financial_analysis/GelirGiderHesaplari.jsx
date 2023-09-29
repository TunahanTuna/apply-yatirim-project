import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DonutChart from '../../../components/dashboards/DonutChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'

export default function GelirGiderHesaplari() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const diger_gelir_ve_gider_hesaplari =
        financial_analysis_report && financial_analysis_report?.diger_gelir_ve_gider_hesaplari
    const chartLabels = diger_gelir_ve_gider_hesaplari && diger_gelir_ve_gider_hesaplari[0]
    const [selectedData, setSelectedData] = useState(diger_gelir_ve_gider_hesaplari[1])

    const borcServis = ek && ek.find((data) => data[0] == 200013)
    const uzunVadelFinansalBorc = ek && ek.find((data) => data[0] == 200018)
    const vergiOncesiKar = ek && ek.find((data) => data[0] == 200027)
    return (
        diger_gelir_ve_gider_hesaplari &&
        setSelectedData &&
        selectedData &&
        chartLabels &&
        borcServis &&
        vergiOncesiKar &&
        uzunVadelFinansalBorc && (
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex 2xl:flex-row flex-col">
                    <div className="w-full  flex flex-col gap-5">
                        <FinancialAnalysisTable
                            data={diger_gelir_ve_gider_hesaplari}
                            setSelectedData={setSelectedData}
                        />
                    </div>

                    <div className="w-full flex items-end justify-end h-full bg-red-50">
                        <FinancialAnalysisChart
                            data={selectedData}
                            labels={chartLabels}
                            setSelectedData={setSelectedData}
                        />
                    </div>
                </div>
                <div className="w-full grid 2xl:grid-cols-3 grid-cols-1 gap-2 pt-2">
                    <div className="w-full flex items-end justify-end min-h-[20rem]">
                        <DonutChart data={borcServis && borcServis} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <DashboardBarChart data={vergiOncesiKar && vergiOncesiKar} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end min-h-[20rem]">
                        <DonutChart data={uzunVadelFinansalBorc && uzunVadelFinansalBorc} color="bg-red-50" />
                    </div>
                </div>
            </div>
        )
    )
}
