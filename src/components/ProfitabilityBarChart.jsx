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
    }
}
export default function ProfitabilityBarChart({ body, title, table_title }) {
    const data = {
        labels: table_title && table_title, // Dİnamikleştir
        datasets: body
    }
    return (
        <div className="bg-white rounded-lg w-full flex flex-col gap-2 items-center pt-5">
            <strong className="text-center text-sm">{title && title}</strong>
            <Bar options={options} data={data} />
        </div>
    )
}
