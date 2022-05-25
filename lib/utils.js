export var getCoingeckoSimpleTokenPriceUri = function (contracts, quoteId, platformId) {
    return "https://api.coingecko.com/api/v3/simple/token_price/".concat(platformId, "?contract_addresses=").concat(contracts, "&vs_currencies=").concat(quoteId);
};
