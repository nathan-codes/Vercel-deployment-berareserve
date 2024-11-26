import { useEffect, useMemo } from "react";
import { Config, useAccount, useClient } from "wagmi";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import {
  BeraReserveContractNamesEnum,
  Erc20,
  clientToProvider,
  getBeraReserveContract,
  getUserBalance,
} from "..";
import { getUserBondInfo } from "..";
import { setBondInfo } from "../../redux/features/bondInfoSlice";
import { formatterUSD, formatter } from "../../helper";
import { ITerms } from "../../types/redux.store.types";

const useFetchUserBondInfo = (
  bondType: string | undefined,
  isReload: boolean
) => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };

  const { address: userAddress } = useAccount();
  const provider = useEthersProvider();

  const bondDepository = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_BOND_DEPOSITORY,
        provider,
        bondType
      ),
    [provider, bondType]
  );

  const usdcContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_USDC,
        provider,
        ""
      ),
    [provider]
  );

  const lpTokenContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_LP_TOKEN,
        provider,
        ""
      ),
    [provider]
  );

  console.log("Bond Depository ", bondDepository);
  console.log("USDC Contract ", usdcContract);
  console.log("LP Token Contract ", lpTokenContract);

  function convertBlocksToTime(
    vestingTermInBlocks: number,
    averageBlockTimeInSeconds: number = 12.07
  ) {
    // Calculate total time in seconds
    const totalTimeInSeconds = vestingTermInBlocks * averageBlockTimeInSeconds;

    const timeInDays = totalTimeInSeconds / 86400;

    return timeInDays;
  }

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bondDepository || !usdcContract || !userAddress) {
      return;
    }

    const fetchUserBondInfo = async () => {
      const userBondInfo = await getUserBondInfo(bondDepository, userAddress);

      const terms: ITerms = await bondDepository.terms();

      const vestingInto = await bondDepository.percentVestedFor(userAddress);

      const convertedVestingPeriod = convertBlocksToTime(
        Number(terms.vestingTerm)
      ).toFixed(4);

      const convertedVestingRemaining = convertBlocksToTime(
        Number(vestingInto)
      ).toFixed(6);

      const convertRebaseBlocksToTime = convertBlocksToTime(2_200);

      console.log("convertRebaseBlocksToTime", convertRebaseBlocksToTime);

      console.log("convertedVestingPeriod", convertedVestingPeriod);

      console.log("convertedVestingRemaining", convertedVestingRemaining);

      const vestingRemaining =
        parseFloat(convertedVestingPeriod) -
        parseFloat(convertedVestingRemaining);

      console.log("vestingRemaining", vestingRemaining);

      //get user usdc Balance
      const userBalanceRaw = await getUserBalance(
        bondType == "USDC"
          ? (usdcContract as Erc20)
          : (lpTokenContract as Erc20),
        userAddress
      );

      const userBalance =
        userBalanceRaw !== null ? userBalanceRaw.toString() : "0";

      const amountBonded =
        userBondInfo !== null ? userBondInfo?.amountBonded : "0";

      const vestingPeriod =
        vestingRemaining !== null ? vestingRemaining.toString() : "0";

      console.log("vestingPeriod", vestingPeriod);

      const tokenDecimal = bondType == "USDC" ? 6 : 18;

      const brrVesting = userBondInfo !== null ? userBondInfo?.payout : "0";

      dispatch(
        setBondInfo({
          balance: userBalance,
          amountBonded: formatterUSD.format(
            parseFloat(ethers.formatUnits(amountBonded, tokenDecimal))
          ),
          vestingPeriod: parseFloat(vestingPeriod).toFixed(3).toString(),
          payout: formatter.format(
            parseFloat(ethers.formatUnits(brrVesting, 9))
          ),
        })
      );
    };

    fetchUserBondInfo();
  }, [
    bondDepository,
    usdcContract,
    dispatch,
    provider,
    userAddress,
    lpTokenContract,
    bondType,
    isReload,
  ]);
};

export default useFetchUserBondInfo;