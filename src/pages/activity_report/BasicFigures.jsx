import React from 'react'
import { useSelector } from 'react-redux'

export default function BasicFigures() {
    const { basic_figures } = useSelector((state) => state.dataReducer)
    return (
        <div className="w-full flex flex-col">
            <div className="w-full text-center justify-center items-center font-bold text-4xl pt-10">
                <h1>Temel Rakamlar</h1>
            </div>
            <div className="w-full px-40  gap-10 h-full flex pt-20">
                <div className=" text-white text-4xl w-full flex justify-between flex-col gap-20">
                    <div className="text-right w-full  bg-red-400 p-10 rounded-3xl">
                        <h1 className="font-bold w-full text-md whitespace-nowrap p-2">{basic_figures[0][1]}</h1>
                        <span>{basic_figures[0][2].toLocaleString()}</span>
                    </div>
                    <div className="w-full text-right  bg-purple-400 p-10 rounded-3xl">
                        <h1 className="w-full text-md whitespace-nowrap p-2">{basic_figures[1][1]}</h1>
                        <span>{basic_figures[1][2].toLocaleString()}</span>
                    </div>
                    <div className="w-full text-right  bg-pink-400 p-10 rounded-3xl">
                        <h1 className="w-full text-md whitespace-nowrap p-2">{basic_figures[2][1]}</h1>
                        <span>{basic_figures[2][2].toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex items-center w-full justify-center">
                    <div className="bg-gray-500 text-white text-4xl p-32 rounded-full shadow-xl">
                        Şirket Bilgileri Gelecek
                    </div>
                </div>
                <div className=" text-white text-4xl w-full flex justify-between flex-col">
                    <div className="w-full text-left bg-blue-400 p-10 rounded-3xl">
                        <h1 className="w-full text-md whitespace-nowrap p-2">{basic_figures[3][1]}</h1>
                        <span>{basic_figures[3][2].toLocaleString()}</span>
                    </div>
                    <div className="w-full text-left bg-amber-400 p-10 rounded-3xl">
                        <h1 className="w-full text-md whitespace-nowrap p-2">{basic_figures[4][1]}</h1>
                        <span>{basic_figures[4][2].toLocaleString() * 100}</span>
                    </div>
                    <div className="w-full text-left bg-slate-400 p-10 rounded-3xl">
                        <h1 className="w-full text-md whitespace-nowrap p-2">{basic_figures[5][1]}</h1>
                        <span>{basic_figures[5][2].toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
