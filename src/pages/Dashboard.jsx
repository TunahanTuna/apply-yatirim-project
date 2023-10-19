import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Margin, usePDF } from 'react-to-pdf'

import { DashboardSimpleSection, DashboardSecondSection, DashboardThirdSection } from '../components/sections'

export default function Dashboard({ test }) {
    // Değişken isimlendirmeleri düzeltilecek
    const { ek } = useSelector((state) => state.dataReducer)
    const table_title = ek && ek?.find((data) => data[0] == 200000)
    const totalAssets = ek && ek.find((data) => data[0] == 200001)
    const equiityAmount = ek && ek.find((data) => data[0] == 200002)
    const totalRevenue = ek && ek.find((data) => data[0] == 200005)
    const TLRevenue = ek && ek?.find((data) => data[0] == 200006)
    const cariOran = ek && ek?.find((data) => data[0] == 200019)
    const NetIsletmeSermayesi = ek && ek?.find((data) => data[0] == 200009)
    const totalReveneu = ek && ek?.find((data) => data[0] == 200004)
    const asitTest = ek && ek?.find((data) => data[0] == 200020)
    const brutKar = ek && ek?.find((data) => data[0] == 200023)
    const toplamVarliklar = ek && ek?.find((data) => data[0] == 200012)
    const netFinansalBorç = ek && ek?.find((data) => data[0] == 200015)
    const FAVOKMarji = ek && ek?.find((data) => data[0] == 200022)
    const FAVOK = ek && ek?.find((data) => data[0] == 200008)
    const aktifDevir = ek && ek?.find((data) => data[0] == 30007)
    const maddiDuran = ek && ek?.find((data) => data[0] == 30005)
    console.log(test)
    const firstSection = {
        title: table_title,
        miniBoxFirst: totalAssets,
        miniBoxSecond: equiityAmount,
        ratioChart: cariOran,
        barChartFirst: FAVOK,
        barChartSecond: netFinansalBorç
    }
    const secondSection = {
        totalRevenue,
        TLRevenue,
        totalReveneu,
        cariOran,
        NetIsletmeSermayesi,
        table_title,
        toplamVarliklar
    }
    const thirdSection = { title: table_title, brutKar, asitTest, maddiDuran, aktifDevir }
    useEffect(() => {}, [ek])
    const { toPDF, targetRef } = usePDF({
        filename: 'usepdf-example.pdf',
        page: { margin: Margin.MEDIUM }
    })
    return (
        ek && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 flex-col w-full h-full items-center justify-center"
                ref={targetRef}
            >
                <div>
                    <button onClick={toPDF}>test</button>
                </div>
                <div className="w-full flex">
                    <DashboardSimpleSection data={firstSection} />
                </div>
                <div className="w-full flex gap-2">
                    <DashboardSecondSection data={secondSection} />
                </div>
                <div className="w-full flex gap-2">
                    <DashboardThirdSection data={thirdSection} />
                </div>
            </motion.div>
        )
    )
}
