import React from 'react'

export default function MiniBox({ data }) {
    const temp = data && data?.[5] && `%${parseFloat(data?.[5]) * 100}`
    const title = data && data?.[1]
    return (
        <div className="rounded-md flex flex-col gap-3 justify-center items-center w-full bg-neutral-200 min-w-[20rem]">
            <span className=" border-b-2 border-neutral-300 w-full text-center text-xl font-bold px-4">{title}</span>
            <div className="w-full flex flex-col  justify-center items-center">
                <div className="flex flex-col">
                    <div className="w-full text-left">
                        <span className="font-semibold text-2xl">{data?.[6]?.toLocaleString()}</span>
                    </div>
                    <div className="w-full text-xs font-semibold text-left py-2">
                        <span className="font-medium">Değişim:</span>
                        <span className="text-green-500 pl-2">{temp}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
