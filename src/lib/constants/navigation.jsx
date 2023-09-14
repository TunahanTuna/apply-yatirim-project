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
import {
    Dashboard,
    Balance,
    IncomeStatement,
    Ratios,
    LiquidRatios,
    FinancialStructureRatios,
    RevolutionSpeed,
    ProfitabilityRatio,
    FinancialTables,
    CashFlow,
    SecondDashboard,
    ThirdDashboard,
    CorpInfo
} from '../../pages'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'kokpit',
        label: 'Kokpit',
        path: '/',
        icon: <HiOutlineAcademicCap />,
        component: <Dashboard />
    },
    {
        key: 'kokpit-2',
        label: 'Kokpit: 2',
        path: '/kokpit-2',
        icon: <HiOutlinePresentationChartLine />,
        component: <SecondDashboard />
    },
    {
        key: 'kokpit-uc',
        label: 'Kokpit: 3',
        path: '/kokpit-uc',
        icon: <BiCandles />,
        component: <ThirdDashboard />
    },
    {
        key: 'sirket-bilgileri',
        label: 'Şirket Bilgileri',
        path: '/sirket-bilgileri',
        icon: <BiCandles />,
        component: <CorpInfo />
    },
    {
        key: 'finansal-tablolar',
        label: 'Temel Finansal Göstergeler',
        path: '/temel-finansal-gostergeler',
        icon: <BiBarChartAlt2 />,
        component: <FinancialTables />
    },
    {
        key: 'bilanco',
        label: 'Bilanço',
        path: '/bilanco',
        icon: <HiOutlineDocumentText />,
        component: <Balance />
    },
    {
        key: 'gelir-tablosu',
        label: 'Gelir Tablosu',
        path: '/gelir-tablosu',
        icon: <BiMoney />,
        component: <IncomeStatement />
    },
    {
        key: 'rasyolar',
        label: 'Genel Rasyolar',
        path: '/rasyolar',
        icon: <BiLineChart />,
        component: <Ratios />
    },
    {
        key: 'likidite-oranlari',
        label: 'Likidite Oranları',
        path: '/likidite-oranlari',
        icon: <BiBarChart />,
        component: <LiquidRatios />
    },
    {
        key: 'finansal-yapi-oranlari',
        label: 'Finansal Yapı Oranları',
        path: '/finansal-yapi-oranlari',
        icon: <BiBarChart />,
        component: <FinancialStructureRatios />
    },
    {
        key: 'devir-hizlari',
        label: 'Devir Hızları',
        path: '/devir-hizlari',
        icon: <BiTachometer />,
        component: <RevolutionSpeed />
    },
    {
        key: 'karlilik-oranlari',
        label: 'Karlılık Oranları',
        path: '/karlilik-oranlari',
        icon: <BiBarChart />,
        component: <ProfitabilityRatio />
    },
    {
        key: 'nakit-akim',
        label: 'Nakit Akım',
        path: '/nakit-akim',
        icon: <HiOutlineAnnotation />,
        component: <CashFlow />
    },

    {
        key: 'faaliyet-raporlari',
        label: 'Faaliyet Raporları',
        path: '/faaliyet-raporlari',
        icon: <HiOutlineAnnotation />,
        component: <Dashboard />
    },
    {
        key: 'ulke-bazli-satis',
        label: 'Ülke Bazlı Satış',
        path: '/ulke-bazli-satis',
        icon: <HiOutlineAnnotation />,
        component: <Dashboard />
    },
    {
        key: 'sektor-verileri',
        label: 'Sektör Verileri',
        path: '/sektor-verileri',
        icon: <HiOutlineAnnotation />,
        component: <Dashboard />
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
