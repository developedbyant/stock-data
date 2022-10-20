import { $get } from './utils.js'
// Types
import type { SymbolData } from "./types/quote"

export default class StockData{

    /** Get stock data
     * @prop {string} symbol Stock symbol example = TSLA
    */
    async quote(symbol:string){
        symbol = symbol.trim().toUpperCase()
        // Make request
        const apiRes:SymbolData|false = await $get(`/quote?symbols=${symbol}`)
        if(apiRes) return apiRes['quoteResponse']['result'][0]
        return false
    }

    /** Get stocks data
     * @prop {string} symbols List of stock symbols example = ["TSLA","META"]
    */
    async quotes(symbols:string[]){
        // Make request
        const apiRes:SymbolData|false = await $get(`/quote?symbols=${symbols.join(',')}`)
        if(apiRes) return apiRes['quoteResponse']['result']
        return false
    }

    /** Get stock symbol website
     * @prop {string} symbol Stock symbol example = TSLA
    */
    async website(symbol:string){
        const apiRes:string|false = await $get(`https://finance.yahoo.com/quote/${symbol}/profile`,true)
        // Check if website link was founded
        if(apiRes && apiRes.includes('</a><br/><a href="')){
            return apiRes.split('</a><br/><a href="')[1].split('"')[0]
        } return false
    }

    /** Get stock symbol logo url from tradingview
     * @prop {string} symbol Stock symbol example = TSLA
    */
    async logo(symbol:string){
        const apiRes:string|false = await $get(`https://www.tradingview.com/symbols/${symbol}/`,true)
        // Check if logo url was founded
        if(apiRes && apiRes.includes('data-logo-urls="')){
            return apiRes.split('data-logo-urls="')[1].split('"')[0]
        } return false
    }


}