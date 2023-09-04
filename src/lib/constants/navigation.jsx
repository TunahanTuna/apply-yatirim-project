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
        path: '/v',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'gelir-tablosu',
        label: 'Gelir Tablosu',
        path: '/c',
        icon: <BiMoney />
    },
    {
        key: 'rasyolar',
        label: 'Rasyolar',
        path: '/c',
        icon: <BiLineChart />
    },
    {
        key: 'likidite-oranları',
        label: 'Likidite Oranları',
        path: '/c',
        icon: <BiBarChart />
    },
    {
        key: 'finansal-yapi-oranlari',
        label: 'Finansal Yapı Oranları',
        path: '/c',
        icon: <BiBarChart />
    },
    {
        key: 'devir-hizlari',
        label: 'Devir Hızları',
        path: '/c',
        icon: <BiTachometer />
    },
    {
        key: 'karlilik-oranlari',
        label: 'Karlılık Oranları',
        path: '/c',
        icon: <BiBarChart />
    },
    {
        key: 'nakit-akim',
        label: 'Nakit Akım',
        path: '/c',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'messages',
        label: 'Sektör Verileri',
        path: '/c',
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
