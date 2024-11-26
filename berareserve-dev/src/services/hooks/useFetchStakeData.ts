import { useMemo, useEffect } from "react";
import { Config, useClient, useAccount } from "wagmi";
import { useDispatch } from "react-redux";
//import { ethers } from "ethers";
import {
  BeraReserveContractNamesEnum,
  clientToProvider,
  getBeraReserveContract,
} from "..";
import { setStakeInfo } from "../../redux/features/stakeInfoSlice";
//import { formatter } from "../../helper";
import { AddressLike } from "ethers";
import { IWarmupInfo } from "../../types/redux.store.types";

const useFetchStakeData = (isReload: boolean) => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };

  const provider = useEthersProvider();

  const { address: userAddress } = useAccount();

  const stakingContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_STAKING,
        provider,
        ""
      ),
    [provider]
  );

  const sBeraContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_sTOKEN,
        provider,
        ""
      ),
    [provider]
  );

  const beraContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN,
        provider,
        ""
      ),
    [provider]
  );

  const bondDepository = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_BOND_DEPOSITORY,
        provider,
        "USDC"
      ),
    [provider]
  );

  console.log("Staking Contract ", stakingContract);
  console.log("Bera Contract ", beraContract);

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !stakingContract ||
      !userAddress ||
      !beraContract ||
      !sBeraContract ||
      !bondDepository
    ) {
      return;
    }

    const fetchData = async () => {
      // const totalStakedRaw = await stakingContract.totalStaked();
      const warmUpInfo: IWarmupInfo = await stakingContract.warmupInfo(
        userAddress as AddressLike
      );

      const amountStakedRaw = warmUpInfo.deposit;

      //const pendingRewardsRaw = 0;
      const brrBalanceRaw = await beraContract.balanceOf(
        userAddress as AddressLike
      );

      const sbrrBalanceRaw = await sBeraContract.balanceOf(
        userAddress as AddressLike
      );

      const amountStaked =
        amountStakedRaw !== null ? amountStakedRaw.toString() : "0";

      // const pendingRewards =
      //   pendingRewardsRaw !== null ? pendingRewardsRaw.toString() : "0";

      const brrBalance =
        brrBalanceRaw !== null ? brrBalanceRaw.toString() : "0";

      const sbrrBalance =
        sbrrBalanceRaw !== null ? sbrrBalanceRaw.toString() : "0";

      dispatch(
        setStakeInfo({
          // totalStaked: formatter.format(
          //   parseFloat(ethers.formatUnits(totalStaked, 9))
          // ),
          amountStaked: /*formatter.format(
            parseFloat(ethers.formatUnits(amountStaked, 9))
          )*/ amountStaked,
          //apr: apr,
          // depositFee: formatter.format(
          //   parseFloat(ethers.formatUnits(depositFee, 2))
          // ),
          // pendingRewards: formatter.format(
          //   parseFloat(ethers.formatUnits(pendingRewards, 9))
          // ),
          brrBalance: /*formatter.format(
            parseFloat(ethers.formatUnits(brrBalance, 9))
          )*/ brrBalance,
          sbrrBalance: /*formatter.format(
            parseFloat(ethers.formatUnits(sbrrBalance, 9))
          )*/ sbrrBalance,
        })
      );
    };

    fetchData();
  }, [
    stakingContract,
    dispatch,
    userAddress,
    beraContract,
    sBeraContract,
    bondDepository,
    isReload,
  ]);
};

export default useFetchStakeData;
