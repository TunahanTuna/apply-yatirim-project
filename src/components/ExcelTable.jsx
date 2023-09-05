import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import path from 'path'

export default function ExcelTable({ table_sheet, title }) {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="items-center justify-center flex text-gray-700 font-medium text-xl w-full">
                {title && title}
            </strong>
            <div className="mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            {table_sheet[0].slice(1).map((head, idx) => (
                                <td key={idx}>{head}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table_sheet.slice(1).map((dt, key) => (
                            <tr key={key} className="hover:bg-neutral-50">
                                {dt.slice(1).map((row, idx) => (
                                    <td key={idx}>{row}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
