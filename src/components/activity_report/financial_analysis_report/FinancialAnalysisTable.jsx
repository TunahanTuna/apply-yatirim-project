import classNames from 'classnames'
import React from 'react'

export default function FinancialAnalysisTable({ data, setSelectedData }) {
    const tableHeader = data && data[0].slice(1)
    const tableBody = data && data?.slice(1).filter((data) => data?.[2] != 0 || data?.[3] != 0 || data?.[4] != 0)
    tableBody.pop()
    const description = data && data?.[data.length - 1]?.slice(1)
    const toggleRow = (tbody) => {
        setSelectedData && setSelectedData(tbody)
    }
    const excLocaleString = (data) => (typeof data == 'number' ? data.toLocaleString() : data)
    return (
        <div className="w-full flex flex-col">
            <table className="w-full">
                <thead>
                    <tr className="bg-red-600 dark:bg-gray-900 dark:text-gray-200 text-white">
                        {tableHeader &&
                            tableHeader.map((data, index) =>
                                data == null ? (
                                    <th key={`header-${index}`} colSpan={1}></th>
                                ) : (
                                    <th
                                        className={classNames(index == 0 ? 'text-left' : 'text-right', 'p-1')}
                                        key={`header-${index}`}
                                    >
                                        {data}
                                    </th>
                                )
                            )}
                    </tr>
                </thead>
                <tbody>
                    {tableBody &&
                        tableBody?.map((tbody, index) => (
                            <tr
                                key={`body-${index}`}
                                className={classNames(
                                    tbody[0] == 250000 ||
                                        tbody[0] == 250016 ||
                                        tbody[0] == 250025 ||
                                        tbody[0] == 250039 ||
                                        tbody[0] == 250048 ||
                                        tbody[0] == 250060 ||
                                        tbody[0] == 250064 ||
                                        tbody[0] == 250077 ||
                                        tbody[0] == 250120 ||
                                        tbody[0] == 250153 ||
                                        tbody[0] == 250183 ||
                                        tbody[0] == 250216 ||
                                        tbody[0] == 250226 ||
                                        tbody[0] == 250273 ||
                                        tbody[0] == 250307
                                        ? 'bg-red-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-red-950 font-semibold'
                                        : '',
                                    tbody[0] == 250001 ||
                                        tbody[0] == 250078 ||
                                        tbody[0] == 250085 ||
                                        tbody[0] == 250095 ||
                                        tbody[0] == 250109 ||
                                        tbody[0] == 250121 ||
                                        tbody[0] == 250131 ||
                                        tbody[0] == 250137 ||
                                        tbody[0] == 250141 ||
                                        tbody[0] == 250154 ||
                                        tbody[0] == 250167 ||
                                        tbody[0] == 250174 ||
                                        tbody[0] == 250184 ||
                                        tbody[0] == 250190 ||
                                        tbody[0] == 250201 ||
                                        tbody[0] == 250207 ||
                                        tbody[0] == 250213 ||
                                        tbody[0] == 250217 ||
                                        tbody[0] == 250227 ||
                                        tbody[0] == 250238 ||
                                        tbody[0] == 250245 ||
                                        tbody[0] == 250254 ||
                                        tbody[0] == 250257 ||
                                        tbody[0] == 250260 ||
                                        tbody[0] == 250264 ||
                                        tbody[0] == 250274 ||
                                        tbody[0] == 250279 ||
                                        tbody[0] == 250290 ||
                                        tbody[0] == 250297 ||
                                        tbody[0] == 250299 ||
                                        tbody[0] == 250301 ||
                                        tbody[0] == 250308 ||
                                        tbody[0] == 250312 ||
                                        tbody[0] == 250320 ||
                                        tbody[0] == 250325 ||
                                        tbody[0] == 250334 ||
                                        tbody[0] == 250327 ||
                                        tbody[0] == 250339 ||
                                        tbody[0] == 250367 ||
                                        tbody[0] == 250370 ||
                                        tbody[0] == 250378
                                        ? 'bg-red-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 text-red-950'
                                        : '',
                                    'text-red-950  dark:hover:bg-gray-600 dark:text-gray-200 hover:bg-red-100'
                                )}
                                onClick={() => toggleRow(tbody)}
                            >
                                {tbody &&
                                    tbody?.slice(1)?.map((data, index) => (
                                        <td
                                            className={classNames(index == 0 ? 'text-left' : 'text-right', 'p-1')}
                                            key={`td-${index}`}
                                        >
                                            {excLocaleString(data)}
                                        </td>
                                    ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="dark:text-gray-200 w-full text-justify px-2 pt-4 text-sm font-semibold">
                {description[0]}
            </div>
        </div>
    )
}
