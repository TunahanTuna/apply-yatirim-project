import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)
const options = {
    plugins: {
        legend: {
            display: false
        }
    }
}
export default function CorpInfoDonutChart({ data, type }) {
    const labels = data && data.map((dt) => dt?.[1])
    const tempData = data && data.map((dt) => dt?.[2])
    const temp = data && {
        labels: labels && [...labels],
        datasets: [
            {
                label: 'Değer',
                data: [...tempData],
                backgroundColor: ['#dc2626', '#2563eb', '#f97316'],
                borderColor: ['#dc2626', '#2563eb', '#f97316'],
                borderWidth: 1
            }
        ]
    }

    const otherData = data && {
        labels: ['diğer', data[1]],
        datasets: [
            {
                label: 'Değer',
                data: [100 - data[2], data[2]],
                backgroundColor: ['#dc2626', '#2563eb', '#f97316'],
                borderColor: ['#dc2626', '#2563eb', '#f97316'],
                borderWidth: 1
            }
        ]
    }
    if (type == 'other')
        return (
            data && (
                <div className="w-1/4 h-[20rem] flex flex-col items-center justify-center gap-20">
                    <Doughnut options={options} data={otherData} />
                    <div className="flex flex-col gap-2">
                        <span className="text-blue-500">
                            {data && data?.[1]}: <span className="font-bold">%{data && data?.[2]}</span>
                        </span>
                        <span className="text-red-500">
                            Diğer: <span className="font-bold">%{100 - data[2]}</span>
                        </span>
                    </div>
                </div>
            )
        )
    return (
        data && (
            <div className="w-1/2 h-[20rem] flex flex-col items-center justify-center gap-20">
                <Doughnut options={options} data={temp} />
                <div className="flex flex-col gap-2">
                    {data.map((dt, index) => (
                        <span
                            className={`${index == 0 ? '!text-red-600' : null} ${
                                index == 1 ? 'text-blue-600' : 'text-orange-500'
                            } text-md `}
                            key={index}
                        >
                            {dt[1]}: <span className="font-semibold"> %{dt[2]}</span>
                        </span>
                    ))}
                </div>
            </div>
        )
    )
}
