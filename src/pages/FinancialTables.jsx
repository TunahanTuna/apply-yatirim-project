import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { json } from 'react-router-dom'

const FinancialTables = () => {
    const { base_financial_dashboard } = useSelector((state) => state.dataReducer)
    console.log(base_financial_dashboard)
    return <div>{JSON.stringify(base_financial_dashboard)}</div>
}

export default FinancialTables
