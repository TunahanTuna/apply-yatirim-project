import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
const options = {
    indexAxis: 'y'
}
export default function FinancialTablesChart({ data, table_title }) {
    const temp = data && [data[2], data[3], data[4], ...data.slice(8)]
    const chartData = {
        labels: table_title
            ? [table_title[2], table_title[3], table_title[4], ...table_title.slice(8)]
            : [2019, 2020, 2021],
        datasets: [
            {
                label: 'Veri',
                data: temp,
                backgroundColor: ['#fde047', '#fb923c', '#dc2626'],
                barThickness: 30
            }
        ]
    }
    return (
        <div className="flex flex-col h-full w-full bg-red-50 m-2 rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center pt-4">{data && data?.[1]}</strong>
            <div className="flex justify-center items-center w-full h-full">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}
