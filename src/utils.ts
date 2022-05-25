// get price from token contract
export const getCoingeckoSimpleTokenPriceUri = (contracts: string, quoteId: string, platformId: string) =>
  `https://api.coingecko.com/api/v3/simple/token_price/${platformId}?contract_addresses=${contracts}&vs_currencies=${quoteId}`