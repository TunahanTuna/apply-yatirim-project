import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Satış Adetleri',

            color: '#e5e7eb'
        },
        legend: {
            display: false,
            labels: {
                color: '#e5e7eb'
            }
        }
    }
}

const options_second = {
    plugins: {
        title: {
            display: true,
            text: 'Satış Tutarı',

            color: '#e5e7eb'
        },
        legend: {
            display: false
        }
    }
}

export default function SalesVolumeDonutChart({ year, body }) {
    var value1 = []
    var value2 = []
    var labelList = []
    body &&
        body.forEach((data) => {
            if (year == 2020) {
                value1.push(data[2])
                value2.push(data[3])
                labelList.push(data[1])
            }
            if (year == 2021) {
                value1.push(data[4])
                value2.push(data[5])
                labelList.push(data[1])
            }
            if (year == 2022) {
                value1.push(data[6])
                value2.push(data[7])
                labelList.push(data[1])
            }
            if (year == 2023) {
                value1.push(data[8])
                value2.push(data[9])
                labelList.push(data[1])
            }
        })

    const data1 = {
        labels: labelList,
        datasets: [
            {
                label: 'değer',
                data: value1,
                backgroundColor: [
                    '#dc2626',
                    '#9333ea',
                    '#16a34a',
                    '#f97316',
                    '#ca8a04',
                    '#2563eb',
                    '#be185d',
                    '#9f1239',
                    '#14b8a6',
                    '#84cc16',
                    '#4f46e5'
                ]
            }
        ]
    }
    const data2 = {
        labels: labelList,
        datasets: [
            {
                label: 'değer',
                data: value2,
                backgroundColor: [
                    '#dc2626',
                    '#9333ea',
                    '#16a34a',
                    '#f97316',
                    '#ca8a04',
                    '#2563eb',
                    '#be185d',
                    '#9f1239',
                    '#14b8a6',
                    '#84cc16',
                    '#4f46e5'
                ]
            }
        ]
    }

    return (
        <div className="w-full items-center justify-center flex-col">
            <div className="dark:text-gray-200 w-full items-center justify-center text-center text-lg">
                <strong>{year && year}</strong>
            </div>
            <div className="w-full flex items-center justify-center">
                <div>
                    <Doughnut options={options} data={data1} width={200} />
                </div>
                <div>
                    <Doughnut options={options_second} data={data2} width={200} />
                </div>
            </div>
        </div>
    )
}
