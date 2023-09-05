import React, { useState, useEffect } from 'react'

import classNames from 'classnames'

export default function ExcelTable({ table_sheet, title }) {
    return (
        <div className="bg-black px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="items-center justify-center flex text-white font-medium text-xl w-full">
                {title && title}
            </strong>
            <div className="mt-3">
                <table className="w-full text-gray-700 rounded-3xl">
                    <thead>
                        <tr>
                            {table_sheet[0].slice(1).map((head, idx) => (
                                <td
                                    className={classNames(
                                        idx != 0 ? 'text-right' : 'text-left',
                                        'bg-indigo-950 text-indigo-50 font-bold'
                                    )}
                                    key={idx}
                                >
                                    {head}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table_sheet.slice(1).map((dt, key) => (
                            <tr key={key} className="hover:bg-neutral-800 bg-black text-white">
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
                                                ? 'bg-indigo-900 text-indigo-50'
                                                : null,
                                            // dt[0] == 299 ? 'bg-indigo-900 text-indigo-50' : null,
                                            dt[0] == 1000 || dt[0] == 2000 || dt[0] == 5000
                                                ? 'bg-indigo-900 text-indigo-50 font-bold'
                                                : null,
                                            dt[0] == 3000 ? 'bg-blue-800 text-indigo-50 font-bold' : null
                                        )}
                                        key={idx}
                                    >
                                        {row?.toLocaleString()}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
