import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { TableInput } from '../index'
import Test from './Test'
import LoginPage from '../../pages/auth/login/LoginPage'
import { useEffect } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { setData } from '../../store/dataSlice'
import { useState } from 'react'

export default function Layout() {
    const { summary_balance_sheet, summary_ratios } = useSelector((state) => state.dataReducer)
    const { key } = useSelector((state) => state.keyReducer)

    const [jwtKey, setJwtKey] = useState(null)

    const fetchURL = import.meta.env.VITE_FETCH_USER_URL
    const dispatch = useDispatch()
    useEffect(() => {
        if (jwtKey != null && summary_balance_sheet.length == 0) {
            axios
                .get(fetchURL, {
                    headers: {
                        Authorization: `Bearer ${key}`
                    }
                })
                .then((response) => {
                    fetch(`${import.meta.env.VITE_BASE_URL}${response.data.excelFile.url}`)
                        .then((res) => res.blob())
                        .then((blob) => {
                            const file = new File([blob], 'excel.xlsx', {
                                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                            })
                            // Excel dosyasını okuma işlemi
                            const reader = new FileReader()
                            reader.onload = function (event) {
                                const data = event.target.result

                                const workbook = XLSX.read(data, { type: 'binary' })
                                dispatch(setData(workbook))
                                const worksheet = workbook.Sheets['EK4']
                                // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
                                const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
                                // İşlenen verileri kullanarak istediğiniz şekilde devam edebilirsiniz.
                                // Örneğin, çalışma kitabını açabilir ve sayfaları okuyabilirsiniz.
                            }
                            reader.readAsBinaryString(file)
                        })
                })
        }
    }, [jwtKey])
    return (
        <div className="flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden">
            {jwtKey == null ? (
                <div>
                    <LoginPage setJwtKey={setJwtKey} />
                </div>
            ) : summary_balance_sheet.length != 0 ? (
                <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
                    <Test />
                    <div className="flex-1 bg-neutral-100 overflow-y-scroll">
                        {/* <Header /> */}
                        <div className="p-4 ">{<Outlet />}</div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
