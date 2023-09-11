import { Bar } from 'react-chartjs-2'
import React from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const options = {
    scales: {
        y: {
            type: 'linear', // Doğru ölçek türünü kullanın
            beginAtZero: true
        }
    }
}

const DashboardBarChart = () => {
    const { ek } = useSelector((state) => state.dataReducer)
    const NetIsletmeSermayesi = ek && ek?.find((data) => data[0] == 200009)
    const labels = ek && ek?.find((data) => data[0] == 200000)
    const temp = [NetIsletmeSermayesi[2], NetIsletmeSermayesi[4], NetIsletmeSermayesi[6]]

    console.log(temp)
    const data = {
        labels: [labels[2], labels[4], labels[6]],
        datasets: [
            {
                label: 'Veri',
                data: temp,
                backgroundColor: ['#881337', '#065f46', '#0ea5e9'],
                barThickness: 50
            }
        ]
    }
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-sm border  border-gray-200">
            <strong className="w-full flex items-center justify-center pt-4">{NetIsletmeSermayesi[1]}</strong>
            <div className="flex justify-center items-center w-full h-full">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default DashboardBarChart
