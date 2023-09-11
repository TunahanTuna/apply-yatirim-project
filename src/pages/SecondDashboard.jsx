import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { DashboardSimpleSection, DashboardSecondSection, DashboardThirdSection } from '../components/sections'
import SecondDashboardSecondSection from '../components/sections/SecondDashoboardSecondSection'
import SecondDashboardThirdSection from '../components/sections/SecondDashboardThirdSectin'

export default function Dashboard() {
    // Değişken isimlendirmeleri düzeltilecek
    const { ek } = useSelector((state) => state.dataReducer)
    const table_title = ek && ek?.find((data) => data[0] == 200000)
    const NetFinansalBorç = ek && ek.find((data) => data[0] == 200003)
    const NetFaaliyetKari = ek && ek.find((data) => data[0] == 200007)
    const faaliyetGeliri = ek && ek.find((data) => data[0] == 200028)
    const AktifKarlilik = ek && ek.find((data) => data[0] == 200026)

    const ToplamBorclanmalar = ek && ek.find((data) => data[0] == 200010)
    const NetFinansalBorc = ek && ek.find((data) => data[0] == 200011)
    const KisaVadeliBorclar = ek && ek.find((data) => data[0] == 200017)

    const OrtFaizYuk = ek && ek.find((data) => data[0] == 200029)
    const BorcDevirHizi = ek && ek.find((data) => data[0] == 30006)
    const AlacakDevirHizi = ek && ek.find((data) => data[0] == 30002)
    const StokDevirHizi = ek && ek.find((data) => data[0] == 30001)
    const OzkaynakKarliligi = ek && ek.find((data) => data[0] == 200025)

    const firstSection = {
        title: table_title,
        miniBoxFirst: NetFaaliyetKari,
        miniBoxSecond: NetFinansalBorç,
        ratioChart: faaliyetGeliri,
        barChartFirst: AktifKarlilik,
        barChartSecond: NetFaaliyetKari
    }
    const secondSection = {
        title: table_title,
        donutChartFirst: ToplamBorclanmalar,
        donutChartSecond: NetFinansalBorc,
        ratioChart: OzkaynakKarliligi,
        donutChartThird: KisaVadeliBorclar
    }

    const thirdSection = {
        title: table_title,
        barChartFirst: OrtFaizYuk,
        speedometerFirst: BorcDevirHizi,
        speedometerSecond: AlacakDevirHizi,
        speedometerThird: StokDevirHizi
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
                    <SecondDashboardSecondSection data={secondSection} />
                </div>
                <div className="w-full flex gap-2">
                    <SecondDashboardThirdSection data={thirdSection} />
                </div>
            </motion.div>
        )
    )
}
