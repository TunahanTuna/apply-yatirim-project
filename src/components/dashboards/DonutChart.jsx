import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts'

const veri = ['Toplam Varlıklar / Özkaynak', '135,54%', '179,71%', '168,09%']

const colors = ['#3b82f6', '#bfdbfe'] // Renkleri özelleştirin (istediğiniz kadar renk ekleyebilirsiniz)

const DonutChart = ({ data }) => {
    const sonIndex = data[6]
    const sonIndexVeri = parseFloat(sonIndex) * 100
    console.log('son index', sonIndex)
    console.log('veri', sonIndexVeri)
    return (
        <div className=" justify-center items-center flex flex-col h-full w-full bg-white  rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie
                        data={[
                            { name: data[1], value: sonIndexVeri },
                            { name: 'oran', value: 100 - sonIndexVeri }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {colors.map((color, index) => (
                            <Cell key={`cell-${index}`} fill={color} />
                        ))}
                    </Pie>

                    <Legend verticalAlign="bottom" align="center" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DonutChart
