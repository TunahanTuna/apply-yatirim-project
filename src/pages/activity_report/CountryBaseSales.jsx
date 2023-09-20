import React from 'react'
import { useSelector } from 'react-redux'
import CountryBaseSalesTable from '../../components/activity_report/country_base_sales/CountryBaseSalesTable'
import { useState } from 'react'
import CountryBaseSalesChart from '../../components/activity_report/country_base_sales/CountryBaseSalesChart'

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

    const [selected, setSelected] = useState(0)
    return (
        <div className="w-full justify-center flex flex-col p-2">
            <div>
                <CountryBaseSalesTable header={tableHeader} body={tableBody} setSelected={setSelected} />
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-4">
                <div className="w-full text-center font-bold text-xl">
                    <h1>Ülke Bazlı Satış Grafiği</h1>
                </div>
                <div className="w-4/6">
                    <CountryBaseSalesChart header={tableHeader} body={tableBody[selected]} />
                </div>
            </div>
        </div>
    )
}
