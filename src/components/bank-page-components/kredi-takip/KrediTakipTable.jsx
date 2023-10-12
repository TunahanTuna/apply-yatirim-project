import classNames from 'classnames'
import { parse } from 'dotenv'
import moment from 'moment'
import React from 'react'

export default function KrediTakipTable({ data, setChartData }) {
    console.log(
        'data',
        data.map((dt) =>
            dt
                .slice(1)
                .map((date) =>
                    moment(date, 'DD/MM/YYYY')?._isValid && moment(date, 'DD/MM/YYYY')?._pf?.unusedInput?.length == 0
                        ? moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY')
                        : date
                )
        )
    )
    return (
        <div className="bg-neutral-50 px-4 pt-3 pb-4 rounded-sm border border-neutral-300 flex-1">
            {data && (
                <div className="mt-3">
                    <table className="w-full text-gray-700 table-auto">
                        <thead>
                            <tr>
                                {data?.[0]?.slice(1).map((head, idx) => (
                                    <th
                                        className={classNames(
                                            idx != 0 ? 'text-right' : 'text-left',
                                            'bg-indigo-950 border-b border-neutral-500 text-xs  text-indigo-50 font-bold'
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
                                    className="hover:bg-indigo-100 bg-neutral-50 text-indigo-950 font-semibold"
                                    onClick={setChartData && setChartData(dt[key])}
                                >
                                    {dt.slice(1).map((row, idx) => (
                                        <td
                                            className={classNames(
                                                idx != 0 ? 'text-right' : 'text-left',
                                                // dt[0] == 299 ? 'bg-indigo-900 text-indigo-50' : null,
                                                dt[0] == 3000 ? 'bg-indigo-800 text-indigo-50 font-bold' : null,
                                                'border-none p-2 text-xs',
                                                moment(row, 'DD/MM/YYYY')?._isValid &&
                                                    moment(row, 'DD/MM/YYYY')?._pf?.unusedInput?.length == 0
                                                    ? 'bg-red-300'
                                                    : ''
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
