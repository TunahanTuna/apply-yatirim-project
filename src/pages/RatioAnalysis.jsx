import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function RatioAnalysis() {
    const { pathname } = useLocation()

    return (
        <div className="w-full ">
            {pathname && pathname == '/oran-analizi' ? (
                <div className="w-full h-1/2 text-white grid grid-cols-2  ">
                    <div className="w-full h-64 hover:bg-blue-800 hover:bg-opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-blue-900 ">
                        <Link
                            to={'/oran-analizi/likidite-oranlari'}
                            className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-blue-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Likidite Oranları</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>
                    <div className="w-full h-64 hover:bg-blue-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-blue-900">
                        <Link
                            to={'/oran-analizi/finansal-yapi-oranlari'}
                            className="w-full text-left flex flex-col items-center justify-center h-full m-4 hover:no-underline text-blue-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Finansal Yapı Oranları</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>

                    <div className="w-full h-64 hover:bg-blue-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-blue-900">
                        <Link
                            to={'/oran-analizi/devir-hizlari'}
                            className="w-full text-left flex flex-col items-center justify-center h-full  hover:no-underline text-blue-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Devir Hızları</h1>
                            <p className="text-left p-2">
                                Bilanço şirketin finansal yapısını analiz etmenizi sağlar. Firma bilançosu şirketin
                                sahip olduğu varlıkları ve bu varlıkların elde edilmesinde kullanılan kaynakları
                                gösterir
                            </p>
                        </Link>
                    </div>
                    <div className="w-full h-64 hover:bg-blue-800 hover:opacity-80 backdrop-blur-lg border rounded-xl border-gray-50 bg-blue-900">
                        <Link
                            to={'/oran-analizi/karlilik-oranlari'}
                            className="w-full text-left flex flex-col items-center justify-center h-full  hover:no-underline text-blue-100"
                        >
                            <h1 className="text-4xl text-left w-full p-2">Karlılık Oranları</h1>
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
