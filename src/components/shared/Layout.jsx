import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { TableInput } from '../index'
import Test from './Test'
import LoginPage from '../../pages/auth/login/LoginPage'
export default function Layout() {
    const { summary_balance_sheet, summary_ratios } = useSelector((state) => state.dataReducer)
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            {summary_balance_sheet.length == 0 ? (
                <LoginPage />
            ) : (
                <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
                    <Test />
                    <div className="flex-1 bg-neutral-100 overflow-y-scroll">
                        {/* <Header /> */}
                        <div className="p-4 ">{<Outlet />}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
