import React, { PureComponent } from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer
} from 'recharts'

export default function BarCharts({ data, color }) {
    const temp = data && [
        {
            name: '2019',
            data: data?.[2],
            color: '#38bdf8'
        },
        {
            name: '2020',
            data: data[4],
            color: '#3b82f6'
        },
        {
            name: '2021',
            data: data[6],
            color: '#4f46e5'
        }
    ]
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-sm border  border-gray-200">
            <strong className="w-full flex items-center justify-center pt-4">{data && data?.[1]}</strong>
            <div className="flex justify-center items-center w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={temp}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis angle={-45} textAnchor="end" />
                        <Tooltip />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="data" fill={color ? color : '#0ea5e9'} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
