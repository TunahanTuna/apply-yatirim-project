import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../lib/constants/navigation'
export default function FinancialAnalysis() {
    const { pathname } = useLocation()
    //TODO! BU SAYFA DİNAMİK HALE GETİRİLECEK!
    const keys = pathname.split('/')
    const pages = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == keys?.[1])
        ?.subMenus?.find((data) => data.key == keys?.[2])
        ?.subMenus?.map((data) => {
            return {
                key: data?.key,
                title: data?.label,
                path: data?.path,
                description: data?.description
            }
        })

    return (
        <div className="w-full ">
            {pathname && pathname == '/faaliyet-raporlari/mali-analiz-raporu' ? (
                <div className="w-full h-1/2 text-white grid grid-cols-2 p-4 ">
                    {pages.map((menu) => (
                        <MenuRouter key={menu.key} title={menu.title} description={menu.description} path={menu.path} />
                    ))}
                </div>
            ) : null}

            {<Outlet />}
        </div>
    )
}

const MenuRouter = ({ title, description, path }) => {
    return (
        <div className="w-full h-64 hover:bg-red-800 hover:bg-opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-red-900 ">
            <Link
                to={path && path}
                className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-red-100"
            >
                <h1 className="text-4xl text-left w-full p-2">{title && title}</h1>
                <p className="text-left p-2">{description && description}</p>
            </Link>
        </div>
    )
}
