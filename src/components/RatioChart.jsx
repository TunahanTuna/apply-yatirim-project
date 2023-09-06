import React, { PureComponent } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer
} from 'recharts'
const dummydata = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
]

export default function FinancialTables({ data }) {
    console.log('data', data)
    const temp = data && [
        {
            name: '2019',
            data: data?.[2]
        },
        {
            name: '2020',
            data: data[3]
        },
        {
            name: '2021',
            data: data[4]
        }
    ]
    return (
        <div className="gap-2 flex flex-col h-full w-full bg-white p-4 rounded-sm border border-gray-200">
            <strong className="w-full flex items-center justify-center">{data && data?.[1]}</strong>
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="99%">
                    <LineChart
                        width={500}
                        height={200}
                        data={temp}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={['dataMin', 'dataMax']} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="data"
                            stroke="#0ea5e9"
                            strokeWidth={3}
                            dot={{ stroke: '#38bdf8', strokeWidth: 2, fill: '#38bdf8' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
