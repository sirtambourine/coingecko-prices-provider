## About coingecko crypto prices

coingecko crypto prices provides a simple context provider and hooks react app for using live plug and play prices.
🔴WIP LIBRARY🔴

<!-- GETTING STARTED -->

## Getting Started

Install React Crypto Icons from npm

```sh
npm install coingecko-prices-provider
```

Or with yarn

```sh
yarn add coingecko-prices-provider
```

## Usage

```js
import {
  CoingeckoPricesProvider,
  useCoingeckoPrices,
} from "coingecko-prices-provider";

const Example = () => {
  const { price: balPrice } = useCoingeckoPrices(
    "0xba100000625a3754423978a60c9317c58a424e3D"
  );
  return <div>Bal: {balPrice}</div>;
};

const App = () => {
  return (
    <div className="App">
      <CoingeckoPricesProvider>
        <Example />
      </CoingeckoPricesProvider>
    </div>
  );
};

export default App;
```
