import React from 'react'
import { useSelector } from 'react-redux'
import CountryBaseSalesTable from '../../components/activity_report/country_base_sales/CountryBaseSalesTable'
import CountryBaseSalesChart from '../../components/activity_report/country_base_sales/CountryBaseSalesChart'
import { motion } from 'framer-motion'

export default function CountryBaseSales() {
    const { country_base_sales } = useSelector((state) => state.dataReducer)
    const body = country_base_sales && country_base_sales?.filter((data) => data[0] != null)
    const tableBody = body && [
        ...body
            .slice(1)
            .map((data) =>
                data.map((dt) => (isNaN(parseFloat(dt)) || typeof dt == 'number' ? dt : parseFloat(dt) * 100))
            )
    ]
    const tableHeader = country_base_sales && country_base_sales?.find((data) => data[0] == '60000')

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="w-full justify-center flex flex-col p-2"
        >
            <div className="overflow-y-auto">
                <CountryBaseSalesTable header={tableHeader} body={tableBody} />
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-4">
                <div className="w-full text-center font-bold text-xl">
                    <h1>Ülke Bazlı Satış Grafiği</h1>
                </div>
                <div className="w-5/6">
                    <CountryBaseSalesChart header={tableHeader} body={tableBody} />
                </div>
            </div>
        </motion.div>
    )
}
