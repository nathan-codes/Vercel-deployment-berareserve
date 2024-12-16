import { useMemo } from "react";
import { Config, useClient } from "wagmi";
import { beraReserveContractAddresses } from "./constants/bera.reserve.contracts.addresses";
import {
  BeraReserveBondDepository__factory,
  BeraReserveOlympusERC20Token__factory,
  BeraReserveOlympusTreasury__factory,
  BeraReserveSOlympusERC20Token__factory,
  BeraReserveStaking__factory,
  Erc20__factory,
} from "./types";
import { clientToProvider } from "./wagmi.ethers.adapter";

export const useBeraReserveContract = () => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };

  const provider = useEthersProvider();

  const {
    OlympusBondDepositoryUSDC,
    OlympusBondDepositoryLP,
    OlympusERC20Token,
    OlympusStaking,
    OlympusTreasury,
    USDC,
    UniswapV2Pair,
    sOlympus,
  } = beraReserveContractAddresses;

  return useMemo(
    () => ({
      bondDepositoryUSDCContract: BeraReserveBondDepository__factory.connect(OlympusBondDepositoryUSDC, provider),
      bondDepositoryLPContract: BeraReserveBondDepository__factory.connect(OlympusBondDepositoryLP, provider),
      bRTokenContract: BeraReserveOlympusERC20Token__factory.connect(OlympusERC20Token, provider),
      bRStakingContract: BeraReserveStaking__factory.connect(OlympusStaking, provider),
      bRTreasuryContract: BeraReserveOlympusTreasury__factory.connect(OlympusTreasury, provider),
      bRSSTokenContract: BeraReserveSOlympusERC20Token__factory.connect(sOlympus, provider),
      usdcContract: Erc20__factory.connect(USDC, provider),
      lpTokenContract: Erc20__factory.connect(UniswapV2Pair, provider),
    }),
    [provider]
  );
};
