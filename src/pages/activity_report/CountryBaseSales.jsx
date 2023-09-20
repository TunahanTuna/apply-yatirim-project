import React from 'react'
import { useSelector } from 'react-redux'
import CountryBaseSalesTable from '../../components/activity_report/country_base_sales/CountryBaseSalesTable'
import { useState } from 'react'

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
    console.log(country_base_sales)
    return (
        <div className="w-full p-2">
            <CountryBaseSalesTable header={tableHeader} body={tableBody} />
        </div>
    )
}
