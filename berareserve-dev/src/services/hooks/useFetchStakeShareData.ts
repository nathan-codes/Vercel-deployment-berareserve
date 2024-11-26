import { useMemo, useEffect } from "react";
import { Config, useClient, useAccount } from "wagmi";
import { useDispatch } from "react-redux";
import {
  BeraReserveContractNamesEnum,
  calculateAPR,
  clientToProvider,
  getBeraReserveContract,
} from "..";
import { ITerms } from "../../types/redux.store.types";
import { setStakeShare } from "../../redux/features/stakeShareSlice";
//import { calculateAPR } from "../../services/common";

const useFetchStakeShareData = (isReload: boolean) => {
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

  const sBeraReserveToken = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_sTOKEN,
        provider,
        ""
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
      !bondDepository ||
      !sBeraReserveToken
    ) {
      return;
    }

    const fetchData = async () => {
      const totalStakedRaw = await stakingContract.totalStaked();

      const aprRaw = await calculateAPR(sBeraReserveToken);

      console.log("aprRaw", aprRaw);

      const bondTerms: ITerms = await bondDepository.terms();
      const depositFeeRaw = bondTerms.fee;

      const totalStaked =
        totalStakedRaw !== null ? totalStakedRaw.toString() : "0";
      const apr = aprRaw !== null ? aprRaw.toString() : "0";
      const depositFee =
        depositFeeRaw !== null ? depositFeeRaw.toString() : "0";

      dispatch(setStakeShare({ totalStaked, apr, depositFee }));
    };
    fetchData();
  }, [
    isReload,
    stakingContract,
    userAddress,
    beraContract,
    sBeraContract,
    bondDepository,
    dispatch,
    sBeraReserveToken,
  ]);
};

export default useFetchStakeShareData;
