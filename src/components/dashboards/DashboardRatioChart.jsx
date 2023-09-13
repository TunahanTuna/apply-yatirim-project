import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false // Yatay eksendeki arka plan çizgilerini gizle
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false
                // Dikey eksendeki arka plan çizgilerini gizle
            }
        }
    }
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)
export default function DashboardBarChart({ data, table_title }) {
    const temp = data && [data[2], data[4], data[6]]

    const labels = table_title ? [table_title[2], table_title[4], table_title[6]] : [2019, 2020, 2021]
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: temp,
                borderColor: '#3b82f6',
                backgroundColor: '#3b82f6'
            }
        ]
    }
    return (
        <div className="gap-2 flex flex-col h-full w-full bg-sky-50 p-4 rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <div className="w-full h-full flex items-center justify-center">
                <Line options={options} data={chartData} />
            </div>
        </div>
    )
}
