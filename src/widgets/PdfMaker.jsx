import React from 'react'
import { Margin, usePDF } from 'react-to-pdf'
export default function PdfMaker({ children }) {
    const { toPDF, targetRef } = usePDF({
        filename: 'usepdf-example.pdf',
        page: {
            format: 'A4', // veya 'letter', 'legal', vb.
            orientation: 'portrait', // veya 'landscape'
            margin: Margin.SMALL
        },
        scale: 0.5
    })
    return (
        <div onClick={toPDF} ref={targetRef} className="flex flex-col w-full ">
            {children && children?.[1]}
        </div>
    )
}
