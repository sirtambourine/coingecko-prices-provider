import axios from "axios";
import { getCoingeckoSimpleTokenPriceUri } from "../utils";
import React from "react";

export const fetchCoingeckoTokenPrice =
  (fetchFunction: any) =>
  async (contract: string, quote: string, platform: string) => {
    try {
      const addr = contract.toLowerCase();
      const quoteId = quote.toLowerCase();
      const platformId = platform.toLowerCase();
      const url = getCoingeckoSimpleTokenPriceUri(addr, quoteId, platformId);
      const data = await axios(url);
      const result = await data.data;
      const price = result[addr][quoteId];
      return price ? price + "" : undefined;
    } catch (_) {
      return undefined;
    }
  };

export const getCoingeckoTokenPrice = fetchCoingeckoTokenPrice(
  typeof window !== "undefined" && window.fetch
);

export async function getCoingeckoTokenPrices(
  contracts: string[],
  quote: string,
  platform: string
): Promise<any> {
  const prices: any = {};

  const url = getCoingeckoSimpleTokenPriceUri(
    contracts.join(","),
    quote,
    platform
  );
  const res = await axios(url);
  const data = await res?.data;

  try {
    contracts.map((address) => {
      if (data[address.toLowerCase()] === undefined) {
        console.error("No price for address", address);
      } else {
        return (prices[address] = data[address.toLowerCase()][quote]);
      }
    });
  } catch (error) {
    console.error(error);
  }

  return { prices, error: !(res.status >= 200 && res.status < 300) };
}
