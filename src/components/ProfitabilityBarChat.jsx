import React, { PureComponent } from 'react'
// import {
//     BarChart,
//     Bar,
//     Cell,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ReferenceLine,
//     ResponsiveContainer
// } from 'recharts'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import classNames from 'classnames'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
const options = {
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
    scales: {
        x: {
            grid: {
                display: false // Yatay eksendeki arka plan çizgilerini gizle
            }
        },
        y: {
            grid: {
                display: false // Dikey eksendeki arka plan çizgilerini gizle
            }
        }
    }
}
export default function ProfitabilityBarChat({ data, color, chartStyle, table_title }) {
    const temp = data && [data[2], data[3], data[4], ...data.slice(8)]
    const chartData = {
        labels: table_title ? table_title : [2019, 2020, 2021],
        datasets: [
            {
                label: data && data[1],
                data: temp,
                backgroundColor: ['#65a30d', '#eab308', '#dc2626'],
                barThickness: 50
            }
        ]
    }
    const temp1 = data && [
        {
            name: '2019',
            data: data?.[2],
            color: '#38bdf8'
        },
        {
            name: '2020',
            data: data[4],
            color: '#3b82f6'
        },
        {
            name: '2021',
            data: data[6],
            color: '#4f46e5'
        }
    ]
    // const maxValue = Math.max(...temp.map((item) => item.data)) * 1.5
    // const minValue = chartStyle == 'negative' ? Math.min(...temp.map((item) => item.data)) * 1.2 : null

    return (
        <div
            className={classNames(
                'flex flex-col h-full w-full rounded-xl border border-gray-300',
                color && color ? color : 'bg-neutral-50 '
            )}
        >
            <strong className="w-full flex items-center justify-center pt-4">{data && data?.[1]}</strong>
            <div className="flex justify-center items-center w-full h-full">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}
