import axios from 'axios'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Factory } from '../../../assets/icons'
export default function FinancialAnalysis() {
    const { pathname } = useLocation()
    return (
        <div className="w-full">
            {pathname && pathname == '/faaliyet-raporlari/mali-analiz-raporu' ? (
                <div className="w-full">
                    <h1>TEST</h1>
                </div>
            ) : null}

            {<Outlet />}
        </div>
    )
}
