import React from 'react'

export default function DashboardStatsGrid() {
    return (
        <div className="flex gap-4 w-full">
            <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center">a</div>
            <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center">b</div>
            <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center">c</div>
            <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center">d</div>
        </div>
    )
}
function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm flex-1 p-4 border border-gray-200 flex items-center">{children}</div>
}
