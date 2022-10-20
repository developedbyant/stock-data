export interface SymbolData {
    quoteResponse: QuoteResponse;
}

export interface QuoteResponse {
    result: Result[];
    error:  null;
}

export interface Result {
    language:                          string;
    region:                            string;
    quoteType:                         string;
    typeDisp:                          string;
    quoteSourceName:                   string;
    triggerable:                       boolean;
    customPriceAlertConfidence:        string;
    regularMarketChangePercent:        number;
    regularMarketPrice:                number;
    currency:                          string;
    longName:                          string;
    messageBoardId:                    string;
    exchangeTimezoneName:              string;
    exchangeTimezoneShortName:         string;
    gmtOffSetMilliseconds:             number;
    market:                            string;
    esgPopulated:                      boolean;
    exchange:                          string;
    shortName:                         string;
    firstTradeDateMilliseconds:        number;
    priceHint:                         number;
    postMarketChangePercent:           number;
    postMarketTime:                    number;
    postMarketPrice:                   number;
    postMarketChange:                  number;
    regularMarketChange:               number;
    regularMarketTime:                 number;
    regularMarketDayHigh:              number;
    regularMarketDayRange:             string;
    regularMarketDayLow:               number;
    regularMarketVolume:               number;
    regularMarketPreviousClose:        number;
    bid:                               number;
    ask:                               number;
    bidSize:                           number;
    askSize:                           number;
    fullExchangeName:                  string;
    financialCurrency:                 string;
    regularMarketOpen:                 number;
    averageDailyVolume3Month:          number;
    averageDailyVolume10Day:           number;
    fiftyTwoWeekLowChange:             number;
    fiftyTwoWeekLowChangePercent:      number;
    fiftyTwoWeekRange:                 string;
    fiftyTwoWeekHighChange:            number;
    fiftyTwoWeekHighChangePercent:     number;
    fiftyTwoWeekLow:                   number;
    fiftyTwoWeekHigh:                  number;
    earningsTimestamp:                 number;
    earningsTimestampStart:            number;
    earningsTimestampEnd:              number;
    trailingAnnualDividendRate:        number;
    trailingPE:                        number;
    trailingAnnualDividendYield:       number;
    epsTrailingTwelveMonths:           number;
    epsForward:                        number;
    epsCurrentYear:                    number;
    priceEpsCurrentYear:               number;
    sharesOutstanding:                 number;
    bookValue:                         number;
    fiftyDayAverage:                   number;
    fiftyDayAverageChange:             number;
    fiftyDayAverageChangePercent:      number;
    twoHundredDayAverage:              number;
    twoHundredDayAverageChange:        number;
    twoHundredDayAverageChangePercent: number;
    marketCap:                         number;
    forwardPE:                         number;
    priceToBook:                       number;
    marketState:                       string;
    sourceInterval:                    number;
    exchangeDataDelayedBy:             number;
    averageAnalystRating:              string;
    tradeable:                         boolean;
    cryptoTradeable:                   boolean;
    displayName:                       string;
    symbol:                            string;
}
