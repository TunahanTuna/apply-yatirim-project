import React from 'react'
import { useSelector } from 'react-redux'

export default function DepreciationGroupSales() {
    const { depreciation_group_sales } = useSelector((state) => state.dataReducer)
    console.log(depreciation_group_sales)
    return <div>DepreciationGroupSales</div>
}
