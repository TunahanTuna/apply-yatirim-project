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
        },
        right: {
            position: 'right', // Sağ eksen
            title: {
                display: true,
                text: 'Satış Tutarı'
            }
        }
    }
}
export default function SalesVolumeBarChart({ main_title, sub_title, body }) {
    const labels = [...main_title.filter((dt) => dt != 70000 && dt != null)]
    const first_data = body && body?.slice(2).filter((data, index) => index % 2 == 0)
    const second_data = body && body?.slice(2).filter((data, index) => index % 2 == 1)

    const data = {
        labels,
        datasets: [
            {
                yAxisID: 'left',
                label: sub_title[2],
                data: first_data,
                backgroundColor: '#93c5fd'
            },
            {
                yAxisID: 'right',
                label: sub_title[3],
                data: second_data,
                backgroundColor: '#fca5a5'
            }
        ]
    }

    return (
        <div className="w-full h-[29rem] flex items-center pt-5">
            <Bar options={options} data={data} />
        </div>
    )
}
