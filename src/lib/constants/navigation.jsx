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
    FinancialIndicators,
    CashFlow,
    SecondDashboard,
    ThirdDashboard,
    CorpInfo,
    FinancialTables,
    RatioAnalysis
} from '../../pages'
import SalesVolumeRealized from '../../pages/activity_report/SalesVolumeRealized'
import SalesVolumeProjection from '../../pages/activity_report/SalesVolumeProjection'
import CountryBaseSales from '../../pages/activity_report/CountryBaseSales'
import DepreciationGroupSales from '../../pages/activity_report/DepreciationGroupSales'
import BasicFigures from '../../pages/activity_report/BasicFigures'
import FinancialAnalysisReport from '../../pages/activity_report/FinancialAnalysisReport'
import DonenVarliklar from '../../pages/activity_report/financial_analysis/DonenVarliklar'
import DuranVarliklar from '../../pages/activity_report/financial_analysis/DuranVarliklar'
import KisaVadeliYukumlulukler from '../../pages/activity_report/financial_analysis/KisaVadeliYukumlulukler'
import UzunVadeYukumlulukler from '../../pages/activity_report/financial_analysis/UzunVadeYukumlulukler'
import Ozkaynaklar from '../../pages/activity_report/financial_analysis/Ozkaynaklar'
import GelirHesaplari from '../../pages/activity_report/financial_analysis/GelirHesaplari'
import MaliyetHesaplari from '../../pages/activity_report/financial_analysis/MaliyetHesaplari'
import GelirGiderHesaplari from '../../pages/activity_report/financial_analysis/GelirGiderHesaplari'
import OlagandisiGelirKar from '../../pages/activity_report/financial_analysis/OlagandisiGelirKar'
import DonemKarHesaplari from '../../pages/activity_report/financial_analysis/DonemKarHesaplari'
import FinancialAnalysis from '../../pages/activity_report/financial_analysis/FinancialAnalysis'

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
        key: 'temel-finansal-gostergeler',
        label: 'Temel Finansal Göstergeler',
        path: '/temel-finansal-gostergeler',
        icon: <BiBarChartAlt2 />,
        component: <FinancialIndicators />
    },
    {
        key: 'finansal-tablolar',
        label: 'Finansal Tablolar',
        path: '/finansal-tablolar',
        icon: <HiOutlineDocumentText />,
        component: <FinancialTables />,
        subMenus: [
            {
                key: 'bilanco',
                label: 'Bilanço',
                path: '/finansal-tablolar/bilanco',
                icon: <HiOutlineDocumentText />,
                component: <Balance />
            },
            {
                key: 'gelir-tablosu',
                label: 'Gelir Tablosu',
                path: '/finansal-tablolar/gelir-tablosu',
                icon: <BiMoney />,
                component: <IncomeStatement />
            },
            {
                key: 'rasyolar',
                label: 'Genel Rasyolar',
                path: '/finansal-tablolar/rasyolar',
                icon: <BiLineChart />,
                component: <Ratios />
            },
            {
                key: 'nakit-akim',
                label: 'Nakit Akım',
                path: '/finansal-tablolar/nakit-akim',
                icon: <HiOutlineAnnotation />,
                component: <CashFlow />
            }
        ]
    },
    {
        key: 'oran-analizi',
        label: 'Oran Analizi',
        path: '/oran-analizi',
        icon: <BiBarChart />,
        component: <RatioAnalysis />,
        subMenus: [
            {
                key: 'likidite-oranlari',
                label: 'Likidite Oranları',
                path: '/oran-analizi/likidite-oranlari',
                icon: <BiBarChart />,
                component: <LiquidRatios />
            },
            {
                key: 'finansal-yapi-oranlari',
                label: 'Finansal Yapı Oranları',
                path: '/oran-analizi/finansal-yapi-oranlari',
                icon: <BiBarChart />,
                component: <FinancialStructureRatios />
            },
            {
                key: 'devir-hizlari',
                label: 'Devir Hızları',
                path: '/oran-analizi/devir-hizlari',
                icon: <BiTachometer />,
                component: <RevolutionSpeed />
            },
            {
                key: 'karlilik-oranlari',
                label: 'Karlılık Oranları',
                path: '/oran-analizi/karlilik-oranlari',
                icon: <BiBarChart />,
                component: <ProfitabilityRatio />
            }
        ]
    },

    {
        key: 'faaliyet-raporlari',
        label: 'Faaliyet Raporları',
        path: '/faaliyet-raporlari',
        icon: <HiOutlineAnnotation />,
        component: null,
        subMenus: [
            {
                key: 'sektor-verileri',
                label: 'Sektör Verileri',
                path: '/faaliyet-raporlari/sektor-verileri',
                icon: <HiOutlineAnnotation />,
                component: <Dashboard />
            },
            {
                key: 'sirket-bilgileri',
                label: 'Şirket Bilgileri',
                path: '/faaliyet-raporlari/sirket-bilgileri',
                icon: <BiCandles />,
                component: <CorpInfo />
            },
            {
                key: 'ulke-bazli-satis',
                label: 'Ülke Bazlı Satış',
                path: '/faaliyet-raporlari/ulke-bazli-satis',
                icon: <HiOutlineAnnotation />,
                component: <CountryBaseSales />
            },

            {
                key: 'satis-adetleri-gerceklesen',
                label: 'Gerçekleşen Satış Adetleri',
                path: '/faaliyet-raporlari/satis-adetleri-gerceklesen',
                icon: <HiOutlineAnnotation />,
                component: <SalesVolumeRealized />
            },
            {
                key: 'satis-adetleri-projeksiyon',
                label: 'Satış Adetleri Projeksiyon',
                path: '/faaliyet-raporlari/satis-adetleri-projeksiyon',
                icon: <HiOutlineAnnotation />,
                component: <SalesVolumeProjection />
            },

            {
                key: 'amortisman-ve-grupici-satis',
                label: 'Amortisman ve Grupiçi Satış',
                path: '/faaliyet-raporlari/amortisman-ve-grupici-satis',
                icon: <HiOutlineAnnotation />,
                component: <DepreciationGroupSales />
            },
            {
                key: 'temel-rakamlar',
                label: 'Temel Rakamlar',
                path: '/faaliyet-raporlari/temel-rakamlar',
                icon: <HiOutlineAnnotation />,
                component: <BasicFigures />
            },
            {
                key: 'mali-analiz-raporu',
                label: 'Mali Analiz Raporu',
                path: '/faaliyet-raporlari/mali-analiz-raporu',
                icon: <HiOutlineAnnotation />,
                component: <FinancialAnalysis />,
                subMenus: [
                    {
                        key: 'donen-varliklar',
                        label: 'Dönen Varlıklar',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/donen-varliklar',
                        icon: <HiOutlineAnnotation />,
                        component: <DonenVarliklar />
                    },
                    {
                        key: 'duran-varliklar',
                        label: 'Duran Varlıklar',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/duran-varliklar',
                        icon: <HiOutlineAnnotation />,
                        component: <DuranVarliklar />
                    },
                    {
                        key: 'kisa-vadeli-yukumlulukler',
                        label: 'Kısa Vadeli Yükümlülükler',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/kisa-vadeli-yukumlulukler',
                        icon: <HiOutlineAnnotation />,
                        component: <KisaVadeliYukumlulukler />
                    },
                    {
                        key: 'uzun-vadeli-yukumlulukler',
                        label: 'Uzun Vadeli Yükümlülükler',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/uzun-vadeli-yukumlulukler',
                        icon: <HiOutlineAnnotation />,
                        component: <UzunVadeYukumlulukler />
                    },
                    {
                        key: 'ozkaynaklar',
                        label: 'Özkaynaklar',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/ozkaynaklar',
                        icon: <HiOutlineAnnotation />,
                        component: <Ozkaynaklar />
                    },
                    {
                        key: 'gelir-hesaplari',
                        label: 'Gelir Hesapları',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/gelir-hesaplari',
                        icon: <HiOutlineAnnotation />,
                        component: <GelirHesaplari />
                    },
                    {
                        key: 'maaliyet-hesaplari',
                        label: 'Maaliyet Hesapları',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/maaliyet-hesaplari',
                        icon: <HiOutlineAnnotation />,
                        component: <MaliyetHesaplari />
                    },
                    {
                        key: 'diger-gelir-ve-gider-hesaplari',
                        label: 'Diğer Gelir ve Gider Hesapları',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/diger-gelir-ve-gider-hesaplari',
                        icon: <HiOutlineAnnotation />,
                        component: <GelirGiderHesaplari />
                    },
                    {
                        key: 'olagan-disi-gelir-gider-hesaplari',
                        label: 'Olağan Dışı Gelir Gider Hesapları',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/olagan-disi-gelir-gider-hesaplari',
                        icon: <HiOutlineAnnotation />,
                        component: <OlagandisiGelirKar />
                    },
                    {
                        key: 'donem-kari-hesaplari',
                        label: 'Dönem Karı Hesapları',
                        path: '/faaliyet-raporlari/mali-analiz-raporu/donem-kari-hesaplari',
                        icon: <HiOutlineAnnotation />,
                        component: <DonemKarHesaplari />
                    }
                ]
            }
        ]
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
