import React, { useState, useEffect } from 'react'

import classNames from 'classnames'

export default function LiquidTable({ table_sheet, title, setSelector }) {
    const handleClick = (key) => {
        setSelector && setSelector(key + 1)
    }
    return (
        <div className="bg-neutral-50 px-4 pt-3 pb-4 rounded-sm border border-neutral-300 flex-1">
            <strong className="items-center justify-center flex text-black font-medium text-2xl w-full">
                {title && title}
            </strong>
            {table_sheet && (
                <div className="mt-3">
                    <table className="w-full text-gray-700 rounded-3xl font-semibold">
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
                                <tr
                                    key={key}
                                    className="hover:bg-indigo-100 bg-neutral-50 text-indigo-950"
                                    onClick={() => handleClick(key)}
                                >
                                    {dt.slice(1).map((row, idx) => (
                                        <td
                                            className={classNames(
                                                idx != 0 ? 'text-right' : 'text-left',
                                                dt[0] == 10000 || dt[0] == 20000 || dt[0] == 30000 || dt[0] == 40000
                                                    ? 'bg-indigo-900 text-indigo-50 font-bold'
                                                    : null,
                                                dt[0] == 40001 || dt[0] == 40005 || dt[0] == 40011
                                                    ? 'bg-indigo-800 text-indigo-50 font-bold'
                                                    : null
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
            )}
        </div>
    )
}
