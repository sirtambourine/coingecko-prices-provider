import { useState, useContext, useEffect } from "react";
import { PriceContext } from "./context/PriceContext";

const useCoingeckoPrice = (contract: string) => {
  const [data, setData] = useState({ price: undefined, updated: undefined });
  const { prices } = useContext(PriceContext);

  useEffect(() => {
    if (prices.prices) {
      setData({ price: prices.prices[contract], updated: prices?.updated });
    }
  }, [prices]);
  return data;
};

export default useCoingeckoPrice;
