import { AddressLike, ethers } from "ethers";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Config, useClient } from "wagmi";
import { clientToProvider, useBeraReserveContract } from "..";
import { formatter, formatterUSD } from "../../helper";
import { setLoader } from "../../redux/features/loaderSlice";
import { setOverviewData } from "../../redux/features/overviewSlice";
import { getCirculatingSupply, getPercentageOfSupplyStaked, getTokenPrice } from "../../services/common";

const useFetchOverviewData = () => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };

  const provider = useEthersProvider();

  const { bRTokenContract, bRStakingContract, usdcContract, bRTreasuryContract } = useBeraReserveContract();

  console.log("Bera Reserve Token ", bRTokenContract);
  console.log("Staking Contract ", bRStakingContract);

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      //check if getTokenPrice is not null
      try {
        if (!bRTokenContract || !bRStakingContract || !provider || !usdcContract) {
          return;
        }

        dispatch(setLoader({ isLoaded: true }));

        const usdcBalanceOfTreasuryRaw = await usdcContract?.balanceOf(bRTreasuryContract?.getAddress() as AddressLike);

        // Fetch all required data, checking for null
        const tokenPriceRaw = await getTokenPrice(bRTokenContract);
        const usdcPrice = 1000n;

        const totalSupplyRaw = await getCirculatingSupply(bRTokenContract);
        const tokenDecimal = 6;

        const marketCapRaw = (tokenPriceRaw! * totalSupplyRaw!) / 10n ** BigInt(tokenDecimal);

        const treasuryValueRaw = usdcBalanceOfTreasuryRaw * usdcPrice;

        const percentageOfSupplyStakedRaw = await getPercentageOfSupplyStaked(bRStakingContract, bRTokenContract);

        // Convert only if values are not null
        const tokenPrice = tokenPriceRaw !== null ? tokenPriceRaw?.toString() : "0";
        const totalSupply = totalSupplyRaw !== null ? totalSupplyRaw.toString() : "0";
        const marketCap = marketCapRaw !== null ? marketCapRaw.toString() : "0";
        const treasuryValue = treasuryValueRaw !== null ? treasuryValueRaw.toString() : "0";
        const percentageOfSupplyStaked = percentageOfSupplyStakedRaw !== null ? percentageOfSupplyStakedRaw.toString() : "0";

        dispatch(
          setOverviewData({
            tokenPrice,
            totalSupply: totalSupply,
            marketCap: formatterUSD.format(parseFloat(ethers.formatUnits(marketCap, 9))),
            treasuryValue: formatterUSD.format(parseFloat(ethers.formatUnits(treasuryValue, 9))),
            percentageOfSupplyStaked: formatter.format(parseFloat(ethers.formatUnits(percentageOfSupplyStaked, 9))),
          })
        );
      } catch (error) {
        console.log("Error fetching overview data: ", error);
      } finally {
        dispatch(setLoader({ isLoaded: false }));
      }
    };

    fetchData();
  }, [bRTokenContract, bRStakingContract, dispatch, provider, usdcContract, bRTreasuryContract]);
};

export default useFetchOverviewData;
