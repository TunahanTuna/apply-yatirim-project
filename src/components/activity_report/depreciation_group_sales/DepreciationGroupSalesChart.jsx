import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from 'chart.js'
import { Bar } from 'react-chartjs-2'
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                color: '#e5e7eb'
            }
        }
    },
    scales: {
        left: {
            position: 'left', // Sol eksen
            title: {
                display: true,
                text: 'Satış Tutarı'
            },
            ticks: {
                color: '#e5e7eb'
            }
        },
        x: {
            ticks: {
                color: '#e5e7eb'
            }
        }
    }
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default function DepreciationGroupSalesChart({ data, color }) {
    const labels = data && data?.[1]?.slice(1)
    const dataset = data && data?.[2].slice(1)
    const chartData = {
        labels,
        datasets: [
            {
                yAxisID: 'left',
                label: 'veri',
                data: dataset,
                backgroundColor: color ? color : '#dc2626',
                barThickness: 50
            }
        ]
    }
    return (
        <div className="w-5/6 h-full flex items-end ">
            <Bar options={options && options} data={chartData && chartData} />
        </div>
    )
}
