import { createSlice } from '@reduxjs/toolkit'
import * as XLSX from 'xlsx'
const initialState = {
    kredi_takip: [],
    limit_risk_teminat: []
}
export const bankSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setBank: (state, action) => {
            // XLSX.read(action.payload, { type: 'binary' })
            const workbook = action.payload

            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            state.kredi_takip = dataParser(workbook, 'kredi_takip')
            state.limit_risk_teminat = dataParser(workbook, '2')
        }
    }
})
export const { setBank } = bankSlice.actions
export default bankSlice.reducer

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
