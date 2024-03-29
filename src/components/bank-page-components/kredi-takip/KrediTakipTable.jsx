import classNames from 'classnames'
import { parse } from 'dotenv'
import moment from 'moment'
import React from 'react'

export default function KrediTakipTable({ data, setChartData }) {
    return (
        <div className="dark:bg-gray-700  dark:border-gray-900 bg-neutral-50 px-4 pt-3 pb-4 rounded-sm border border-neutral-300 flex-1">
            {data && (
                <div className="mt-3">
                    <table className="w-full text-gray-700 table-auto">
                        <thead>
                            <tr>
                                {data?.[0]?.slice(1).map((head, idx) => (
                                    <th
                                        className={classNames(
                                            idx != 0 ? 'text-right' : 'text-left',
                                            'dark:bg-gray-900 bg-indigo-950 border-b border-neutral-500 text-xs  text-indigo-50 font-bold'
                                        )}
                                        key={idx}
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.slice(1).map((dt, key) => (
                                <tr
                                    key={key}
                                    className={classNames(
                                        'dark:hover:bg-gray-900 dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-100 bg-neutral-50 text-indigo-950 font-semibold',
                                        moment(dt?.[1], 'DD/MM/YYYY')?._isValid &&
                                            moment(dt?.[1], 'DD/MM/YYYY')?._pf?.unusedInput?.length == 0
                                            ? 'bg-green-200'
                                            : ''
                                    )}
                                    onClick={setChartData && setChartData(dt[key])}
                                >
                                    {dt.slice(1).map((row, idx) => (
                                        <td
                                            className={classNames(
                                                idx != 0 ? 'text-right' : 'text-left',
                                                // dt[0] == 299 ? 'bg-indigo-900 text-indigo-50' : null,
                                                dt[0] == 3000 ? 'bg-indigo-800 text-indigo-50 font-bold' : null,
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
