import { useState, useContext, useEffect } from "react";
import { CoingeckoPricesContext } from "./context/CoingeckoPricesContext";

const useCoingeckoPrices = () => {
  const { prices } = useContext(CoingeckoPricesContext);

  return prices;
};

export default useCoingeckoPrices;
