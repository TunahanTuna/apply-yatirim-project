import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'bottom'
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#e5e7eb'
            }
        },
        y: {
            ticks: {
                color: '#e5e7eb'
            }
        }
    }
}
export default function ProfitabilityBarChart({ body, title, table_title }) {
    const data = {
        labels: table_title && table_title, // Dİnamikleştir
        datasets: body
    }
    return (
        <div className="dark:bg-gray-700 bg-white rounded-lg w-full flex flex-col gap-2 items-center pt-5">
            <strong className="text-center dark:text-gray-200 text-sm">{title && title}</strong>
            <Bar options={options} data={data} />
        </div>
    )
}
