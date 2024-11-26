import { useEffect, useMemo } from "react";
import { Config, useClient } from "wagmi";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import {
  BeraReserveContractNamesEnum,
  clientToProvider,
  getBeraReserveContract,
} from "..";
import { getBondPriceInUSD } from "../../services/common";
//import { setLoader } from "../../redux/features/loaderSlice";
import { calculateDiscount } from "../../helper";
import { setBondShare } from "../../redux/features/bondShareSlice";

const useFetchBondShareData = (
  bondType: string | undefined,
  isReload: boolean
) => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };

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

  const beraReserveToken = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN,
        provider,
        ""
      ),
    [provider]
  );

  console.log("Bond Depository ", bondDepository);
  console.log("Bera Reserve Token ", beraReserveToken);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!beraReserveToken || !bondDepository || !provider) {
          return;
        }

        const maxTokenSupplyInfo = await beraReserveToken.maxTokenSupply();
        const totalSupply = await beraReserveToken.totalSupply();

        const remainingSupplyRaw = maxTokenSupplyInfo - totalSupply;

        const tokenPriceRaw = await beraReserveToken.beraReservePrice();

        const tokenPriceFormatted = parseFloat(
          ethers.formatUnits(tokenPriceRaw, 18)
        );

        const bondPriceRaw = await getBondPriceInUSD(bondDepository);

        console.log("Bond Price Raw ", bondPriceRaw);

        const bondPriceInUSDC = parseFloat(
          ethers.formatUnits(bondPriceRaw || 0n, 6)
        );

        const discountRaw = calculateDiscount(
          tokenPriceFormatted,
          bondPriceInUSDC
        );

        const tokenPrice =
          tokenPriceRaw !== null ? tokenPriceRaw?.toString() : "0";
        const discount = discountRaw !== null ? discountRaw?.toString() : "0";

        const remainingSupply =
          remainingSupplyRaw !== null ? remainingSupplyRaw?.toString() : "0";

        const bondPrice =
          bondPriceRaw !== null ? bondPriceRaw?.toString() : "0";

        console.log("Bond Price ", bondPrice);

        dispatch(
          setBondShare({
            tokenPrice: tokenPrice,
            remainingBrr: remainingSupply,
            discount: bondType == "LP" ? "0" : discount,
            bondPrice: bondType == "LP" ? "0" : bondPrice,
          })
        );
      } catch (error) {
        console.log("Error fetching bond share data");
      } finally {
        //dispatch(setLoader({ isLoaded: false }));
      }
    };

    fetchData();
  }, [
    bondDepository,
    beraReserveToken,
    provider,
    isReload,
    dispatch,
    bondType,
  ]);
};

export default useFetchBondShareData;
