import React, { useState } from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import MiniboxPopup from '../components/popups/MiniboxPopup'

const data = [
    { x: 'A', y: 30 },
    { x: 'B', y: 40 },
    { x: 'C', y: 30 }
]

const DoughnutChart = () => {
    const [showMyModal, setShowMyModal] = useState(false)

    const handleOnClose = (param) => setShowMyModal(param)
    return (
        <div>
            <h2 onClick={() => setShowMyModal(true)}> Doughnut Chart</h2>
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
            <MiniboxPopup onClose={() => handleOnClose(false)} visible={showMyModal} />
        </div>
    )
}

export default DoughnutChart
