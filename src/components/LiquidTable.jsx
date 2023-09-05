import React, { useState, useEffect } from 'react'

import classNames from 'classnames'

export default function LiquidTable({ table_sheet, title }) {
    return (
        <div className="bg-black px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="items-center justify-center flex text-white font-medium text-xl w-full">
                {title && title}
            </strong>
            {table_sheet && (
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
                                                dt[0] == 10000 || dt[0] == 20000 || dt[0] == 30000 || dt[0] == 40000
                                                    ? 'bg-indigo-900 text-indigo-50 font-bold'
                                                    : null,
                                                dt[0] == 40001 || dt[0] == 40005 || dt[0] == 40011
                                                    ? 'bg-indigo-500 text-indigo-50 font-bold'
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
