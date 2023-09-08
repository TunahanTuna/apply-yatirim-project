import { Bar } from 'react-chartjs-2'
import React from 'react'
import { useSelector } from 'react-redux'
import { Chart, LinearScale, CategoryScale, BarController, BarElement } from 'chart.js'

Chart.register(LinearScale, CategoryScale, BarController, BarElement)

const options = {
    scales: {
        y: {
            type: 'linear', // Doğru ölçek türünü kullanın
            beginAtZero: true
        }
    }
}

const BarChart = () => {
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
                backgroundColor: ['#5733FF', '#FF33FF', '#33FFFF']
            }
        ]
    }
    return (
        <div>
            <h2>Farklı Renklere Sahip Çubuk Grafik</h2>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart
