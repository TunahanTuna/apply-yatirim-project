import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const data = [
    {
        name: 'Jan',
        Expense: 3890,
        Income: 4000
    },
    {
        name: 'Feb',
        Expense: 3450,
        Income: 4360
    },
    {
        name: 'Mar',
        Expense: 3490,
        Income: 4200
    },
    {
        name: 'Apr',
        Expense: 3490,
        Income: 4310
    },
    {
        name: 'May',
        Expense: 3490,
        Income: 4300
    },
    {
        name: 'July',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Aug',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Sep',
        Expense: 2000,
        Income: 4800
    },
    {
        name: 'Oct',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'Nov',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Dec',
        Expense: 2390,
        Income: 3800
    }
]
export default function TransactionChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Transactions</strong>
            <div className="w-full mt-3 flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0 " vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#0ea5e9" />
                        <Bar dataKey="Expense" fill="#ea580c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// Demo data
