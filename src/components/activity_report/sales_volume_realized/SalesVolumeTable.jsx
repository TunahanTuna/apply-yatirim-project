import React from 'react'

export default function SalesVolumeTable({ main_title, sub_title, body, setSelected }) {
    const handleClick = (key) => {
        setSelected && setSelected(key)
    }
    return (
        <div className="w-full">
            {main_title && sub_title && body && (
                <table className="w-full ">
                    <thead className="w-full">
                        <tr className="text-center w-full dark:bg-gray-900 dark:text-gray-200 bg-red-600 text-white">
                            <th></th>
                            {main_title.slice(1).map((title, key) => {
                                if (title != null)
                                    return (
                                        <th colSpan={2} className="text-center text-xs p-1" key={key}>
                                            {title}
                                        </th>
                                    )
                            })}
                        </tr>
                        <tr className="bg-red-300 dark:bg-gray-600 dark:text-gray-200 text-red-900">
                            {sub_title.slice(1).map((title, key) => (
                                <th className="text-center text-xs p-2" key={key}>
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=" w-full">
                        {body.map((data, index) => (
                            <tr
                                className="dark:text-gray-200 dark:hover:bg-gray-900 hover:bg-red-100"
                                key={`key${index} w-full`}
                                onClick={() => handleClick(index)}
                            >
                                {data.slice(1).map((dt, index) => (
                                    <td
                                        className={`${
                                            index != 0 ? 'text-center ' : 'font-bold whitespace-nowrap'
                                        } text-xs p-2`}
                                        key={`index${index}`}
                                    >
                                        <span className="w-full text-right text-xs">
                                            {parseFloat(dt) ? parseFloat(dt).toLocaleString() : dt}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
