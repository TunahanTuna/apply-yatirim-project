import React, { useState } from 'react'
import * as XLSX from 'xlsx' // XLSX kütüphanesini import edin veya gereksinimlerinize göre düzenleyin
import path from 'path'
// Dummy Data
const dummyData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '2022-05-14T03:24:00',
        order_total: '$876.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]
export default function ExcelTable() {
    const [data, setData] = useState([])
    const handleFileUpload = (e) => {
        // Yüklenen dosyayı alın
        const file = e.target.files[0]

        // Dosyayı okumak için bir FileReader oluşturun
        const reader = new FileReader()

        // Dosya okuma tamamlandığında bu işlev çalışır
        reader.onload = (e) => {
            // XLSX kütüphanesini kullanarak dosyayı işleyin
            const workbook = XLSX.read(e.target.result, { type: 'binary' })

            // İlk çalışma sayfasının adını alın
            const firstSheetName = workbook.SheetNames[1]

            // İlk çalışma sayfasını alın
            const worksheet = workbook.Sheets[firstSheetName]

            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
            console.log(excelData)
            // JSON verisini state değişkenine ata
            setData(excelData)
        }

        // Dosyayı ikili (binary) formatta okuyun
        reader.readAsBinaryString(file)
    }
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="mt-3">
                {data.length == 0 ? (
                    <input type="file" onChange={handleFileUpload} />
                ) : (
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr>
                                {data[0].slice(1).map((head, idx) => (
                                    <td key={idx}>{head}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((dt, key) => (
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
