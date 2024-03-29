import React from 'react'

export default function DepreciationGroupSalesTable({ data }) {
    return (
        <div className="w-full">
            {data && (
                <table className="w-full">
                    <thead>
                        <tr className="bg-red-600 dark:bg-gray-900 dark:text-gray-200 text-white">
                            <th className="text-center text-lg" colSpan={3}>
                                {data[0][1]}
                            </th>
                        </tr>
                        <tr className="bg-red-400 dark:bg-gray-600 dark:text-gray-200 text-red-50 ">
                            {data[1].slice(1).map((data, index) => (
                                <th className="text-center" key={`data-${index}`}>
                                    {data}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="dark:text-gray-200">
                            {data[2].slice(1).map((data, index) => (
                                <th className="text-center" key={`body-${index}`}>
                                    {data.toLocaleString()}
                                </th>
                            ))}
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}
