import React from 'react'

export default function SalesVolumeTable({ main_title, sub_title, body, setSelected }) {
    const handleClick = (key) => {
        setSelected && setSelected(key)
    }
    return (
        <div>
            {main_title && sub_title && body && (
                <table className="w-full ">
                    <thead className="w-full">
                        <tr className="text-center w-full bg-red-600 text-white">
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
                        <tr className="bg-red-300 text-red-900">
                            {sub_title.slice(1).map((title, key) => (
                                <th className="text-center text-xs p-2" key={key}>
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=" w-full">
                        {body.map((data, index) => (
                            <tr key={`key${index} w-full`} onClick={() => handleClick(index)}>
                                {data.slice(1).map((dt, index) => (
                                    <td
                                        className={`${index != 0 ? 'text-center' : 'font-bold'} text-xs p-2`}
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
