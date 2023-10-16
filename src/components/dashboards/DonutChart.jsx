import classNames from 'classnames'
import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer, Label } from 'recharts'

const colors = ['#ea580c', '#22c55e'] // Renkleri özelleştirin (istediğiniz kadar renk ekleyebilirsiniz)

const DonutChart = ({ data, color, onClick }) => {
    const sonIndex = data && data[6] && parseFloat(data[6])
    const sonIndexVeri = sonIndex && parseFloat(sonIndex)
    return (
        <div
            className={classNames(
                ' justify-center items-center flex flex-col h-full w-full min-h-[16rem] rounded-xl border border-gray-300',
                color ? color : 'bg-neutral-100 '
            )}
            onClick={onClick}
        >
            <strong className="w-full flex items-center justify-center text-center">{data && data?.[1]}</strong>
            <ResponsiveContainer width="100%" height="90%">
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
