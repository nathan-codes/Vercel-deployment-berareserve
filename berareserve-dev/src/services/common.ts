import { ethers, AddressLike, ContractTransactionResponse } from "ethers";
import {
  Erc20,
  BeraReserveOlympusERC20Token,
  BeraReserveSOlympusERC20Token,
  BeraReserveStaking,
  BeraReserveBondDepository,
} from "./types";
import { IBondInfo, IRebase } from "../types/redux.store.types";

/**
 * @dev check if a contract has enough allowance to spend a user's ERC20 tokens
 * @param tokenContract the ethers contract instance of the token
 * @param owner the address of the user
 * @param spender the address of the contract
 * @param amount the amount to check against
 * @returns
 */
export const checkAllowance = async (
  tokenContract: ethers.Contract | Erc20,
  owner: AddressLike,
  spender: AddressLike,
  amount: bigint
): Promise<boolean | null> => {
  try {
    const allowance: bigint = await tokenContract.allowance(owner, spender);
    return allowance >= amount;
  } catch (e) {
    //console.error("Error checking allowance: ", e)
    return null;
  }
};

/**
 * @dev approve a contract to spend a user's ERC20 tokens
 * @param tokenContract the ethers contract instance of the token
 * @param spender the address of the contract to approve
 * @param amount the amount to approve
 * @returns transaction hash or null if error
 */
export const approveContract = async (
  tokenContract: ethers.Contract | Erc20,
  spender: AddressLike,
  amount: bigint
): Promise<string | null> => {
  try {
    const tx: ContractTransactionResponse = await tokenContract.approve(
      spender,
      amount
    );
    const receipt = await tx.wait();
    return receipt?.hash ?? null;
  } catch (e) {
    //console.error("Error approving contract: ", e)
    return null;
  }
};

/**
 * @dev get the user's ERC20 token balance
 * @param tokenContract the ethers contract instance of the token
 * @param user the user's address
 * @returns balance of the user as bigint or null if error
 */
export const getUserBalance = async (
  tokenContract: ethers.Contract | Erc20,
  user: AddressLike
): Promise<bigint | null> => {
  try {
    const balance: bigint = await tokenContract.balanceOf(user);

    return balance;
  } catch (e) {
    //console.error("Error getting user balance: ", e)
    return null;
  }
};
/**
 * @dev get the Bera Reserve token price
 * @param tokenContract the ethers contract instance of the token
 * @returns price of the token as bigint or null if error
 */
export const getTokenPrice = async (
  tokenContract: ethers.Contract | BeraReserveOlympusERC20Token
): Promise<bigint | null> => {
  try {
    const price: bigint = await tokenContract.beraReservePrice();

    return price;
  } catch (e) {
    return null;
  }
};

/**
 * @dev get the Bera Reserve token circulating supply
 * @param tokenContract
 * @returns circulating supply of the token as bigint or null if error
 */
export const getCirculatingSupply = async (
  tokenContract: ethers.Contract | BeraReserveOlympusERC20Token
): Promise<bigint | null> => {
  try {
    const supply: bigint = await tokenContract.totalSupply();
    return supply;
  } catch (e) {
    //console.error("Error getting circulating supply: ", e);
    return null;
  }
};

/**
 * @dev get the Bera Reserve token market cap
 * @param tokenContract
 * @returns  market cap of the token as bigint or null if error
 */
export const getMarketCap = async (
  tokenContract: ethers.Contract | BeraReserveOlympusERC20Token
): Promise<bigint | null> => {
  try {
    const marketCap: bigint = await tokenContract.marketCap();

    return marketCap;
  } catch (e) {
    // console.error("Error getting market cap: ", e);
    return null;
  }
};

/**
 * @dev get the Bera Reserve token market cap
 * @param tokenContract
 * @returns  market cap of the token as bigint or null if error
 */
export const getMaxTokenSupply = async (
  tokenContract: ethers.Contract | BeraReserveOlympusERC20Token
): Promise<bigint | null> => {
  try {
    const maxTokenSupply: bigint = await tokenContract.maxTokenSupply();

    return maxTokenSupply;
  } catch (e) {
    // console.error("Error getting market cap: ", e);
    return null;
  }
};

/**
 * @dev get the Bera Reserve token percentage of supply staked
 * @param stakingContract
 * @param tokenContract
 * @returns  percentage of supply staked as bigint or null if error
 */
export const getPercentageOfSupplyStaked = async (
  stakingContract: ethers.Contract | BeraReserveStaking,
  tokenContract: BeraReserveOlympusERC20Token
): Promise<bigint | null> => {
  try {
    const totalStaked: bigint = await stakingContract.totalStaked();
    const totalSupply = await getCirculatingSupply(tokenContract);

    if (totalSupply === null) {
      return null;
    }

    //calculate the percentage of supply staked
    const percentageStaked = (totalStaked * 100000000000n) / totalSupply;

    return percentageStaked;
  } catch (e) {
    //  console.error("Error getting percentage of supply staked: ", e);
    return null;
  }
};

export const getBondPriceInUSD = async (
  bondDepository: ethers.Contract | BeraReserveBondDepository
): Promise<bigint | null> => {
  try {
    const bondPrice = await bondDepository.bondPriceInUSD();

    return bondPrice;
  } catch (e) {
    //console.error("Error getting bond price: ", e);
    return null;
  }
};

export const getTotalStaked = async (
  stakingContract: ethers.Contract | BeraReserveStaking
): Promise<bigint | null> => {
  try {
    const totalStaked = await stakingContract.totalStaked();
    return totalStaked;
  } catch (e) {
    //console.error("Error getting total staked: ", e);
    return null;
  }
};

export const calculateAPR = async (
  sBeraContract: ethers.Contract | BeraReserveSOlympusERC20Token
): Promise<number | null> => {
  try {
    const rebasesLength = await sBeraContract.getRebasesLength();

    if (rebasesLength === 0n) {
      return 0;
    }

    console.log("rebaseLength", rebasesLength - 1n);

    const rebases: IRebase = await sBeraContract.rebases(rebasesLength - 1n);

    const formattedRebase = ethers.formatUnits(rebases.rebase, 18);

    console.log("formattedRebase", formattedRebase);
    console.log(
      "calculateEffectiveAPR",
      calculateEffectiveAPR(parseFloat(formattedRebase))
    );

    return calculateEffectiveAPR(parseFloat(formattedRebase));
  } catch (e) {
    return null;
  }
};

function calculateNumberOfBlocksPerDay(
  averageBlockTimeInSeconds: number = 12.07
) {
  // Calculate total time in seconds
  const blocksPerDay = (24 * 60 * 60) / averageBlockTimeInSeconds;

  return blocksPerDay;
}

function calculateNumberOfRebasesPerDay() {
  // Calculate total time in seconds
  const blocksPerDay = calculateNumberOfBlocksPerDay();

  const rebaseInterval = 2200;

  const rebasesPerDay = blocksPerDay / rebaseInterval;

  return rebasesPerDay;
}

function calculateNumberOfRebasesIn30Days() {
  const rebasesPerDay = calculateNumberOfRebasesPerDay();

  const rebasesIn30Days = rebasesPerDay * 30;

  return rebasesIn30Days;
}

function calculateEffectiveAPR(rebaseRate: number) {
  const rebasesIn30Days = calculateNumberOfRebasesIn30Days();

  const effectiveAPR = Math.pow(1 + rebaseRate, rebasesIn30Days) - 1;

  return effectiveAPR * 100;
}

export const getUserBondInfo = async (
  bondDepository: ethers.Contract | BeraReserveBondDepository,
  user: AddressLike
): Promise<IBondInfo | null> => {
  try {
    const bondInfo = await bondDepository.getBondInfo(user);

    return {
      amountBonded: bondInfo.amountBonded,
      payout: bondInfo.payout,
      vesting: bondInfo.vesting,
      lastBlock: bondInfo.lastBlock,
      pricePaid: bondInfo.pricePaid,
    };
  } catch (e) {
    return null;
  }
};
