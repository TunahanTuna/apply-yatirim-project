import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
export default function Sidebar() {
    return (
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={32} />
                <span className="text-neutral-100 text-lg">Apply Yatırım</span>
            </div>
            <div className="flex justify-center items-center px-1 py-3 pb-0">
                <span className="text-neutral-100 text-lg">Firma Kodu</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div>
                <a href="/" onClick={() => localStorage.removeItem('persist:root')}>
                    Clear Data
                </a>
            </div>
        </div>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()
    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? 'text-white bg-neutral-700' : 'text-neutral-400',
                linkClasses
            )}
        >
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
