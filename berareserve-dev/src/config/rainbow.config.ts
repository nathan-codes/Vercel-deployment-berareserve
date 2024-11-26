import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bartioTestnet } from "./bartioChain";

export const rainbowConfig = getDefaultConfig({
  appName: "Bera Reserve",
  projectId: "19996053d75b04fec6cac663e09b2d30",
  chains: [bartioTestnet],
  appUrl: "",
});
