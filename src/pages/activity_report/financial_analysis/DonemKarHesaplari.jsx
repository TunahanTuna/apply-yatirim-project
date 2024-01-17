import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import DashboardBarChart from '../../../components/dashboards/DashboardRatioChart'
import { BarCharts } from '../../../components'

export default function DonemKarHesaplari() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const donem_kar_hesaplari = financial_analysis_report && financial_analysis_report?.donem_kar_hesaplari
    const chartLabels = donem_kar_hesaplari && donem_kar_hesaplari[0]
    const [selectedData, setSelectedData] = useState(donem_kar_hesaplari[1])

    const vergiOncesiKar = ek && ek.find((data) => data[0] == 200024)
    const aktifKarlilik = ek && ek.find((data) => data[0] == 200026)
    const OzkaynakKarlilik = ek && ek.find((data) => data[0] == 200025)
    const table_title = ek && ek?.find((data) => data[0] == 200000)

    return (
        donem_kar_hesaplari &&
        setSelectedData &&
        selectedData &&
        chartLabels &&
        vergiOncesiKar &&
        OzkaynakKarlilik &&
        aktifKarlilik && (
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex 2xl:flex-row flex-col">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full  p-2 flex h-full">
                            <FinancialAnalysisTable
                                data={donem_kar_hesaplari && donem_kar_hesaplari}
                                setSelectedData={setSelectedData}
                            />
                        </div>
                    </div>

                    <div className="w-full flex items-end justify-end h-full dark:bg-gray-800 bg-red-50">
                        <FinancialAnalysisChart
                            data={selectedData && selectedData}
                            labels={chartLabels && chartLabels}
                            setSelectedData={setSelectedData && setSelectedData}
                        />
                    </div>
                </div>

                <div className="w-full grid 2xl:grid-cols-3 grid-cols-1  gap-2 pt-2">
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts
                            data={vergiOncesiKar && vergiOncesiKar}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <DashboardBarChart
                            data={OzkaynakKarlilik && OzkaynakKarlilik}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <DashboardBarChart
                            data={aktifKarlilik && aktifKarlilik}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                </div>
            </div>
        )
    )
}
