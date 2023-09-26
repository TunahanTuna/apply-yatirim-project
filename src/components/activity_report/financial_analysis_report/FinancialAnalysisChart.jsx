import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from 'chart.js'
import { Bar } from 'react-chartjs-2'
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
    scales: {
        left: {
            position: 'left' // Sol eksen
        }
    }
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default function FinancialAnalysisChart({ data, labels, color }) {
    const chartLabels = labels && labels?.slice(1)?.filter((data) => data != null)
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
        <div className="w-full h-full flex items-end p-2">
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
