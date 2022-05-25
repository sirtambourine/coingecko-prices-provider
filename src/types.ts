export const UPDATE_PRICES = Symbol("Update crypto prices");
export const STREAM_TICKER = Symbol("Stream crypto ticker");
export const GET_ASSETS = Symbol("Gets cryptocurrency assets");
export const INITIALIZED = Symbol("Gets cryptocurrency assets");
export const CACHE_ASSETS = Symbol("Cache asset mapping");
export interface ITicker {
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
export interface UseCoingeckoTokenPricesOptions {
  quote?: string;
  platform?: string;
  interval?: number;
}
