import React, { useState, useEffect } from 'react'

import classNames from 'classnames'

export default function ExcelTable({ table_sheet, title, setChartData }) {
    return (
        <div className="dark:bg-gray-700  dark:border-gray-900 bg-neutral-50 px-4 pt-3 pb-4 rounded-sm border border-neutral-300 flex-1">
            <strong className="items-center justify-center flex text-indigo-950 font-bold text-xl w-full">
                {title && title}
            </strong>
            {table_sheet && (
                <div className="mt-3">
                    <table className="w-full text-gray-700 table-auto">
                        <thead className="dark:text-gray-400 dark:bg-gray-700">
                            <tr>
                                {table_sheet?.[0]?.slice(1).map((head, idx) => (
                                    <th
                                        className={classNames(
                                            idx != 0 ? 'text-right' : 'text-left',
                                            ' bg-indigo-950 border-b  dark:bg-gray-900 border-neutral-500 text-xs  text-indigo-50 font-bold'
                                        )}
                                        key={idx}
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table_sheet?.slice(1).map((dt, key) => (
                                <tr
                                    key={key}
                                    className="dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-100 bg-neutral-50 text-indigo-950 font-semibold"
                                    onClick={setChartData && setChartData(dt[key])}
                                >
                                    {dt.slice(1).map((row, idx) => (
                                        <td
                                            className={classNames(
                                                idx != 0 ? 'text-right' : 'text-left',
                                                dt[0] == 199 ||
                                                    dt[0] == 299 ||
                                                    dt[0] == 1000 ||
                                                    dt[0] == 399 ||
                                                    dt[0] == 499 ||
                                                    dt[0] == 599
                                                    ? 'bg-indigo-900 dark:bg-gray-600 text-indigo-50'
                                                    : null,
                                                // dt[0] == 299 ? 'bg-indigo-900 text-indigo-50' : null,
                                                dt[0] == 1000 || dt[0] == 2000 || dt[0] == 5000
                                                    ? 'bg-indigo-900 dark:bg-gray-500 text-indigo-50 font-bold'
                                                    : null,
                                                dt[0] == 3000
                                                    ? 'bg-indigo-800 dark:bg-gray-700 text-indigo-50 font-bold'
                                                    : null,
                                                'border-none p-2 text-xs'
                                            )}
                                            key={idx}
                                        >
                                            {dt[0] != 3000 && dt[0] != 2000 && dt[0] != 1000 && dt[0] != 5000
                                                ? row?.toLocaleString()
                                                : row}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
