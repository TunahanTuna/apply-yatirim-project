import classNames from 'classnames'
import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer, Label } from 'recharts'

const colors = ['#22c55e', '#ea580c'] // Renkleri özelleştirin (istediğiniz kadar renk ekleyebilirsiniz)

const DonutChart = ({ data, color }) => {
    const sonIndex = data && data[6] && parseFloat(data[6])
    const sonIndexVeri = sonIndex && parseFloat(sonIndex)
    console.log(sonIndex)
    return (
        <div
            className={classNames(
                ' justify-center items-center flex flex-col h-full w-full  rounded-sm border border-gray-200',
                color ? color : 'bg-orange-50 '
            )}
        >
            <strong className="w-full flex items-center justify-center text-center">{data && data?.[1]}</strong>
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
                    <Tooltip />
                    <Label />
                    <Legend verticalAlign="bottom" align="center" animationDuration={2000} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DonutChart
