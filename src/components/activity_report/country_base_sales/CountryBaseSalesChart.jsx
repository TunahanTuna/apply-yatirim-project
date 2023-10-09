import React from 'react'
import { Chart as ChartJS, Legend, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Legend)
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
}
export default function CountryBaseSalesChart({ header, body }) {
    const labels = body && body?.map((data) => data[1])
    const first_data = body && body?.map((data) => data[2])
    const second_data = body && body?.map((data) => data[3])
    const third_data = body && body?.map((data) => data[4])

    const data1 = {
        labels,
        datasets: [
            {
                label: 'satış',
                data: first_data,
                backgroundColor: colors
            }
        ]
    }
    const data2 = {
        labels,
        datasets: [
            {
                label: 'satış',
                data: second_data,
                backgroundColor: colors
            }
        ]
    }
    const data3 = {
        labels,
        datasets: [
            {
                label: 'satış',
                data: third_data,
                backgroundColor: colors
            }
        ]
    }

    return (
        <div className="w-full h-full flex 2xl:flex 2xl:flex-row md:grid md:grid-cols-2 flex-col pt-2">
            <div className="w-full flex flex-col items-center justify-center gap-3">
                <strong>{header && header[2]}</strong>
                <Doughnut options={options} data={data1} width={200} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-3">
                <strong>{header && header[3]}</strong>
                <Doughnut options={options} data={data2} width={200} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-3">
                <strong>{header && header[4]}</strong>
                <Doughnut options={options} data={data3} width={200} />
            </div>
        </div>
    )
}
const colors = [
    '#dc2626',
    '#9333ea',
    '#16a34a',
    '#f97316',
    '#ca8a04',
    '#2563eb',
    '#be185d',
    '#9f1239',
    '#14b8a6',
    '#84cc16',
    '#4f46e5'
]
