import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
    scales: {
        left: {
            position: 'left', // Sol eksen
            title: {
                display: true,
                text: 'Satış Adetleri'
            }
        }
    }
}
export default function CountryBaseSalesChart({ header, body }) {
    const labels = [...header?.slice(2).filter((dt) => dt != 80000 && dt != 'Yüzde')]
    const first_data = body && body?.slice(2)
    console.log(first_data)
    const data = {
        labels,
        datasets: [
            {
                yAxisID: 'left',
                label: body[1],
                data: first_data,
                backgroundColor: '#dc2626',
                barThickness: 90
            }
        ]
    }

    return (
        <div className="w-full h-full flex items-end pt-2">
            <Bar options={options && options} data={data && data} />
        </div>
    )
}
