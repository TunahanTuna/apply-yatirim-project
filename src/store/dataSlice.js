import { createSlice } from '@reduxjs/toolkit'
import * as XLSX from 'xlsx'
const initialState = {
    summary_balance_sheet: [],
    summary_income_statement: [],
    summary_ratios: [],
    liquid_ratios: [],
    financial_structure_ratios: [],
    revolution_speeds: [],
    profitability_ratios: [],
    cash_flow_revenue: [],
    cash_flow_gross_profit: [],
    cash_flow_gae: [],
    cash_flow_marketing_expenses: [],
    cash_flow_cos: [],
    cash_flow_ebitda: [],
    cash_flow_cf: [],
    cash_flow_oc: [],
    cash_flow_financial_liability: [],
    cash_flow_s_revolution_speeds: [],
    ek: [],
    base_financial_dashboard: [],
    corp_info: [],
    sales_volume_realized: [],
    sales_volume_projection: [],
    ratio_desc: [],
    country_base_sales: [],
    depreciation_group_sales: [],
    basic_figures: [],
    financial_analysis_report: [],
    sector: []
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            // XLSX.read(action.payload, { type: 'binary' })
            const workbook = action.payload
            const worksheet = workbook.Sheets['Ozet_Bilanco']
            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
            state.summary_balance_sheet = dataParser(workbook, 'Ozet_Bilanco')
            state.summary_income_statement = dataParser(workbook, 'Ozet_Gelir_Tablosu')
            // RASYOLAR
            state.summary_ratios = dataParser(workbook, 'Ozet_Oranlar')
            state.liquid_ratios = dataParser(workbook, 'likidite_oranlari_yazilim')
            state.financial_structure_ratios = dataParser(workbook, 'finansal_yapi_oranlari_yazilim')
            state.revolution_speeds = dataParser(workbook, 'devir_hizlari_yazilim')
            state.profitability_ratios = dataParser(workbook, 'karlilik_oranlari_yazilim')
            // NAKİT AKIM
            state.cash_flow_revenue = dataParser(workbook, 'Nakit_Akim_Hasılat')
            state.cash_flow_gross_profit = dataParser(workbook, 'Nakit_Akim_brutkar')
            state.cash_flow_gae = dataParser(workbook, 'Nakit_Akim_Ozet_Gyg')
            state.cash_flow_marketing_expenses = dataParser(workbook, 'Nakit_Akim_Ozet_Pg')
            state.cash_flow_cos = dataParser(workbook, 'Nakit_Akim_Ozet_Smm')
            state.cash_flow_ebitda = dataParser(workbook, 'Nakit_Akim_Ozet_Ebitda')
            state.cash_flow_cf = dataParser(workbook, 'Nakit_Akim_Ozet_Nakitakıs')
            state.cash_flow_oc = dataParser(workbook, 'Nakit_Akim_Ozet_isletmesermaye')
            state.cash_flow_financial_liability = dataParser(workbook, 'Nakit_Akim_Ozet_finansalyukum')
            state.cash_flow_s_revolution_speeds = dataParser(workbook, 'Nakit_Akim_Ozet_Devirhizlari')
            // ŞİRKET BİLGİLERİ
            state.corp_info = dataParser(workbook, 'Sirket_tanitim_Bilgileri')
            // TEMEL GÖSTERGELER
            state.base_financial_dashboard = dataParser(workbook, 'Temel_Finansal_Gostergeler')

            // FAALİYET RAPORLARI
            state.sales_volume_realized = dataParser(workbook, 'Satıs_adetleri_gerceklesen')
            state.sales_volume_projection = dataParser(workbook, 'Satıs_adetleri_projeksiyon')
            state.country_base_sales = dataParser(workbook, 'Ulke_bazlı_satıs')
            state.depreciation_group_sales = dataParser(workbook, 'amortismanlar_grupici_satis')
            state.basic_figures = dataParser(workbook, 'Temel_Rakamlar')
            state.financial_analysis_report = financialAnalysisParser(workbook, 'Mali_analiz')

            state.sector = dataParser(workbook, 'Sektör')

            state.ek = dataParser(workbook, 'EK4')

            state.ratio_desc = dataParser(workbook, 'Oran_Aciklamalari')
        }
    }
})
export const { setData } = dataSlice.actions
export default dataSlice.reducer

function dataParser(workbook, sheetName) {
    const worksheet = workbook.Sheets[sheetName]

    return XLSX.utils.sheet_to_json(worksheet, { header: 1 }).map((dt) => {
        return dt.map((d) => {
            return typeof d != 'string' && Number.isInteger(d) != true ? d.toFixed(2) : d
        })
    })
}
function financialAnalysisParser(workbook, sheetName) {
    const worksheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).map((dt) => {
        return dt.map((d) => {
            return typeof d != 'string' && Number.isInteger(d) != true ? d.toFixed(2) : d
        })
    })

    return {
        donen_varliklar: {
            hazir_degerler: data.filter((dt, index) => index >= 0 && index <= 14),
            ticari_alacaklar: data.filter((dt, index) => index >= 16 && index <= 37),
            stoklar: data.filter((dt, index) => index >= 39 && index <= 75)
        },
        duran_varliklar: {
            ticari_alacaklar: data.filter((dt, index) => index >= 77 && index <= 107),
            maddi_duran_varliklar: data.filter((dt, index) => index >= 109 && index <= 151)
        },
        kisa_vadeli_yabanci_kaynaklar: {
            mali_borclar: data.filter((dt, index) => index >= 153 && index <= 165),
            ticari_borclar: data.filter((dt, index) => index >= 167 && index <= 188),
            yaygin_insaat_hakedis: data.filter((dt, index) => index >= 190 && index <= 224)
        },
        uzun_vadeli_yabanci_kaynaklar: {
            mali_borclar: data.filter((dt, index) => index >= 226 && index <= 236),
            ticari_borclar: data.filter((dt, index) => index >= 238 && index <= 271)
        },
        ozkaynaklar: data.filter((dt, index) => index >= 273 && index <= 305),
        gelir_hesaplari: data.filter((dt, index) => index >= 307 && index <= 318),
        maaliyet_hesaplari: data.filter((dt, index) => index >= 320 && index <= 337),
        diger_gelir_ve_gider_hesaplari: data.filter((dt, index) => index >= 339 && index <= 364),
        olagandisi_gelir_kar: data.filter((dt, index) => index >= 367 && index <= 375),
        donem_kar_hesaplari: data.filter((dt, index) => index >= 378 && index <= 383)
    }
}
