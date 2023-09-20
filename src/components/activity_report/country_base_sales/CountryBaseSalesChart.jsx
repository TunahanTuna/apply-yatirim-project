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
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }
        ]
    }
    const data2 = {
        labels,
        datasets: [
            {
                label: 'satış',
                data: second_data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }
        ]
    }
    const data3 = {
        labels,
        datasets: [
            {
                label: 'satış',
                data: third_data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }
        ]
    }

    return (
        <div className="w-full h-full flex pt-2">
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
