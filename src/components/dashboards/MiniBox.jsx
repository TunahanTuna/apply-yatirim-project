import React from 'react'

export default function MiniBox({ data, onClick }) {
    const temp = data && data?.[5] && `%${parseFloat(data?.[5]) * 100}`
    const title = data && data?.[1]

    return (
        <div
            className="rounded-xl flex h-full flex-col gap-3 justify-center items-center w-full min-w-[20rem] bg-neutral-50  border border-gray-200"
            onClick={onClick}
        >
            <div className="border-b-2 rounded-t-xl p-1 flex justify-center items-center border-orange-600 w-full text-neutral-950 bg-orange-200 text-center text-xl font-bold">
                <span>{title && title}</span>
            </div>
            <div className="w-full flex flex-col  justify-center items-center  ">
                <div className="flex flex-col">
                    <div className="w-full text-left">
                        <span className="font-semibold text-2xl">{data?.[6]?.toLocaleString()}</span>
                    </div>
                    <div className="w-full text-base font-semibold text-left py-2">
                        <span className="font-medium">Değişim:</span>
                        <span className="text-green-500 pl-2">%{temp && percentParser(temp)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const percentParser = (temp) => temp && parseFloat(temp?.split('%')[1]).toFixed(2)
