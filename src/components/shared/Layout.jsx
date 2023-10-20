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
import { setBank } from '../../store/bankSlice'
import { setData } from '../../store/dataSlice'

import { useState } from 'react'
import Cookies from 'universal-cookie'
import Header from './Header'
import { toast } from 'react-toastify'
import { texts, urlFilters } from '../../lib/constants/constants'
export default function Layout() {
    const { summary_balance_sheet, summary_ratios } = useSelector((state) => state.dataReducer)
    const { key } = useSelector((state) => state.keyReducer)
    const cookies = new Cookies()
    const corpId = cookies.get('corp')
    const [jwtKey, setJwtKey] = useState(null)

    const fetchURL = import.meta.env.VITE_FETCH_USER_URL
    const dispatch = useDispatch()
    useEffect(() => {
        if (jwtKey != null && summary_balance_sheet.length == 0) {
            try {
                axios
                    .get(fetchURL, {
                        headers: {
                            Authorization: `${urlFilters.tokenHelper} ${jwtKey}`
                        }
                    })
                    .then((response) => {
                        const fetchUrls = response?.data?.excelFile?.map((data) => {
                            return {
                                caption: data.caption,
                                url: data.url
                            }
                        })
                        const initialUrl = fetchUrls.find((data) => data?.caption == 1)
                        cookies.set(urlFilters.corpList, fetchUrls)
                        fetch(`${import.meta.env.VITE_BASE_URL}${fetchUrls[0]?.url}`)
                            .then((res) => res.blob())
                            .then((blob) => {
                                const file = new File([blob], urlFilters.excelFileName, {
                                    type: urlFilters.excelFileType
                                })

                                // Excel dosyasını okuma işlemi
                                const reader = new FileReader()
                                reader.onload = function (event) {
                                    const data = event.target.result

                                    const workbook = XLSX.read(data, { type: 'binary' })
                                    dispatch(setData(workbook))
                                }
                                reader.readAsBinaryString(file)
                            })
                            .finally((res) =>
                                fetch(`${import.meta.env.VITE_BASE_URL}${response?.data?.bankFile?.url}`)
                                    .then((res) => res.blob())
                                    .then((blob) => {
                                        const file = new File([blob], urlFilters.excelFileName, {
                                            type: urlFilters.excelFileType
                                        })

                                        // Excel dosyasını okuma işlemi
                                        const reader = new FileReader()
                                        reader.onload = function (event) {
                                            const data = event.target.result

                                            const workbook = XLSX.read(data, urlFilters.excelFileFormatObject)
                                            dispatch(setBank(workbook))
                                        }
                                        reader.readAsBinaryString(file)
                                    })
                            )
                    })
                    .catch((res) => toast.error(texts.error_data_fetch))
            } catch (error) {}
        }
    }, [jwtKey])
    return (
        <div className="flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden">
            {summary_balance_sheet.length == 0 ? (
                <div>
                    <LoginPage setJwtKey={setJwtKey} />
                </div>
            ) : summary_balance_sheet.length != 0 ? (
                <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
                    <Sidebar />
                    <div className="flex-1 bg-neutral-100 overflow-y-scroll">
                        <Header />
                        <div className="p-4 ">{<Outlet />}</div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
