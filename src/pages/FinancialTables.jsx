import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'

const data = [
    { x: 'A', y: 30 },
    { x: 'B', y: 40 },
    { x: 'C', y: 30 }
]

const DoughnutChart = () => {
    return (
        <div>
            <h2>Doughnut Chart</h2>
            <VictoryPie
                data={data}
                innerRadius={75}
                colorScale={['red', 'green', 'blue']}
                labelComponent={<VictoryLabel />} // Etiketleri ekleyin
                labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            />
            <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text="Doughnut Chart" // Başlık ekleyin
                style={{ fontSize: 20 }}
            />
        </div>
    )
}

export default DoughnutChart
