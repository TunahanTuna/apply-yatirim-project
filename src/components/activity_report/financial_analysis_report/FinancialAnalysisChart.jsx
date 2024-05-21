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
                color: '#000000'
            }
        }
    },
    scales: {
        left: {
            position: 'left', // Sol eksen
            ticks: {
                color: '#000000'
            }
        },
        x: {
            ticks: {
                color: '#000000'
            }
        }
    }
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default function FinancialAnalysisChart({ data, labels, color }) {
    const chartLabels =
        labels &&
        labels
            ?.slice(1)
            ?.filter((data) => data != null)
            .slice(1)

    const dataset = data && data.slice(2)
    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                yAxisID: 'left',
                label: data[1],
                data: dataset,
                backgroundColor: color ? color : ['#2563eb', '#facc15', '#dc2626'],
                barThickness: 60
            }
        ]
    }
    return (
        <div className="dark:bg-gray-700 dark:border-gray-900 w-full h-full flex items-end p-2 border border-gray-300 rounded-xl">
            <Bar options={options && options} data={chartData && chartData} />
        </div>
    )
}
/* 
 {
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
*/
