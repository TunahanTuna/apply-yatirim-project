import axios from 'axios'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import * as XLSX from 'xlsx'

export default function FinancialAnalysis() {
    const { pathname } = useLocation()
    return (
        <div className="w-full">
            {pathname && pathname == '/faaliyet-raporlari/mali-analiz-raporu' ? 'test' : null}

            {<Outlet />}
        </div>
    )
}
