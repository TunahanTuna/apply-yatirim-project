import React, { useState } from 'react'
import * as XLSX from 'xlsx' // XLSX kütüphanesini import edin veya gereksinimlerinize göre düzenleyin
import { setData } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux'

import path from 'path'

export default function ExcelTable() {
    const { summary_balance_sheet, summary_ratios } = useSelector((state) => state.dataReducer)
    const dispatch = useDispatch()
    const handleFileUpload = (e) => {
        // Yüklenen dosyayı alın
        const file = e.target.files[0]

        // Dosyayı okumak için bir FileReader oluşturun
        const reader = new FileReader()

        // Dosya okuma tamamlandığında bu işlev çalışır
        reader.onload = (e) => {
            dispatch(setData(e.target.result))
        }
        // Dosyayı ikili (binary) formatta okuyun
        reader.readAsBinaryString(file)
    }
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <input type="file" onChange={handleFileUpload} />
            <div className="mt-3">
                {summary_ratios.length == 0 ? (
                    <strong>Veri Gir</strong>
                ) : (
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr>
                                {summary_ratios[0].slice(1).map((head, idx) => (
                                    <td key={idx}>{head}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {summary_ratios.slice(1).map((dt, key) => (
                                <tr key={key} className="hover:bg-neutral-50">
                                    {dt.slice(1).map((row, idx) => (
                                        <td key={idx}>{row}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
