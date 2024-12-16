import Card from "../components/buttons/cards/Card";
import StakeCard from "../components/buttons/cards/StakeCard";
import { useSelector } from "react-redux";
import { formatter } from "../helper";
import { ethers } from "ethers";
import { selectReload } from "../redux/features/updateReloadSlice";
import useFetchStakeShareData from "../services/hooks/useFetchStakeShareData";
import { selectStakeShare } from "../redux/features/stakeShareSlice";

const StakePage = () => {
  const reloadData = useSelector(selectReload);

  useFetchStakeShareData(reloadData.isReload);

  const stakeShareData = useSelector(selectStakeShare);

  return (
    <>
      <div className=" flex items-center  flex-col  w-[90vw] lg:w-full  ">
        <div className="  flex-col   ">
          <h1 className=" text-[#1D1915] text-opacity-90 text-5xl font-normal  capitalize  font-jollylogger">
            Stake
          </h1>
          <section className="flex flex-col-reverse   lg:flex-row   lg:me-[25vh] lg:justify-start font-manrope lg:max-w-[1000px]   ">
            <div className=" lg:min-w-[445px] flex items-center">
              <div className="flex flex-wrap items-center justify-center space-y-4 lg:space-y-0">
                <Card
                  title="Total Staked"
                  value={formatter.format(
                    parseFloat(
                      ethers.formatUnits(stakeShareData.totalStaked, 9)
                    )
                  )}
                  conversion={null}
                />

                <Card
                  title="APR(30D)"
                  value={`${formatter.format(parseFloat(stakeShareData.apr))}%`}
                  conversion={null}
                />

                <Card
                  title="Deposit Fee"
                  value={`${formatter.format(
                    parseFloat(ethers.formatUnits(stakeShareData.depositFee, 2))
                  )}%`}
                  conversion={null}
                />
              </div>
            </div>

            <StakeCard />
          </section>
        </div>
      </div>
    </>
  );
};

export default StakePage;
