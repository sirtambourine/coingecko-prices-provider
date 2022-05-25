import { useCoingeckoPrices } from "coingecko-prices-provider";

function App() {
  const { prices, timestamp } = useCoingeckoPrices();

  const contractsExample = [
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
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  ];

  return prices ? (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colspan="2">prices updated: {timestamp}</th>
          </tr>
        </thead>
        <tbody>
          {contractsExample.map((contract) => (
            <tr key={contract}>
              <td>{contract}</td>
              <td>{prices[contract]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default App;
