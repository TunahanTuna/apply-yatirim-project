import React, { useState } from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { texts } from '../../lib/constants/constants'

export default function Test() {
    const { pathname } = useLocation()

    const [open, setOpen] = useState(true)
    const [subMenuOpen, setSubMenuOpen] = useState({
        'finansal-tablolar': true,
        'oran-analizi': true,
        'faaliyet-raporlari': true
    }) // Ayrı alt menü durumlarını saklar
    const toggleSubMenu = (menuKey) => {
        setSubMenuOpen({
            ...subMenuOpen,
            [menuKey]: !subMenuOpen[menuKey] // İlgili menüyü açıp kapatır
        })
    }
    const toggleSidebar = () => {
        console.log(!open)
        setOpen(!open)
    }
    return (
        <div className="h-screen flex flex-col items-end justify-end">
            <div className={`${open ? 'w-48' : 'w-0'} lg:w-72  bg-sky-800 h-screen relative duration-500`}>
                <div className="justify-center">
                    <h1
                        className={`text-white font-medium text-2xl text-center duration-200 pt-3 ${
                            !open && 'invisible'
                        }`}
                    >
                        LOGO
                    </h1>
                </div>
                <ul className="pt-6">
                    {DASHBOARD_SIDEBAR_LINKS.map((Menu, index) => (
                        <div key={index}>
                            <Link
                                to={Menu?.path}
                                key={`sidebar-${index}`}
                                className={`${
                                    pathname === Menu.path ? 'text-white bg-sky-500' : 'text-neutral-400 '
                                } hover:no-underline flex rounded-md p-2 cursor-pointer hover:bg-sky-400 text-white text-sm items-center gap-x-4 active:bg-sky-600 ${
                                    Menu?.gap ? 'mt-9' : 'mt-2'
                                }`}
                            >
                                {Menu?.icon}
                                <span className="flex-1"> {Menu.label}</span>
                                {Menu?.subMenus && <BiDownArrow onClick={() => toggleSubMenu(Menu.key)} />}
                            </Link>
                            {Menu?.subMenus && subMenuOpen[Menu.key] && open && (
                                <ul>
                                    {Menu.subMenus.map((subMenuItem, idx) => (
                                        <Link
                                            to={subMenuItem.path}
                                            key={`sub-${idx}`}
                                            className={`${
                                                pathname === subMenuItem.path ? 'text-white bg-sky-500' : 'text-white '
                                            } hover:no-underline flex px-5 cursor-pointer items-center rounded-md text-left p-2 text-sm text-gray-200 py-1`}
                                        >
                                            {subMenuItem?.icon}
                                            <span className=" px-2"> {subMenuItem.label}</span>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="bg-sky-800 w-full">
                <a href="/" onClick={() => localStorage.removeItem('persist:root')}>
                    {texts.clear_data_text}
                </a>
            </div>
        </div>
    )
}
