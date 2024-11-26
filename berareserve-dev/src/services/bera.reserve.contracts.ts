import { ContractRunner } from "ethers";
import {
  BeraReserveBondDepository__factory,
  BeraReserveOlympusERC20Token__factory,
  BeraReserveOlympusTreasury__factory,
  BeraReserveStaking__factory,
  BeraReserveSOlympusERC20Token__factory,
  Erc20__factory,
} from "./types";
import { BeraReserveContractNamesEnum } from "./constants/enums";
import { getBeraReserveContractAddress } from "./constants/bera.reserve.contracts.addresses";

export const getBeraReserveContract = <T extends keyof ContractMapping>(
  contractName: T,
  runner: ContractRunner,
  bondType?: string
): ContractMapping[T] | null => {
  switch (contractName) {
    case BeraReserveContractNamesEnum.BERA_RESERVE_BOND_DEPOSITORY:
      return BeraReserveBondDepository__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];
    case BeraReserveContractNamesEnum.BERA_RESERVE_STAKING:
      return BeraReserveStaking__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    case BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN:
      return BeraReserveOlympusERC20Token__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    case BeraReserveContractNamesEnum.BERA_RESERVE_TREASURY:
      return BeraReserveOlympusTreasury__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    case BeraReserveContractNamesEnum.BERA_RESERVE_sTOKEN:
      return BeraReserveSOlympusERC20Token__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    case BeraReserveContractNamesEnum.BERA_RESERVE_USDC:
      return Erc20__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    case BeraReserveContractNamesEnum.BERA_RESERVE_LP_TOKEN:
      return Erc20__factory.connect(
        getBeraReserveContractAddress(contractName, bondType)!,
        runner
      ) as ContractMapping[T];

    default:
      return null;
  }
};

interface ContractMapping {
  [BeraReserveContractNamesEnum.BERA_RESERVE_BOND_DEPOSITORY]: ReturnType<
    typeof BeraReserveBondDepository__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_STAKING]: ReturnType<
    typeof BeraReserveStaking__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN]: ReturnType<
    typeof BeraReserveOlympusERC20Token__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_TREASURY]: ReturnType<
    typeof BeraReserveOlympusTreasury__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_sTOKEN]: ReturnType<
    typeof BeraReserveSOlympusERC20Token__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_USDC]: ReturnType<
    typeof Erc20__factory.connect
  >;

  [BeraReserveContractNamesEnum.BERA_RESERVE_LP_TOKEN]: ReturnType<
    typeof Erc20__factory.connect
  >;
}
