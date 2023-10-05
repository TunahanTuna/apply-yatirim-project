import React, { useState } from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { texts } from '../../lib/constants/constants'
import ApplyLogo from '../../assets/ApplyLogo'
import SideBarTabs from './SideBarTabs'

export default function Test() {
    const { pathname } = useLocation()

    const [open, setOpen] = useState(true)

    return (
        <div className="h-screen flex flex-col items-end justify-end ">
            <div
                className={`${
                    open ? 'w-48' : 'w-0'
                } xl:w-72 w-42 bg-sky-600 h-screen overflow-y-scroll relative duration-500`}
            >
                <div className="justify-center">
                    <h1
                        className={`text-white font-bold text-2xl text-center duration-200 pt-3 p-5 ${
                            !open && 'invisible'
                        }`}
                    >
                        <ApplyLogo />
                    </h1>
                </div>
                <div>
                    <SideBarTabs />
                </div>

                <div className="bg-sky-800 w-full">
                    <a href="/" onClick={() => localStorage.removeItem('persist:root')}>
                        {texts.clear_data_text}
                    </a>
                </div>
            </div>
        </div>
    )
}
