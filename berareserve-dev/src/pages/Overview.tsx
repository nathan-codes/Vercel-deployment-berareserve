import BearImage from "../assets/images/newbear.svg";
import { useSelector } from "react-redux";
import Card from "../components/buttons/cards/Card";
import useFetchOverviewData from "../services/hooks/useFetchOverviewData";
import { selectOverviewData } from "../redux/features/overviewSlice";
import { formatter, formatterUSD } from "../helper";
import { ethers } from "ethers";
import { selectLoader } from "../redux/features/loaderSlice";
import Loader from "../components/Loader";

const OverviewPage = () => {
  useFetchOverviewData();
  const overviewData = useSelector(selectOverviewData);

  const loader = useSelector(selectLoader);

  return (
    <>
      <div className="  flex items-center justify-center flex-col w-full  ">
        <div className="    mx-auto  w-full">
          <h1 className="text-[#1D1915] text-opacity-90 text-5xl font-normal  capitalize  font-jollylogger  flex w-full  ">
            Overview
          </h1>
          <section className=" flex flex-col   items-center w-[95vw] lg:w-[75vw] font-manrope mt-6 md:mt-0 ">
            <div className="flex flex-col justify-center items-center space-y-4 ">
              <div className=" flex flex-col lg:flex-row space-y-4 md:space-y-0">
                <Card
                  title="Token Price"
                  value={formatterUSD.format(
                    parseFloat(ethers.formatUnits(overviewData.tokenPrice, 6))
                  )}
                  conversion={null}
                />

                <Card
                  title="Circulating Supply"
                  value={formatter.format(
                    parseFloat(ethers.formatUnits(overviewData.totalSupply, 9))
                  )}
                  conversion={null}
                />
                <Card
                  title="Market Cap"
                  value={overviewData.marketCap}
                  conversion={null}
                />
              </div>

              <div className=" flex flex-col lg:flex-row space-y-4 md:space-y-0">
                <Card
                  title="Treasury Value"
                  value={overviewData.treasuryValue}
                  conversion={null}
                />
                <Card
                  title="Percentage Of 
                Supply Staked"
                  value={`${overviewData.percentageOfSupplyStaked.toString()}%`}
                  conversion={null}
                />
              </div>
            </div>
            <div className=" hidden  fixed bottom-0 lg:flex items-center  justify-center">
              <img src={BearImage} alt="" className="w-[60%]" />
            </div>
          </section>
        </div>
      </div>
      {loader.isLoaded && <Loader />}
    </>
  );
};

export default OverviewPage;
