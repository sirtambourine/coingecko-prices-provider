var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { PriceReducer } from "../reducer/PriceReducer";
import { getCoingeckoTokenPrices } from "../services/coingecko";
import { UPDATE_PRICES } from "../types";
var defaultValue = {
    intialized: false,
    assets: [],
    prices: {},
    tickers: {},
};
export var CoingeckoPricesContext = createContext(defaultValue);
export var CoingeckoPricesProvider = function (_a) {
    var cryptoCompareApiKey = _a.cryptoCompareApiKey, children = _a.children;
    var initialState = {
        prices: {},
        initialized: false,
    };
    var contracts = [
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "0x0000000000085d4780B73119b644AE5ecd22b376",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        "0xD533a949740bb3306d119CC777fa900bA034cd52",
        "0xba100000625a3754423978a60c9317c58a424e3D",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
    ];
    var _b = __read(useReducer(PriceReducer, initialState), 2), state = _b[0], dispatch = _b[1];
    useEffect(function () {
        function getPrice() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        getCoingeckoTokenPrices(contracts, "usd", "ethereum").then(function (assets) {
                            var now = Date.now();
                            console.log("crypto-prices updated", now, assets);
                            dispatch({
                                type: UPDATE_PRICES,
                                payload: __assign(__assign({}, assets), { timestamp: now }),
                            });
                        });
                    }
                    catch (err) {
                        console.error(err);
                    }
                    return [2];
                });
            });
        }
        void getPrice();
        var intervalId = setInterval(getPrice, 60000);
        return function () { return clearInterval(intervalId); };
    }, [
        contracts.join(","),
    ]);
    var prices = state.prices;
    var providerValue = {
        prices: prices,
    };
    return (_jsx(CoingeckoPricesContext.Provider, __assign({ value: providerValue }, { children: children })));
};
