/* eslint-disable react-hooks/rules-of-hooks */
import { AddressLike, BigNumberish, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import usdcIcon from "../../../assets/images/usdcicon.svg";
import { formatter, formatterUSD } from "../../../helper";
import { selectBondInfo } from "../../../redux/features/bondInfoSlice";
import { selectReload, setReload } from "../../../redux/features/updateReloadSlice";
import { approveContract, checkAllowance, Erc20, useBeraReserveContract } from "../../../services";
import useFetchUserBondInfo from "../../../services/hooks/useFetchUserBondInfo";
import { IUserBondInfo } from "../../../types/redux.store.types";
import MintNRedeemModal from "../../MintnRedeemModal";
import { showToast } from "../../ToastMessage";
import UsdcModal from "../../UsdcModal";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
// import happybear from "../../../assets/images/HappyBear.svg"

type CardContainerProps = {
  bondType: string;
};

const CardContainer: React.FC<CardContainerProps> = ({ bondType }) => {
  const [isApproved, setIsApproved] = useState(false);
  const [displayCollateral, setDisplayCollateral] = useState<string>("");
  const [collateralBigint, setCollateralBigint] = useState<bigint>(0n);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isReload, setIsReload] = useState(false);
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);
  const [claimAmount, setClaimedAmount] = useState<string>("");

  const reloadData = useSelector(selectReload);

  useFetchUserBondInfo(bondType, reloadData.isReload);

  const bondInfo: IUserBondInfo = useSelector(selectBondInfo);

  const dispatch = useDispatch();

  const { address: userAddress } = useAccount();

  const decimals = bondType === "USDC" ? 6 : 18;

  const currencyDisplay = bondType === "USDC" ? "USDC" : "LP";

  const { usdcContract, lpTokenContract, bondDepositoryUSDCContract, bondDepositoryLPContract } = useBeraReserveContract();
  const bondContract = bondType === "USDC" ? bondDepositoryUSDCContract : bondDepositoryLPContract;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setDisplayCollateral(value);

      setCollateralBigint(ethers.parseUnits(value, decimals));
    }
  };

  const handleOnMaxAmountClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisplayCollateral(parseFloat(ethers.formatUnits(bondInfo.balance, decimals)).toString());

    setCollateralBigint(
      BigInt(ethers.parseUnits(parseFloat(ethers.formatUnits(bondInfo.balance, decimals)).toString(), decimals))
    );
  };

  const handleBuyBond = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!bondContract || !userAddress) {
      showToast("Error fetching contract", "failed");
      return;
    }
    const minimumBondAmount: bigint = bondType === "USDC" ? 1_000_000n : 1_000_000_000_000_000_000n;

    if (collateralBigint < minimumBondAmount) {
      //show toast of min amount
      showToast(`Minimum Bond Amount: $${ethers.formatUnits(minimumBondAmount, decimals)}`, "failed");
      return;
    }

    if (collateralBigint > BigInt(bondInfo.balance)) {
      //show toast of insufficient balance
      showToast("Insufficient Balance", "failed");
      return;
    }
    if (!isApproved) {
      const txHash = await approveContract(
        bondType === "USDC" ? (usdcContract as Erc20) : (lpTokenContract as Erc20),
        bondContract as AddressLike,
        collateralBigint
      );
      if (!txHash) {
        //show toast of approval failure
        showToast("Approval Failed", "failed");
        return;
      }
      showToast("Approval Successful", "confirmed", txHash);
    }
    const maxPriceToBuyBond: BigNumberish = 1349918559;

    showToast(`Bond Purchase for : $${Number(ethers.formatUnits(collateralBigint, decimals)).toFixed(2)}`, "pending");

    try {
      const txHash = await bondContract?.deposit(collateralBigint as BigNumberish, maxPriceToBuyBond, userAddress as AddressLike);

      // Wait for the transaction to be mined and get the receipt
      const receipt = await txHash?.wait();

      // Check if the transaction was successful
      if (receipt?.status === 1) {
        showToast("Bond Successful", "confirmed", receipt.hash);

        setIsModalOpen(true);

        console.log("Reload Data: ", reloadData.isReload);
        console.log("New Reload Data: ", !reloadData.isReload);

        //setTimeout(() => window.location.reload(), 4000);

        dispatch(setReload({ isReload: !reloadData.isReload }));

        //setTimeout(() => window.location.reload(), 4000);
      } else {
        showToast("Bond Failed", "failed", receipt?.hash);
      }
    } catch (error) {
      console.log("Error: ", error);
      showToast("Execution reverted", "failed");
    }
  };

  const handleClaimBRR = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!bondContract || !userAddress) {
      showToast("Error fetching contract", "failed");
      return;
    }

    const sanitized: number = parseFloat(bondInfo.amountBonded.replace(/[^0-9.-]/g, ""));

    // Convert to integer and back to string
    const result: string = sanitized.toString();

    //check if user has bonded amount
    if (result === "0") {
      showToast("No BRR to claim", "failed");
      return;
    }

    showToast("Claiming BRR ", "pending");

    try {
      const txHash = await bondContract?.redeem(userAddress as AddressLike, false);

      // Wait for the transaction to be mined and get the receipt
      const receipt = await txHash?.wait();

      // Check if the transaction was successful
      if (receipt?.status === 1) {
        showToast("Claim Successful", "confirmed", receipt.hash);

        const claimableAmount = (receipt?.logs[0] as ethers.EventLog)?.args[1];

        const formattedClaimableAmount = formatter.format(parseFloat(ethers.formatUnits(claimableAmount, 9)));

        setIsRedeemModalOpen(true);
        setClaimedAmount(formattedClaimableAmount);

        // setTimeout(() => window.location.reload(), 4000);

        //setIsReload(!isReload);
        dispatch(setReload({ isReload: !reloadData.isReload }));

        //setTimeout(() => window.location.reload(), 4000);
      } else {
        showToast("Claim Failed", "failed", receipt?.hash);
      }
    } catch (error) {
      showToast("Execution reverted", "failed");
    }
  };

  useEffect(() => {
    checkAllowance(
      bondType === "USDC" ? (usdcContract as Erc20) : (lpTokenContract as Erc20),
      userAddress as AddressLike,
      bondContract as AddressLike,
      collateralBigint
    ).then((res) => {
      res ? setIsApproved(res) : setIsApproved(false);
    });
  }, [collateralBigint, usdcContract, userAddress, bondContract, bondType, lpTokenContract]);

  return (
    <>
      <div className=" lg:h-[500px] lg:p-[40px]  lg:bg-[url('./assets/images/cardcontainerbg.svg')] lg:bg-no-repeat  lg:bg-center lg:bg-contain flex flex-col items-center justify-center ">
        <div className="  flex-col justify-center items-center  inline-flex  text-center  lg:min-w-[450px] w-[340px] lg:p-10  ">
          <form action="#" className=" w-full ">
            <div className="">
              <div className=" w-full p-6 ps-5 text-sm text-[#1D1915] border border-[#e9dda4]  rounded-lg  bg-gradient-to-r from-[#F8E07D] flex  ">
                <input
                  value={displayCollateral}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter amount..."
                  className=" block w-11/12  text-sm text-[#1D1915] border border-none focus:outline-none  rounded-lg bg-transparent to-[#C4AC49] mr-2"
                />
                <button
                  onClick={handleOnMaxAmountClick}
                  className="text-red-400 text-xs font-semibold   bg-yellow-200  focus:ring-2 focus:outline-none focus:ring-yellow-300  rounded-lg px-2  "
                >
                  MAX
                </button>
              </div>

              <PrimaryButton buttonText="Bond" onBuyBond_StakeClick={(e) => handleBuyBond(e)} />

              <SecondaryButton buttonText="Claim BRR" onClaimBondClick={(e) => handleClaimBRR(e)} />
            </div>
          </form>
          <div className=" flex-col w-full mt-3 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[#8E7B2D] lg:text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
                Your {currencyDisplay} Balance
              </span>
              <div className="text-white text-sm font-semibold font-['Manrope'] leading-tight flex space-x-2">
                <span>
                  {" "}
                  {formatterUSD.format(parseFloat(ethers.formatUnits(bondInfo.balance, decimals)))} {currencyDisplay}
                </span>{" "}
                <img src={usdcIcon} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8E7B2D] lg:text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
                Your bonded amount
              </span>
              <div className="text-white text-sm font-semibold font-['Manrope'] leading-tight flex space-x-1">
                <span>
                  {" "}
                  {bondInfo.amountBonded} {currencyDisplay}{" "}
                </span>{" "}
                <img src={usdcIcon} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8E7B2D] lg:text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
                Vesting remaining
              </span>
              <span className="text-white text-sm font-semibold font-['Manrope'] leading-tight">
                ~ {bondInfo.vestingPeriod} days
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8E7B2D] lg:text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
                BRR Vesting
              </span>
              <span className="text-white text-sm font-semibold font-['Manrope'] leading-tight">{bondInfo.payout} BRR</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <UsdcModal amount={displayCollateral} currency="USDC" closeModal={() => setIsModalOpen(false)} />}
      {isRedeemModalOpen && (
        <MintNRedeemModal amount={Number(claimAmount)} currency="BRR" closeModal={() => setIsRedeemModalOpen(false)} />
      )}
    </>
  );
};

export default CardContainer;
