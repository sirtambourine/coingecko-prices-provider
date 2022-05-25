import { useState, useContext, useEffect } from "react";
import { CoingeckoPricesContext } from "./context/CoingeckoPricesContext";

const useCoingeckoPrice = (contract: string) => {
  const [data, setData] = useState({ price: undefined, updated: undefined });
  const { prices } = useContext(CoingeckoPricesContext);

  useEffect(() => {
    if (prices.prices) {
      setData({ price: prices.prices[contract], updated: prices?.updated });
    }
  }, [prices]);
  return data;
};

export default useCoingeckoPrice;
