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

export default function FinancialTables({ data, type }) {
    console.log('data', data)
    const temp =
        data && type != 'dashboard'
            ? [
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
            : [
                  {
                      name: '2019',
                      data: data?.[2]
                  },
                  {
                      name: '2020',
                      data: data[4]
                  },
                  {
                      name: '2021',
                      data: data[6]
                  }
              ]
    const maxValue = Math.max(...temp.map((item) => item.data)) * 1.2
    const minValue = Math.min(...temp.map((item) => item.data)) * 1.2
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
                        <YAxis angle={-40} textAnchor="end" domain={[0, maxValue]} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="data"
                            stroke="#0ea5e9"
                            strokeWidth={5}
                            dot={{ stroke: '#38bdf8', strokeWidth: 2, fill: '#38bdf8' }}
                            animationDuration={2000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
