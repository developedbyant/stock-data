## Get stock data from yahoo finance, tradingView and more

``` javascript
import StockData from "@developedbyant/stock-data"

const stockData = new StockData()

async function main() {
    const symbolData = await stockData.quote("TSLA")
    console.log(symbolData)

    const symbolsData = await stockData.quotes(["TSLA","META"])
    console.log(symbolsData)

    const website = await stockData.website("META");
    console.log(website)

    const logo = await stockData.logo("TSLA");
    console.log(logo)
}
main()
```