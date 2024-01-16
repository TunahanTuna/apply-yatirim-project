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

export default function FinancialTables({ data, type, setOpen, setChartData, setDescription, title }) {
    const temp =
        data && type != 'dashboard'
            ? [
                  {
                      name: title?.[0],
                      data: data?.[2]
                  },
                  {
                      name: title?.[1],
                      data: data?.[3]
                  },
                  {
                      name: title?.[2],
                      data: data?.[4]
                  }
              ]
            : [
                  {
                      name: title?.[0],
                      data: data?.[2]
                  },
                  {
                      name: title?.[1],
                      data: data?.[4]
                  },
                  {
                      name: title?.[2],
                      data: data?.[6]
                  }
              ]
    const maxValue = Math.max(...temp.map((item) => item.data)) * 1.2
    const minValue = Math.min(...temp.map((item) => item.data)) * 1.2

    const HandleClick = () => {
        setOpen && setOpen(true)
        setChartData && setChartData()
        setDescription && setDescription()
    }
    return (
        <div
            className="gap-2 flex flex-col h-[22rem] w-11/12 xl:w-full dark:bg-gray-700 bg-neutral-50 p-4 rounded-lg border border-gray-200"
            onClick={HandleClick}
        >
            <strong className="w-full flex items-center dark:text-gray-300 text-orange-950 justify-center">
                {data && data?.[1]}
            </strong>
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
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontSize: 12, // Font büyüklüğünü ayarlayın
                                stroke: '#e5e7eb' // Sayıların rengini ayarlayın
                            }}
                        />
                        <YAxis
                            tickFormatter={(value) => value.toFixed(2)}
                            tick={{
                                fontSize: 12, // Font büyüklüğünü ayarlayın
                                stroke: '#e5e7eb' // Sayıların rengini ayarlayın
                            }}
                            textAnchor="end"
                            domain={[minValue < 0 ? minValue : 0, maxValue]}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="data"
                            stroke="#b91c1c"
                            strokeWidth={5}
                            dot={{ stroke: '#991b1b', strokeWidth: 2, fill: '#991b1b' }}
                            animationDuration={2000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
