import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import ListPageRoute from '../../widgets/ListPageRoute'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function ActivityReport() {
    const { pathname } = useLocation()

    const keys = pathname.split('/')
    const pages = DASHBOARD_SIDEBAR_LINKS.find((data) => data.key == keys?.[1])?.subMenus?.map((data) => {
        return {
            key: data?.key,
            title: data?.label,
            path: data?.path,
            description: data?.description
        }
    })
    console.log(pages)
    return (
        <div className="w-full ">
            {pathname && pathname == '/faaliyet-raporlari' ? (
                <div className="w-full h-1/2 text-white grid grid-cols-2 p-4 ">
                    {pages.map((menu) => (
                        <ListPageRoute
                            key={menu.key}
                            title={menu.title}
                            description={menu.description}
                            path={menu.path}
                        />
                    ))}
                </div>
            ) : null}

            {<Outlet />}
        </div>
    )
}
