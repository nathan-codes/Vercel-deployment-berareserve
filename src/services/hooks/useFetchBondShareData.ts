import { ethers } from "ethers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useBeraReserveContract } from "..";
import { getBondPriceInUSD } from "../../services/common";
//import { setLoader } from "../../redux/features/loaderSlice";
import { calculateDiscount } from "../../helper";
import { setBondShare } from "../../redux/features/bondShareSlice";

const useFetchBondShareData = (bondType: string | undefined, isReload: boolean) => {
  const { bRTokenContract, bondDepositoryUSDCContract, bondDepositoryLPContract, usdcContract } = useBeraReserveContract();
  const bondDepository = bondType == "USDC" ? bondDepositoryUSDCContract : bondDepositoryLPContract;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalSupply = await bRTokenContract.totalSupply();
        const tokenPriceRaw = await bRTokenContract.beraReservePrice();
        const maxTokenSupply = (tokenPriceRaw * totalSupply) / (await usdcContract.decimals());

        const remainingSupplyRaw = maxTokenSupply - totalSupply;
        const tokenPriceFormatted = parseFloat(ethers.formatUnits(tokenPriceRaw, 18));

        const bondPriceRaw = await getBondPriceInUSD(bondDepository);

        const bondPriceInUSDC = parseFloat(ethers.formatUnits(bondPriceRaw || 0n, 6));

        const discountRaw = calculateDiscount(tokenPriceFormatted, bondPriceInUSDC);

        const tokenPrice = tokenPriceRaw !== null ? tokenPriceRaw?.toString() : "0";
        const discount = discountRaw !== null ? discountRaw?.toString() : "0";

        const remainingSupply = remainingSupplyRaw !== null ? remainingSupplyRaw?.toString() : "0";

        const bondPrice = bondPriceRaw !== null ? bondPriceRaw?.toString() : "0";

        dispatch(
          setBondShare({
            tokenPrice: tokenPrice,
            remainingBrr: remainingSupply,
            discount: bondType == "LP" ? "0" : discount,
            bondPrice: bondType == "LP" ? "0" : bondPrice,
          })
        );
      } catch (error) {
        console.error("Error fetching bond share data", error);
      } finally {
        //dispatch(setLoader({ isLoaded: false }));
      }
    };

    fetchData();
  }, [bondDepository, bRTokenContract, isReload, dispatch, bondType]);
};

export default useFetchBondShareData;
