import { useContext } from "react";
import { CoingeckoPricesContext } from "./context/CoingeckoPricesContext";
var useCoingeckoPrices = function () {
    var prices = useContext(CoingeckoPricesContext).prices;
    return prices;
};
export default useCoingeckoPrices;
