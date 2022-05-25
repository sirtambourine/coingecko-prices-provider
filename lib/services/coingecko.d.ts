export declare const fetchCoingeckoTokenPrice: (fetchFunction: any) => (contract: string, quote: string, platform: string) => Promise<string>;
export declare const getCoingeckoTokenPrice: (contract: string, quote: string, platform: string) => Promise<string>;
export declare function getCoingeckoTokenPrices(contracts: string[], quote: string, platform: string): Promise<any>;
