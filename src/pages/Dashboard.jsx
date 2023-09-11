import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { DashboardSimpleSection, DashboardSecondSection, DashboardThirdSection } from '../components/sections'

export default function Dashboard() {
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

    const firstSection = {
        table_title,
        totalAssets,
        equiityAmount,
        cariOran,
        NetIsletmeSermayesi,
        netFinansalBorç,
        FAVOK
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
    const thirdSection = {
        brutKar,
        asitTest,
        maddiDuran,
        aktifDevir
    }
    useEffect(() => {}, [ek])

    return (
        ek && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 flex-col w-full h-full items-center justify-center"
            >
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
