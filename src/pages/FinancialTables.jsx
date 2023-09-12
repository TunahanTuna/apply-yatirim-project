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
    return <div>test</div>
}

export default DoughnutChart
