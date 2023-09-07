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
    test: []
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            const workbook = XLSX.read(action.payload, { type: 'binary' })
            const worksheet = workbook.Sheets['Ozet_Bilanco']
            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
            console.log(dataParser(workbook, 'Ozet_Gelir_Tablosu'))
            state.summary_balance_sheet = dataParser(workbook, 'Ozet_Bilanco')
            state.summary_income_statement = dataParser(workbook, 'Ozet_Gelir_Tablosu')
            state.summary_ratios = dataParser(workbook, 'Ozet_Oranlar')
            state.liquid_ratios = dataParser(workbook, 'likidite_oranlari_yazilim')
            state.financial_structure_ratios = dataParser(workbook, 'finansal_yapi_oranlari_yazilim')
            state.revolution_speeds = dataParser(workbook, 'devir_hizlari_yazilim')
            state.profitability_ratios = dataParser(workbook, 'karlilik_oranlari_yazilim')
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
            state.test = dataParser(workbook, 'EK4')

            console.log('state', state.test)
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
