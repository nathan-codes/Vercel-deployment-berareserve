import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";
//import { ethers } from "ethers";
import { useBeraReserveContract } from "..";
import { setStakeInfo } from "../../redux/features/stakeInfoSlice";
//import { formatter } from "../../helper";
import { AddressLike } from "ethers";
import { IWarmupInfo } from "../../types/redux.store.types";

const useFetchStakeData = (isReload: boolean) => {
  const { address: userAddress } = useAccount();

  const { bRStakingContract, bRSSTokenContract, bRTokenContract, bondDepositoryUSDCContract } = useBeraReserveContract();

  console.log("Staking Contract ", bRStakingContract);
  console.log("Bera Contract ", bRTokenContract);

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bRStakingContract || !userAddress || !bRTokenContract || !bRSSTokenContract || !bondDepositoryUSDCContract) {
      return;
    }

    const fetchData = async () => {
      // const totalStakedRaw = await stakingContract.totalStaked();
      const warmUpInfo: IWarmupInfo = await bRStakingContract.warmupInfo(userAddress as AddressLike);

      const amountStakedRaw = warmUpInfo.deposit;

      //const pendingRewardsRaw = 0;
      const brrBalanceRaw = await bRTokenContract.balanceOf(userAddress as AddressLike);

      const sbrrBalanceRaw = await bRSSTokenContract.balanceOf(userAddress as AddressLike);

      const amountStaked = amountStakedRaw !== null ? amountStakedRaw.toString() : "0";

      // const pendingRewards =
      //   pendingRewardsRaw !== null ? pendingRewardsRaw.toString() : "0";

      const brrBalance = brrBalanceRaw !== null ? brrBalanceRaw.toString() : "0";

      const sbrrBalance = sbrrBalanceRaw !== null ? sbrrBalanceRaw.toString() : "0";

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
  }, [bRStakingContract, dispatch, userAddress, bRTokenContract, bRSSTokenContract, bondDepositoryUSDCContract, isReload]);
};

export default useFetchStakeData;
