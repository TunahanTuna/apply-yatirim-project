import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function FinancialTables() {
    const { pathname } = useLocation()
    //TODO! BU SAYFA DİNAMİK HALE GETİRİLECEK!
    return (
        <div className="w-full ">
            {pathname && pathname == '/finansal-tablolar' ? (
                <div className="w-full gap-4 h-1/2 text-white grid lg:grid-cols-2 md:grid-cols-1  ">
                    <div className="dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-64 hover:bg-sky-800 hover:bg-opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-sky-900 ">
                        <Link
                            to={'/finansal-tablolar/bilanco'}
                            className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-sky-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Bilanço</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>
                    <div className=" dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-64 hover:bg-sky-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-sky-900">
                        <Link
                            to={'/finansal-tablolar/gelir-tablosu'}
                            className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-sky-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Gelir Tablosu</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>

                    <div className="dark:bg-gray-800 dark:hover:bg-gray-700  w-full h-64 hover:bg-sky-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-sky-900">
                        <Link
                            to={'/finansal-tablolar/rasyolar'}
                            className="w-full text-left flex flex-col items-center justify-center h-full  hover:no-underline text-sky-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Genel Rasyolar</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>
                    <div className="dark:bg-gray-800 dark:hover:bg-gray-700  w-full h-64 hover:bg-sky-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-sky-900">
                        <Link
                            to={'/finansal-tablolar/nakit-akim'}
                            className="w-full text-left flex flex-col items-center justify-center h-full  hover:no-underline text-sky-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Nakit Akım</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>
                </div>
            ) : null}

            {<Outlet />}
        </div>
    )
}
