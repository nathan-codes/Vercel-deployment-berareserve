import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";
import { calculateAPR, useBeraReserveContract } from "..";
import { setStakeShare } from "../../redux/features/stakeShareSlice";
import { ITerms } from "../../types/redux.store.types";
//import { calculateAPR } from "../../services/common";

const useFetchStakeShareData = (isReload: boolean) => {
  const { address: userAddress } = useAccount();

  const { bRStakingContract, bRSSTokenContract, bRTokenContract, bondDepositoryUSDCContract } = useBeraReserveContract();

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !bRStakingContract ||
      !userAddress ||
      !bRTokenContract ||
      !bRSSTokenContract ||
      !bondDepositoryUSDCContract ||
      !bRSSTokenContract
    ) {
      return;
    }

    const fetchData = async () => {
      const totalStakedRaw = await bRStakingContract.totalStaked();

      const aprRaw = await calculateAPR(bRSSTokenContract);

      console.log("aprRaw", aprRaw);

      const bondTerms: ITerms = await bondDepositoryUSDCContract.terms();
      const depositFeeRaw = bondTerms.fee;

      const totalStaked = totalStakedRaw !== null ? totalStakedRaw.toString() : "0";
      const apr = aprRaw !== null ? aprRaw.toString() : "0";
      const depositFee = depositFeeRaw !== null ? depositFeeRaw.toString() : "0";

      dispatch(setStakeShare({ totalStaked, apr, depositFee }));
    };
    fetchData();
  }, [
    isReload,
    bRStakingContract,
    userAddress,
    bRTokenContract,
    bRSSTokenContract,
    bondDepositoryUSDCContract,
    dispatch,
    bRSSTokenContract,
  ]);
};

export default useFetchStakeShareData;
