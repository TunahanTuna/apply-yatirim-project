import React from 'react'

export default function CorpInfoTablesShareRatios({ data, title }) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col pt-2">
                <div className="w-full flex p-2 justify-between bg-red-600 text-white text-md rounded-xs">
                    <div className="w-5/6 text-sm">
                        <strong>{title && title[1]}</strong>
                    </div>
                    <div className="flex justify-between w-full">
                        <strong className="w-full text-right">{title && title?.[2]}</strong>
                    </div>
                </div>

                <div className="w-full flex flex-col border-b-4 border-red-600">
                    {data &&
                        data.map((dt, idx) => (
                            <div key={idx} className={`dark:text-gray-200 flex justify-between w-full p-1 `}>
                                {dt.slice(1).map((row, idx) => (
                                    <div
                                        key={`idx-${idx}`}
                                        className={`${idx != 0 ? 'text-right' : 'text-left'} w-full`}
                                    >
                                        {typeof row == 'number' ? `%${row}` : row.toLocaleString()}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
