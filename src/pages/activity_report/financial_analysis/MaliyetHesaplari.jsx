import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FinancialAnalysisTable from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisTable'
import FinancialAnalysisChart from '../../../components/activity_report/financial_analysis_report/FinancialAnalysisChart'
import BarCharts from '../../../components/BarCharts'
import DonutChart from '../../../components/dashboards/DonutChart'

export default function MaliyetHesaplari() {
    const { financial_analysis_report, ek } = useSelector((state) => state.dataReducer)
    const maaliyet_hesaplari = financial_analysis_report && financial_analysis_report?.maaliyet_hesaplari
    const chartLabels = maaliyet_hesaplari && maaliyet_hesaplari[0]
    const [selectedData, setSelectedData] = useState(maaliyet_hesaplari[1])

    const toplamHasilat = ek && ek.find((data) => data[0] == 200008)
    const ypHasilat = ek && ek.find((data) => data[0] == 200014)
    const tlHasilat = ek && ek.find((data) => data[0] == 200015)
    const favokMarj = ek && ek.find((data) => data[0] == 200022)
    return (
        maaliyet_hesaplari &&
        setSelectedData &&
        selectedData &&
        chartLabels &&
        toplamHasilat &&
        ypHasilat &&
        tlHasilat &&
        favokMarj && (
            <div className="w-full items-center justify-center flex flex-col gap-2">
                <div className="flex 2xl:flex-row flex-col w-full">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full  p-2 flex h-full">
                            <FinancialAnalysisTable data={maaliyet_hesaplari} setSelectedData={setSelectedData} />
                        </div>
                    </div>

                    <div className="w-full flex items-end justify-end h-full bg-red-50">
                        <FinancialAnalysisChart
                            data={selectedData}
                            labels={chartLabels}
                            setSelectedData={setSelectedData}
                        />
                    </div>
                </div>

                <div className="w-full grid 2xl:grid-cols-4 grid-cols-2 gap-2 pt-2">
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts data={toplamHasilat && toplamHasilat} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <DonutChart data={ypHasilat && ypHasilat} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <BarCharts data={tlHasilat && tlHasilat} color="bg-red-50" />
                    </div>
                    <div className="w-full flex items-end justify-end h-full">
                        <DonutChart data={favokMarj && favokMarj} color="bg-red-50" />
                    </div>
                </div>
            </div>
        )
    )
}
