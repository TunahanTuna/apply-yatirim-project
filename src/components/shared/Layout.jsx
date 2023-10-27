import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import LoginPage from '../../pages/auth/login/LoginPage'

import { useState } from 'react'
import Cookies from 'universal-cookie'
import Header from './Header'
import { apiRequests } from '../../api/ApiRequests'
import { useEffect } from 'react'
export default function Layout() {
    const { summary_balance_sheet, summary_ratios } = useSelector((state) => state.dataReducer)
    const { key } = useSelector((state) => state.keyReducer)
    const cookies = new Cookies()
    const corpId = cookies.get('corp')
    const [jwtKey, setJwtKey] = useState(null)

    apiRequests(jwtKey)

    return (
        <div className="flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden">
            {summary_balance_sheet.length == 0 ? (
                <div>
                    <LoginPage setJwtKey={setJwtKey} />
                </div>
            ) : summary_balance_sheet.length != 0 ? (
                <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
                    <Sidebar />
                    <div className="flex-1 bg-neutral-100 overflow-y-scroll">
                        <Header />
                        <div className="p-4 ">{<Outlet />}</div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
