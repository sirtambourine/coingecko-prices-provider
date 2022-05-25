var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useState, useContext, useEffect } from "react";
import { CoingeckoPricesContext } from "./context/CoingeckoPricesContext";
var useCoingeckoPrice = function (contract) {
    var _a = __read(useState({ price: undefined, updated: undefined }), 2), data = _a[0], setData = _a[1];
    var prices = useContext(CoingeckoPricesContext).prices;
    useEffect(function () {
        if (prices.prices) {
            setData({ price: prices.prices[contract], updated: prices === null || prices === void 0 ? void 0 : prices.updated });
        }
    }, [prices]);
    return data;
};
export default useCoingeckoPrice;
