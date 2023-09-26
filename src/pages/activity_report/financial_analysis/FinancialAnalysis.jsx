import axios from 'axios'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function FinancialAnalysis() {
    const data = axios('http://localhost:1337/uploads/YAZILIM_SPREAD_SABLONU_YAZILIM_3_220923_1_e004ab3585.xlsx').then(
        (res) => console.log(res)
    )
    const { pathname } = useLocation()
    return (
        <div className="w-full">
            {pathname && pathname == '/faaliyet-raporlari/mali-analiz-raporu' ? 'test' : null}

            {<Outlet />}
        </div>
    )
}
