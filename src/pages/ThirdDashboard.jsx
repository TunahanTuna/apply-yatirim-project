import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { DashboardSimpleSection, DashboardSecondSection, DashboardThirdSection } from '../components/sections'
import SecondDashboardSecondSection from '../components/sections/SecondDashoboardSecondSection'
import ThirdDashboardSectionFirst from '../components/sections/ThirdDashboardSectionFirst'
import ThirdDashboardSectionSecond from '../components/sections/ThirdDashboardSectionSecond'
import ThirdDashboardSectionThird from '../components/sections/ThirdDashboardSectionThird'

export default function Dashboard() {
    // Değişken isimlendirmeleri düzeltilecek
    const { ek } = useSelector((state) => state.dataReducer)
    const table_title = ek && ek?.find((data) => data[0] == 200000)
    const NakitKisaVadeYuk = ek && ek.find((data) => data[0] == 200021)
    const KisaVadeBorc_OzKaynak = ek && ek.find((data) => data[0] == 200016)
    const FAVOKMarji = ek && ek.find((data) => data[0] == 200022)
    const CalismaSermayesi = ek && ek.find((data) => data[0] == 30003)

    const VergiOncesi = ek && ek.find((data) => data[0] == 200024)
    const BorcServisKarsilama = ek && ek.find((data) => data[0] == 200013)
    const VergiOncesiKarZarar = ek && ek.find((data) => data[0] == 200027)
    const NetCalismaSermayesi = ek && ek.find((data) => data[0] == 30004)

    const NakitDongusu = ek && ek.find((data) => data[0] == 200033)
    const AlacakDevir = ek && ek.find((data) => data[0] == 200030)
    const StokDevir = ek && ek.find((data) => data[0] == 200031)
    const BorcDevir = ek && ek.find((data) => data[0] == 200032)
    const firstSection = {
        title: table_title,
        ratioChartFirst: NakitKisaVadeYuk,
        donutChartFirst: KisaVadeBorc_OzKaynak,
        ratioChartSecond: FAVOKMarji,
        speedometerFirst: CalismaSermayesi
    }
    const secondSection = {
        title: table_title,
        donutChartFirst: VergiOncesi,
        donutChartSecond: BorcServisKarsilama,
        ratioChartFirst: VergiOncesiKarZarar,
        speedometerFirst: NetCalismaSermayesi
    }

    const thirdSection = {
        title: table_title,
        donutChartFirst: NakitDongusu,
        BarChartFirst: AlacakDevir,
        BarChartSecond: StokDevir,
        BarChartThird: BorcDevir
    }
    console.log('Borc', BorcDevir)

    useEffect(() => {}, [ek])

    return (
        ek && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 flex-col w-full h-full items-center justify-center"
            >
                <div className="w-full flex">
                    <ThirdDashboardSectionFirst data={firstSection} />
                </div>
                <div className="w-full flex">
                    <ThirdDashboardSectionSecond data={secondSection} />
                </div>
                <div className="w-full flex">
                    <ThirdDashboardSectionThird data={thirdSection} />
                </div>
            </motion.div>
        )
    )
}
