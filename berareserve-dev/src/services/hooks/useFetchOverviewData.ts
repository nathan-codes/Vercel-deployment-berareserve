import { useEffect, useMemo } from "react";
import { Config, useClient } from "wagmi";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import {
  BeraReserveContractNamesEnum,
  clientToProvider,
  getBeraReserveContract,
} from "..";
import {
  getTokenPrice,
  getCirculatingSupply,
  getMarketCap,
  getPercentageOfSupplyStaked,
} from "../../services/common";
import { setOverviewData } from "../../redux/features/overviewSlice";
import { formatter, formatterUSD } from "../../helper";
import { AddressLike } from "ethers";
import { setLoader } from "../../redux/features/loaderSlice";

const useFetchOverviewData = () => {
  const useEthersProvider = ({ chainId }: { chainId?: number } = {}) => {
    const client = useClient<Config>({ chainId });
    return useMemo(() => clientToProvider(client!), [client]);
  };  

  const provider = useEthersProvider();

  const beraReserveToken = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN,
        provider,
        ""
      ),
    [provider]
  );

  const stakingContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_STAKING,
        provider,
        ""
      ),
    [provider]
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

  const treasuryContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_TREASURY,
        provider,
        ""
      ),
    [provider]
  );

  console.log("Bera Reserve Token ", beraReserveToken);
  console.log("Staking Contract ", stakingContract);

  //add useMemo to dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      //check if getTokenPrice is not null
      try {
        if (
          !beraReserveToken ||
          !stakingContract ||
          !provider ||
          !usdcContract
        ) {
          return;
        }

        dispatch(setLoader({ isLoaded: true }));

        const usdcBalanceOfTreasuryRaw = await usdcContract?.balanceOf(
          treasuryContract?.getAddress() as AddressLike
        );

        // Fetch all required data, checking for null
        const tokenPriceRaw = await getTokenPrice(beraReserveToken);
        const usdcPrice = 1000n;

        const totalSupplyRaw = await getCirculatingSupply(beraReserveToken);
        const marketCapRaw = await getMarketCap(beraReserveToken);

        const treasuryValueRaw = usdcBalanceOfTreasuryRaw * usdcPrice;

        console.log("Treasury Value Raw ", treasuryValueRaw);

        const percentageOfSupplyStakedRaw = await getPercentageOfSupplyStaked(
          stakingContract,
          beraReserveToken
        );

        // Convert only if values are not null
        const tokenPrice =
          tokenPriceRaw !== null ? tokenPriceRaw?.toString() : "0";
        const totalSupply =
          totalSupplyRaw !== null ? totalSupplyRaw.toString() : "0";
        const marketCap = marketCapRaw !== null ? marketCapRaw.toString() : "0";
        const treasuryValue =
          treasuryValueRaw !== null ? treasuryValueRaw.toString() : "0";
        const percentageOfSupplyStaked =
          percentageOfSupplyStakedRaw !== null
            ? percentageOfSupplyStakedRaw.toString()
            : "0";

        dispatch(
          setOverviewData({
            tokenPrice,
            totalSupply: totalSupply,
            marketCap: formatterUSD.format(
              parseFloat(ethers.formatUnits(marketCap, 6))
            ),
            treasuryValue: formatterUSD.format(
              parseFloat(ethers.formatUnits(treasuryValue, 9))
            ),
            percentageOfSupplyStaked: formatter.format(
              parseFloat(ethers.formatUnits(percentageOfSupplyStaked, 9))
            ),
          })
        );
      } catch (error) {
        console.log("Error fetching overview data: ", error);
      } finally {
        dispatch(setLoader({ isLoaded: false }));
      }
    };

    fetchData();
  }, [
    beraReserveToken,
    stakingContract,
    dispatch,
    provider,
    usdcContract,
    treasuryContract,
  ]);
};

export default useFetchOverviewData;
