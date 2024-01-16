import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IncomeStatementSummaryTable from '../components/financial_tables_components/IncomeStatementSummaryTable'
import IncomeStatementSummaryHeader from '../components/financial_tables_components/IncomeStatementSummaryHeader'
import BalanceSummaryTable from '../components/financial_tables_components/BalanceSummaryTable'
import BaseIndicatorSummaryTable from '../components/financial_tables_components/BaseIndicatorSummaryTable'
import FinancialTablesChart from '../components/financial_tables_components/FinancialTableChart'

const FinancialIndicators = () => {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)
    const title = base_financial_dashboard.find((dt) => dt[0] == 10100)
    const NetSatislar = base_financial_dashboard.find((dt) => dt[0] == 619)
    const BrutKar = base_financial_dashboard.find((dt) => dt[0] == 629)

    return (
        <div className=" dark:text-gray-300 w-full h-screen flex flex-col 2xl:flex-row p-2 ">
            <div className="w-full flex flex-col flex-1">
                <div className="w-full text-3xl dark:text-red-800 text-red-800 flex items-center justify-center">
                    <strong>Temel Finansal Göstergeler</strong>
                </div>
                <div className="w-full p-10 justify-center items-center flex flex-col min-w-fit ">
                    <div className="w-full ">
                        <IncomeStatementSummaryHeader />
                    </div>
                    <div className="w-full ">
                        <IncomeStatementSummaryTable />
                    </div>
                    <div className="pt-4 w-full">
                        <BalanceSummaryTable />
                    </div>
                    <div className="pt-4 w-full">
                        <BaseIndicatorSummaryTable />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col w-full  ">
                <div className="w-full text-3xl dark:text-red-800 text-red-800 flex items-center text-center justify-center">
                    <strong>Özet Faaliyet Sonuçları</strong>
                </div>
                <div className=" grid grid-cols-2 w-full h-1/2 pt-7">
                    <FinancialTablesChart data={NetSatislar} table_title={title} />
                    <FinancialTablesChart data={BrutKar} table_title={title} />
                    <FinancialTablesChart data={NetSatislar} table_title={title} />
                    <FinancialTablesChart data={NetSatislar} table_title={title} />
                    <FinancialTablesChart data={BrutKar} table_title={title} />
                    <FinancialTablesChart data={NetSatislar} table_title={title} />
                </div>
            </div>
        </div>
    )
}

export default FinancialIndicators
