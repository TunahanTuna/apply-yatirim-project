import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'
import classNames from 'classnames'
import moment from 'moment/moment'
export const options = {
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
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
export default function DashboardBarChart({ data, table_title, type, color, onClick }) {
    const temp = data && [data[2], data[4], data[6]]
    const year = moment().year()
    const tempArray = [year - 3, year - 2, year - 1]
    const labels = table_title && table_title.length > 3 ? [table_title[2], table_title[4], table_title[6]] : tempArray
    const chartData = {
        labels,
        datasets: [
            {
                label: data && data[1],
                data: temp,
                borderColor: '#dc2626',
                backgroundColor: '#dc2626'
            }
        ]
    }
    return (
        <div
            className={classNames(
                'gap-2 flex flex-col h-full w-full p-4 border border-gray-300 rounded-xl',
                color && color ? color : 'bg-neutral-100'
            )}
            onClick={onClick}
        >
            <strong className="w-full flex items-center justify-center ">{data && data?.[1]}</strong>
            <div className="w-full h-full flex items-center justify-center">
                <Line options={options} data={chartData} />
            </div>
        </div>
    )
}
