import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bartioTestnet } from "./bartioChain";

export const rainbowConfig = getDefaultConfig({
  appName: "Bera Reserve",
  projectId: import.meta.env.VITE_RAINBOW_KIT_PROJECT_ID || "",
  chains: [bartioTestnet],
  appUrl: "",
});
