import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

export default function BoxWrapper({ children, title, value, diff, bg }) {
    const style = `rounded-full h-12 w-12 flex items-center justify-center bg-${bg}-500`
    return (
        <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center hover:outline hover:outline-1 hover:outline-gray-300">
            <div className={style}>{children}</div>
            <div className="pl-4 ">
                <span className="text-sm text-gray-500 font-light">{title && title}</span>
                <div className="flex items-center">
                    <strong className="text-lg text-gray-700 font-semibold">{value && value}</strong>
                    <span className="text-sm text-green-500 pl-2">{diff && diff}</span>
                </div>
            </div>
        </div>
    )
}
