import { http, createConfig } from "wagmi";
import { bartioTestnet } from "./bartioChain";

export const wagmiConfig = createConfig({
  chains: [bartioTestnet],
  transports: {
    [bartioTestnet.id]: http(),
  },
});
