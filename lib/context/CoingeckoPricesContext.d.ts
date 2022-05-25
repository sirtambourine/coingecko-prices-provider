import React from 'react';
interface PriceStreaming {
    intialized: boolean;
    assets: Array<any>;
    prices: any;
    tickers: any;
    streamPrices?: (symbols: Array<string>) => void;
    streamTickers?: (symbols: Array<string>) => void;
}
export declare const CoingeckoPricesContext: React.Context<PriceStreaming>;
export declare const CoingeckoPricesProvider: ({ cryptoCompareApiKey, children }: any) => JSX.Element;
export {};
