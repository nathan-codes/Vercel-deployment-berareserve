import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { Link } from "react-router-dom";
import { AddressLike, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";
import { Erc20, clientToSigner } from "../../../services";
import { type Config, useConnectorClient, useAccount } from "wagmi";
import {
  BeraReserveContractNamesEnum,
  getBeraReserveContract,
  checkAllowance,
  approveContract,
} from "../../../services";
import { showToast } from "../../ToastMessage";
import { formatter } from "../../../helper";
import useFetchStakeData from "../../../services/hooks/useFetchStakeData";
import { useSelector } from "react-redux";
import { selectStakeInfo } from "../../../redux/features/stakeInfoSlice";
import { selectReload } from "../../../redux/features/updateReloadSlice";
import { setReload } from "../../../redux/features/updateReloadSlice";
import { useDispatch } from "react-redux";

const StakeCard = () => {
  //const { stakeData } = props;
  const signer = useEthersSigner();
  const { address: userAddress } = useAccount();
  const [displayStake, setDisplayStake] = useState<string>("");
  const [stakeAmount, setStakeAmount] = useState<bigint>(0n);
  const [isApproved, setIsApproved] = useState(false);
  //const [isReload, setIsReload] = useState(false);

  const reloadData = useSelector(selectReload);

  useFetchStakeData(reloadData.isReload);

  const stakeData = useSelector(selectStakeInfo);

  const dispatch = useDispatch();

  function useEthersSigner({ chainId }: { chainId?: number } = {}) {
    const { data: client } = useConnectorClient<Config>({ chainId });
    return useMemo(
      () => (client ? clientToSigner(client) : undefined),
      [client]
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setDisplayStake(value);
      setStakeAmount(ethers.parseUnits(value, 9));
    }
  };

  const handleOnMaxAmountClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisplayStake(
      parseFloat(ethers.formatUnits(stakeData.brrBalance, 9)).toString()
    );
    setStakeAmount(
      BigInt(
        ethers.parseUnits(
          parseFloat(ethers.formatUnits(stakeData.brrBalance, 9)).toString(),
          9
        )
      )
    );
  };

  const stakingContract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_STAKING,
        signer!,
        ""
      ),
    [signer]
  );

  const bRRcontract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_TOKEN,
        signer!,
        ""
      ),
    [signer]
  );

  const handleClaimsBRR = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!stakingContract || !userAddress) {
      showToast("Error fetching contract", "failed");
      return;
    }

    showToast("Claiming sBRR", "pending");

    try {
      const txHashClaim = await stakingContract?.claim(
        userAddress as AddressLike
      );

      const receiptClaim = await txHashClaim?.wait();

      if (receiptClaim?.status === 1) {
        showToast("Claim Successful", "confirmed", receiptClaim?.hash);

        dispatch(setReload({ isReload: !reloadData.isReload }));
      } else {
        showToast("Claim Failed", "failed", receiptClaim?.hash);
      }
    } catch (error) {
      showToast("Execution reverted", "failed");
    }
  };

  const handleStakeBRR = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stakingContract || !bRRcontract || !userAddress) {
      showToast("Error fetching contract", "failed");
      return;
    }

    const minimumStakeAmount: bigint = 1_000_000_0n; //0.01 BRR

    if (stakeAmount < minimumStakeAmount) {
      //show toast of min amount
      showToast(
        `Minimum Stake Amount: ${ethers.formatUnits(
          minimumStakeAmount,
          9
        )} BRR`,
        "failed"
      );
      return;
    }

    if (stakeAmount > BigInt(stakeData.brrBalance)) {
      //show toast of insufficient balance
      showToast("Insufficient Balance", "failed");
      return;
    }

    if (!isApproved) {
      const txHash = await approveContract(
        bRRcontract as Erc20,
        stakingContract as AddressLike,
        stakeAmount
      );
      if (!txHash) {
        //show toast of approval failure
        showToast("Approval Failed", "failed");
        return;
      }
      showToast("Approval Successful", "confirmed", txHash);
    }

    showToast(
      `Staking Initiated: ${Number(ethers.formatUnits(stakeAmount, 9)).toFixed(
        3
      )} BRR`,
      "pending"
    );

    try {
      const txHash = await stakingContract?.stake(
        stakeAmount,
        userAddress as AddressLike
      );

      // Wait for the transaction to be mined and get the receipt
      const receipt = await txHash?.wait();

      // Check if the transaction was successful
      if (receipt?.status === 1) {
        showToast("Staking BRR Successful", "confirmed", receipt.hash);

        dispatch(setReload({ isReload: !reloadData.isReload }));
      } else {
        showToast("Staking BRR Failed", "failed", receipt?.hash);
      }
    } catch (error) {
      showToast("Execution reverted", "failed");
    }
  };

  useEffect(() => {
    checkAllowance(
      bRRcontract as Erc20,
      userAddress as AddressLike,
      stakingContract as AddressLike,
      stakeAmount
    ).then((res) => {
      res ? setIsApproved(res) : setIsApproved(false);
    });
  }, [bRRcontract, stakeAmount, stakingContract, userAddress]);
  return (
    <>
      <div className=" lg:h-[500px] lg:p-[40px]  lg:bg-[url('./assets/images/cardcontainerbg.svg')] bg-no-repeat  bg-center bg-contain flex flex-col items-center justify-center  ">
        <div className="flex-col justify-center items-center  inline-flex  text-center lg:min-w-[400px]  p-6   ">
          <div className="border rounded-lg border-yellow-500 flex justify-between lg:w-[350px] mb-4 border-opacity-20 p-2">
            <Link to="/stake">
              <button className=" w-[154.50px] h-9 px-4 py-3 rounded-lg flex-col justify-center items-center inline-flex   bg-[#83B3D0] ">
                Stake
              </button>
            </Link>
            <Link to="/unstake">
              <button className="w-[154.50px] h-9 px-4 py-3 rounded-lg flex-col justify-center items-center inline-flex  hover:bg-[#83B3D0] hover:bg-opacity-50">
                Unstake
              </button>
            </Link>
          </div>
          <form action="#" className=" w-full ">
            <div className="">
              <div className=" w-full p-2 ps-5 text-sm text-white border border-[#e9dda4]  rounded-lg bg-gradient-to-r from-[#F8E07D]  flex  ">
                <input
                  value={displayStake}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Enter amount..."
                  className=" block w-7/12  text-sm  border border-none focus:outline-none  rounded- bg-transparent text-[#1D1915] mr-2"
                />

                <div className=" flex items-center justify-center ">
                  <div className="">
                    <span className="text-yellow-400 text-xs font-normal font-['Manrope'] leading-none inline-block">
                      Balance:{" "}
                      <span className="text-white">
                        {formatter.format(
                          parseFloat(
                            ethers.formatUnits(stakeData.brrBalance, 9)
                          )
                        )}{" "}
                        BRR{" "}
                      </span>
                    </span>
                    <button
                      onClick={handleOnMaxAmountClick}
                      className="text-red-400 text-xs font-semibold   bg-yellow-200  focus:ring-2 focus:outline-none focus:ring-yellow-300  rounded-lg px-2 py-1  self-end "
                    >
                      {" "}
                      MAX
                    </button>
                  </div>
                  <div>
                    {/* <button className="text-white text-xs font-semibold   bg-[#32291C]  focus:ring-2 focus:outline-none focus:ring-yellow-300  rounded-lg px-4 py-3  ">
                    BRR
                  </button> */}
                  </div>
                </div>
              </div>

              <PrimaryButton
                buttonText="Stake"
                onBuyBond_StakeClick={handleStakeBRR}
              />

              <SecondaryButton
                buttonText="Claim sBRR"
                onClaimBondClick={handleClaimsBRR}
              />
            </div>
          </form>
          <div className=" flex-col w-full mt-3 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
                Staked Balance
              </span>
              <div className="text-white text-sm font-semibold font-['Manrope'] leading-tight flex space-x-2">
                <span>
                  {formatter.format(
                    parseFloat(ethers.formatUnits(stakeData.amountStaked, 9))
                  )}{" "}
                  BRR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeCard;
