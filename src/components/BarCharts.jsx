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
import moment from 'moment'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
const options = {
    plugins: {
        legend: {
            display: false,
            position: 'bottom'
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#000000'
            },
            grid: {
                display: false // Yatay eksendeki arka plan çizgilerini gizle
            }
        },
        y: {
            ticks: {
                color: '#000000'
            },
            grid: {
                display: false // Dikey eksendeki arka plan çizgilerini gizle
            }
        }
    }
}
export default function BarCharts({ data, color, chartStyle, table_title, onClick }) {
    const temp = data && [data[2], data[4], data[6], ...data.slice(8)]
    const year = moment().year()
    const tempArray = [year - 3, year - 2, year - 1]
    const chartData = {
        labels: table_title
            ? [table_title[2], table_title[4], table_title[6], ...table_title.slice(8)]
            : [2020, 2021, 2022],
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
                color && color
                    ? `${color} dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900 `
                    : 'dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900  bg-neutral-50 '
            )}
            onClick={onClick}
        >
            <strong className="w-full flex items-center text-center justify-center pt-4">{data && data?.[1]}</strong>
            <div className="flex justify-center items-center w-full h-full">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}
