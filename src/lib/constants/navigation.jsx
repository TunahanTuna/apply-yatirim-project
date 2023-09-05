import { FcBarChart } from 'react-icons/fc'
import {
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlinePresentationChartLine,
    HiOutlineAcademicCap
} from 'react-icons/hi'
import { BiBarChart, BiBarChartAlt2, BiCandles, BiLineChart, BiMoney, BiTachometer } from 'react-icons/bi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'kokpit',
        label: 'Kokpit',
        path: '/',
        icon: <HiOutlineAcademicCap />
    },
    {
        key: 'ozet-rapor',
        label: 'Özet Rapor',
        path: '/oranlar',
        icon: <HiOutlinePresentationChartLine />
    },
    {
        key: 'sirket-bilgileri',
        label: 'Şirket Bilgileri',
        path: '/a',
        icon: <BiCandles />
    },
    {
        key: 'finansal-tablolar',
        label: 'Finansal Tablolar',
        path: '/b',
        icon: <BiBarChartAlt2 />
    },
    {
        key: 'bilanco',
        label: 'Bilanço',
        path: '/bilanco',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'gelir-tablosu',
        label: 'Gelir Tablosu',
        path: '/gelir-tablosu',
        icon: <BiMoney />
    },
    {
        key: 'rasyolar',
        label: 'Genel Rasyolar',
        path: '/rasyolar',
        icon: <BiLineChart />
    },
    {
        key: 'likidite-oranlari',
        label: 'Likidite Oranları',
        path: '/likidite-oranlari',
        icon: <BiBarChart />
    },
    {
        key: 'finansal-yapi-oranlari',
        label: 'Finansal Yapı Oranları',
        path: '/finansal-yapi-oranlari',
        icon: <BiBarChart />
    },
    {
        key: 'devir-hizlari',
        label: 'Devir Hızları',
        path: '/devir-hizlari',
        icon: <BiTachometer />
    },
    {
        key: 'karlilik-oranlari',
        label: 'Karlılık Oranları',
        path: '/karlilik-oranlari',
        icon: <BiBarChart />
    },
    {
        key: 'nakit-akim',
        label: 'Nakit Akım',
        path: '/nakit-akim',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'sektor-verileri',
        label: 'Sektör Verileri',
        path: '/sektor-verileri',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
