import { defineChain } from "viem";

export const bartioTestnet = defineChain({
  id: 80084,
  name: "Bartio",
  nativeCurrency: { name: "BERA", symbol: "BERA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://bartio.rpc.berachain.com"] },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://bartio.beratrail.io" },
  },
});
