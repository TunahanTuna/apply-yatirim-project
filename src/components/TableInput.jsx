import React from 'react'
import { useDispatch } from 'react-redux'
import { setData } from '../store/dataSlice'

export default function TableInput() {
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
        <div className="w-full h-screen flex justify-center items-center bg-gray-200">
            <input type="file" onChange={handleFileUpload} />
        </div>
    )
}
