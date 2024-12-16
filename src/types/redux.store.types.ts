export interface IOverviewState {
  tokenPrice: string;
  totalSupply: string;
  marketCap: string;
  treasuryValue: string;
  percentageOfSupplyStaked: string;
}

export interface IUserBondInfo {
  balance: string;
  amountBonded: string;
  vestingPeriod: string;
  payout: string;
}

export interface IReloadState {
  isReload: boolean;
}

export interface IBondShareState {
  tokenPrice: string;
  remainingBrr: string;
  discount: string;
  bondPrice: string;
}

export interface IBondInfo {
  amountBonded: string;
  payout: string;
  vesting: string;
  lastBlock: string;
  pricePaid: string;
}
export interface IStakeShareState {
  totalStaked: string;
  apr: string;
  depositFee: string;
}

export interface IStakeInfo {
  amountStaked: string;
  //pendingRewards: string;
  brrBalance: string;
  sbrrBalance: string;
}

export interface IRebase {
  epoch: string;
  rebase: string;
  totalStakedBefore: string;
  totalStakedAfter: string;
  amountRebased: string;
  index: string;
  blockNumberOccured: string;
}

export interface IWarmupInfo {
  deposit: bigint;
  gons: bigint;
  expiry: bigint;
  lock: boolean;
}

export interface ILoaderState {
  isLoaded: boolean;
}

export interface ITerms {
  controlVariable: bigint;
  vestingTerm: bigint;
  minimumPrice: bigint;
  maxPayout: bigint;
  fee: bigint;
  maxDebt: bigint;
}
