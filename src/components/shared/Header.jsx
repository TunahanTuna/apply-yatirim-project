import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import PopButton from '../../widgets/PopButton'
import Cookies from 'universal-cookie'
import { Tabs } from 'antd'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { setData } from '../../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { texts } from '../../lib/constants/constants'

export default function Header() {
    const dispatch = useDispatch()

    const cookies = new Cookies()
    const test = cookies.get('corpList')?.map((data) => {
        return {
            key: data.caption,
            label: data.caption,
            url: data.url
        }
    })
    const onChange = (key) => {
        const temp = test.find((data) => data.key == key)
        fetch(`${import.meta.env.VITE_BASE_URL}${temp?.url}`)
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
    }

    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1'
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2'
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3'
        }
    ]

    return (
        <div className="bg-neutral-50 h-16 px-4 flex justify-center gap-10 items-center border-b border-color-gray-100">
            <div className="w-full ">
                <Tabs defaultActiveKey="1" centered items={test} onChange={onChange} />
            </div>
            <div className="flex bg-sky-900 rounded-lg p-1 w-full flex-1">
                <button>
                    <a
                        className="whitespace-nowrap  hover:no-underline"
                        href="/"
                        onClick={() => localStorage.removeItem('persist:root')}
                    >
                        <span className="text-sky-100"> {texts.clear_data_text}</span>
                    </a>
                </button>
            </div>
        </div>
    )
}
