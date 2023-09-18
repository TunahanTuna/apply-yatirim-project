import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Satış Adetleri'
        },
        legend: {
            display: false
        }
    }
}

const options_second = {
    plugins: {
        title: {
            display: true,
            text: 'Satış Tutarı'
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }

    return (
        <div className="w-full items-center justify-center flex-col">
            <div className="w-full items-center justify-center text-center text-lg">
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
