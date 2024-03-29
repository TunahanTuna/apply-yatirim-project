import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import BarCharts from '../../../components/BarCharts'

export default function GelirHesaplari() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const gelir_hesaplari = financial_analysis_report && financial_analysis_report?.gelir_hesaplari
    const chartLabels = gelir_hesaplari && gelir_hesaplari[0]
    const [selectedData, setSelectedData] = useState(gelir_hesaplari[2])

    const toplamHasilat = ek && ek.find((data) => data[0] == 200004)
    const ypHasilat = ek && ek.find((data) => data[0] == 200006)
    const tlHasilat = ek && ek.find((data) => data[0] == 200005)
    const table_title = ek && ek?.find((data) => data[0] == 200000)

    return (
        gelir_hesaplari &&
        setSelectedData &&
        selectedData &&
        chartLabels &&
        toplamHasilat &&
        ypHasilat &&
        tlHasilat && (
            <div className="w-full items-center justify-center flex flex-col gap-2">
                <div className="flex 2xl:flex-row flex-col w-full">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full  p-2 flex h-full">
                            <FinancialAnalysisTable data={gelir_hesaplari} setSelectedData={setSelectedData} />
                        </div>
                    </div>

                    <div className="w-full flex items-end justify-end h-full">
                        <FinancialAnalysisChart
                            data={selectedData}
                            labels={chartLabels}
                            setSelectedData={setSelectedData}
                        />
                    </div>
                </div>
                <div className="w-full grid 2xl:grid-cols-3 grid-cols-1 gap-2 pt-2">
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts
                            data={toplamHasilat && toplamHasilat}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts
                            data={ypHasilat && ypHasilat}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts
                            data={tlHasilat && tlHasilat}
                            color="bg-red-50"
                            table_title={table_title && table_title}
                        />
                    </div>
                </div>
            </div>
        )
    )
}
