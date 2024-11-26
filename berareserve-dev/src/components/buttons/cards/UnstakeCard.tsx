import PrimaryButton from "../PrimaryButton";
import { Link } from "react-router-dom";
import { AddressLike, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";
import { Erc20, clientToSigner, getUserBalance } from "../../../services";
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
import { selectReload } from "../../../redux/features/updateReloadSlice";
import { setReload } from "../../../redux/features/updateReloadSlice";
import { useDispatch } from "react-redux";

const UnstakeCard = () => {
  const signer = useEthersSigner();
  const { address: userAddress } = useAccount();
  const [displayUnStake, setDisplayUnStake] = useState<string>("");
  const [unStakeAmount, setUnStakeAmount] = useState<bigint>(0n);
  const [isApproved, setIsApproved] = useState(false);
  const [sbrrBalance, setSBRRBalance] = useState<bigint>(0n);

  const reloadData = useSelector(selectReload);

  useFetchStakeData(reloadData.isReload);

  const decimals = 9;

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
    setDisplayUnStake(value);
    if (/^\d*\.?\d*$/.test(value)) {
      setUnStakeAmount(ethers.parseUnits(value, decimals));
    }
  };

  const handleOnMaxAmountClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisplayUnStake(
      parseFloat(ethers.formatUnits(sbrrBalance, decimals)).toString()
    );
    setUnStakeAmount(
      BigInt(
        ethers.parseUnits(
          parseFloat(ethers.formatUnits(sbrrBalance, decimals)).toString(),
          decimals
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

  const sBRRcontract = useMemo(
    () =>
      getBeraReserveContract(
        BeraReserveContractNamesEnum.BERA_RESERVE_sTOKEN,
        signer!,
        ""
      ),
    [signer]
  );

  const balance = getUserBalance(
    sBRRcontract as Erc20,
    userAddress as AddressLike
  );

  useEffect(() => {
    balance.then((res) => {
      setSBRRBalance(res ?? 0n);
    });
  }, [balance]);

  const handleUnStakeBRR = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stakingContract || !sBRRcontract || !userAddress) {
      showToast("Error fetching contract", "failed");
      return;
    }

    const minimumUnStakeAmount: bigint = 1_000_000_0n; //0.01 BRR

    if (unStakeAmount < minimumUnStakeAmount) {
      //show toast of min amount
      showToast(
        `Minimum UnStake Amount: ${ethers.formatUnits(
          minimumUnStakeAmount,
          9
        )} sBRR`,
        "failed"
      );
      return;
    }

    if (unStakeAmount > BigInt(sbrrBalance)) {
      //show toast of insufficient balance
      showToast("Insufficient Balance", "failed");
      return;
    }

    if (!isApproved) {
      const txHash = await approveContract(
        sBRRcontract as Erc20,
        stakingContract as AddressLike,
        unStakeAmount
      );
      if (!txHash) {
        //show toast of approval failure
        showToast("Approval Failed", "failed");
        return;
      }
      showToast("Approval Successful", "confirmed", txHash);
    }

    showToast(
      `UnStaking Initiated: $${Number(
        ethers.formatUnits(unStakeAmount, decimals)
      ).toFixed(2)} BRR`,
      "pending"
    );

    try {
      const txHash = await stakingContract?.unstake(unStakeAmount, true);

      // Wait for the transaction to be mined and get the receipt
      const receipt = await txHash?.wait();

      // Check if the transaction was successful
      if (receipt?.status === 1) {
        showToast("UnStaking BRR Successful", "confirmed", receipt.hash);

        dispatch(setReload({ isReload: !reloadData.isReload }));
      } else {
        showToast("UnStaking BRR Failed", "failed", receipt?.hash);
      }
    } catch (error) {
      showToast("Execution reverted", "failed");
    }
  };
  useEffect(() => {
    checkAllowance(
      sBRRcontract as Erc20,
      userAddress as AddressLike,
      stakingContract as AddressLike,
      unStakeAmount
    ).then((res) => {
      res ? setIsApproved(res) : setIsApproved(false);
    });
  }, [sBRRcontract, unStakeAmount, stakingContract, userAddress]);
  return (
    <div className=" lg:h-[500px] lg:p-[40px]  lg:bg-[url('./assets/images/cardcontainerbg.svg')] bg-no-repeat  bg-center bg-contain flex flex-col items-center justify-center   ">
      <div className="flex-col justify-center items-center  inline-flex  text-center lg:min-w-[400px]  p-6   ">
        <div className="border rounded-lg border-yellow-500 flex justify-between lg:w-[350px] mb-4 border-opacity-20 p-2">
          <Link to="/stake">
            <button className=" w-[154.50px]  bg-transparent  h-9 px-4 py-3 rounded-lg flex-col justify-center items-center inline-flex hover:bg-[#83B3D0] hover:bg-opacity-50 ">
              Stake
            </button>
          </Link>
          <Link to="/unstake">
            <button className="w-[154.50px] h-9 px-4 py-3 rounded-lg flex-col justify-center items-center inline-flex   bg-[#83B3D0]">
              Unstake
            </button>
          </Link>
        </div>
        <form action="#" className=" w-full ">
          <div className="">
            <div className=" w-full p-4 ps-5 text-sm text-white border border-[#e9dda4]  rounded-lg bg-gradient-to-r from-[#F8E07D]  flex  ">
              <input
                type="text"
                value={displayUnStake}
                onChange={handleInputChange}
                className=" block w-11/12  text-sm  border border-none focus:outline-none  rounded-lg text-[#1D1915] bg-transparent mr-2"
                placeholder="Enter Amount..."
                required
              />
              <button
                onClick={handleOnMaxAmountClick}
                className="text-red-400 text-xs font-semibold   bg-yellow-200  focus:ring-2 focus:outline-none focus:ring-yellow-300  rounded-lg px-2 py-1  self-end "
              >
                MAX
              </button>
            </div>

            <PrimaryButton
              buttonText="Unstake"
              onBuyBond_StakeClick={handleUnStakeBRR}
            />
          </div>
        </form>
        <div className=" flex-col w-full mt-3 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-yellow-400 text-sm font-normal font-['Manrope'] leading-tight">
              sBRR Balance
            </span>
            <div className="text-white text-sm font-semibold font-['Manrope'] leading-tight flex space-x-2">
              <span>
                {" "}
                {formatter.format(
                  parseFloat(ethers.formatUnits(sbrrBalance, decimals))
                )}{" "}
                sBRR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnstakeCard;
