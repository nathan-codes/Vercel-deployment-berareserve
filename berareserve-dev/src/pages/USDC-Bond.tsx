import Card from "../components/buttons/cards/Card";
import CardContainer from "../components/buttons/cards/CardContainer";
import { useSelector } from "react-redux";
import { formatterUSD } from "../helper";
import { ethers } from "ethers";
import { formatter } from "../helper.ts";
import useFetchBondShareData from "../services/hooks/useFetchBondShareData";
import { selectBondShare } from "../redux/features/bondShareSlice";
import { selectReload } from "../redux/features/updateReloadSlice.ts";

const USDCBondPage = () => {
  const reloadData = useSelector(selectReload);

  useFetchBondShareData("USDC", reloadData.isReload);

  const bondShareData = useSelector(selectBondShare);

  console.log("bondShareData", bondShareData);

  return (
    <>
      <div className="lg:h-[75vh] lg:w-[80vw]  flex items-center  flex-col w-[95vw] mt-5 lg:mt-0">
        <div className="    lg:w-[90%]">
          <h1 className="text-[#1D1915] text-opacity-90 text-5xl font-normal  capitalize  font-jollylogger mb-5 lg:mb-0 ">
            USDC Bond
          </h1>
          <section className="flex flex-col-reverse lg:flex    lg:flex-row  lg:me-[25vh] lg:mx-[8vh] font-manrope lg:max-w-[1000px] ">
            <div className=" lg:min-w-[445px]  flex items-center justify-center ">
              <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:space-y-3 space-y-4 mt-10 lg:0">
                <Card
                  title="Bond Price"
                  value={formatterUSD.format(
                    parseFloat(ethers.formatUnits(bondShareData.bondPrice, 6))
                  )}
                  conversion={null}
                />

                <Card
                  title="Discount"
                  value={`${parseFloat(
                    bondShareData.discount.toString()
                  ).toFixed(2)}%`}
                  conversion={null}
                />
                <Card
                  title="Remaining Bonds"
                  value={formatter.format(
                    parseFloat(
                      ethers.formatUnits(bondShareData.remainingBrr, 9)
                    )
                  )}
                  conversion={null}
                />
              </div>
            </div>

            <CardContainer bondType="USDC" />
          </section>
        </div>
      </div>
    </>
  );
};

export default USDCBondPage;
