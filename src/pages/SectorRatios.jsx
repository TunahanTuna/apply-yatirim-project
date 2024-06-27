import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import ThirdDashboardSectionFirst from '../components/sections/ThirdDashboardSectionFirst'
import ThirdDashboardSectionSecond from '../components/sections/ThirdDashboardSectionSecond'
import ThirdDashboardSectionThird from '../components/sections/ThirdDashboardSectionThird'
import { SectorRatioParser } from '../widgets/DataParsers'
import { SecondSectorRatioSection, SectorRatioSection, ThirdSectorRatioSection } from '../components/sections'

export default function SectorRatios() {
    // Değişken isimlendirmeleri düzeltilecek
    const { ek, sector } = useSelector((state) => state.dataReducer)

    const table_title = ek && ek?.find((data) => data[0] == 200000)

    const NakitKisaVadeYuk = sector && SectorRatioParser(sector.find((data) => data[0] == 109))
    const KisaVadeBorc_OzKaynak = sector && SectorRatioParser(sector.find((data) => data[0] == 110))
    const FAVOKMarji = sector && SectorRatioParser(sector.find((data) => data[0] == 111))
    const CalismaSermayesi = SectorRatioParser(sector.find((data) => data[0] == 117))

    const VergiOncesi = sector && SectorRatioParser(sector.find((data) => data[0] == 118))
    const BorcServisKarsilama = sector && SectorRatioParser(sector.find((data) => data[0] == 119))
    const VergiOncesiKarZarar = sector && SectorRatioParser(sector.find((data) => data[0] == 141))
    const NetCalismaSermayesi = sector && SectorRatioParser(sector.find((data) => data[0] == 142))

    const NakitDongusu = sector && SectorRatioParser(sector.find((data) => data[0] == 146))
    const AlacakDevir = sector && SectorRatioParser(sector.find((data) => data[0] == 151))
    const StokDevir = sector && SectorRatioParser(sector.find((data) => data[0] == 152))
    const BorcDevir = sector && SectorRatioParser(sector.find((data) => data[0] == 162))
    const firstSection = {
        title: table_title,
        value1: NakitKisaVadeYuk,
        value2: KisaVadeBorc_OzKaynak,
        value3: FAVOKMarji,
        value4: CalismaSermayesi
    }
    const secondSection = {
        title: table_title,
        value1: VergiOncesi,
        value2: BorcServisKarsilama,
        value3: VergiOncesiKarZarar,
        value4: NetCalismaSermayesi
    }

    const thirdSection = {
        title: table_title,
        value1: NakitDongusu,
        value2: AlacakDevir,
        value3: StokDevir,
        value4: BorcDevir
    }

    useEffect(() => {}, [sector])

    return (
        sector.length != 0 && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 flex-col w-full h-full items-center justify-center"
            >
                <div className="w-full flex">
                    <SectorRatioSection data={firstSection} />
                </div>
                <div className="w-full flex">
                    <SecondSectorRatioSection data={secondSection} />
                </div>
                <div className="w-full flex">
                    <ThirdSectorRatioSection data={thirdSection} />
                </div>
            </motion.div>
        )
    )
}
