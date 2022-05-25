/* eslint-disable indent */
import {
    UPDATE_PRICES,
    STREAM_TICKER,
    GET_ASSETS,
    INITIALIZED,
    CACHE_ASSETS,
} from "../types";

export function PriceReducer(state: any, action: any) {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: action.payload,
                loading: false,
            };
        case CACHE_ASSETS:
            return {
                ...state,
                assetCache: action.payload,
                loading: false,
            };
        case GET_ASSETS:
            return {
                ...state,
                assets: action.payload,
                loading: false,
            };
        case UPDATE_PRICES:
            return {
                ...state,
                prices: action.payload,
                loading: false,
            };
        case STREAM_TICKER:
            return {
                ...state,
                tickers: action.payload,
                loading: false,
            };
        default:
            throw new Error();
    }
}