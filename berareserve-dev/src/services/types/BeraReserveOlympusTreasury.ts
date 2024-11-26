/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface BeraReserveOlympusTreasuryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "LiquidityDepositorQueue"
      | "LiquidityManagerQueue"
      | "LiquidityTokenQueue"
      | "OHM"
      | "ReserveManagerQueue"
      | "auditReserves"
      | "blocksNeededForQueue"
      | "bondCalculator"
      | "debtorBalance"
      | "debtorQueue"
      | "debtors"
      | "deposit"
      | "excessReserves"
      | "incurDebt"
      | "isDebtor"
      | "isLiquidityDepositor"
      | "isLiquidityManager"
      | "isLiquidityToken"
      | "isReserveDepositor"
      | "isReserveManager"
      | "isReserveSpender"
      | "isReserveToken"
      | "isRewardManager"
      | "liquidityDepositors"
      | "liquidityManagers"
      | "liquidityTokens"
      | "manage"
      | "manager"
      | "mintRewards"
      | "pullManagement"
      | "pushManagement"
      | "queue"
      | "renounceManagement"
      | "repayDebtWithOHM"
      | "repayDebtWithReserve"
      | "reserveDepositorQueue"
      | "reserveDepositors"
      | "reserveManagers"
      | "reserveSpenderQueue"
      | "reserveSpenders"
      | "reserveTokenQueue"
      | "reserveTokens"
      | "rewardManagerQueue"
      | "rewardManagers"
      | "sOHM"
      | "sOHMQueue"
      | "toggle"
      | "totalDebt"
      | "totalReserves"
      | "valueOf"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeActivated"
      | "ChangeQueued"
      | "CreateDebt"
      | "Deposit"
      | "OwnershipPulled"
      | "OwnershipPushed"
      | "RepayDebt"
      | "ReservesAudited"
      | "ReservesManaged"
      | "ReservesUpdated"
      | "RewardsMinted"
      | "Withdrawal"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "LiquidityDepositorQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "LiquidityManagerQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "LiquidityTokenQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ReserveManagerQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "auditReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blocksNeededForQueue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bondCalculator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "debtorBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "debtorQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "debtors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "excessReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incurDebt",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isDebtor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isLiquidityDepositor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isLiquidityManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isLiquidityToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReserveDepositor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReserveManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReserveSpender",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReserveToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRewardManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityDepositors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "manage",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintRewards",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pushManagement",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queue",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayDebtWithOHM",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayDebtWithReserve",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveDepositorQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveDepositors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveSpenderQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveSpenders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveTokenQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardManagerQueue",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sOHM", values?: undefined): string;
  encodeFunctionData(functionFragment: "sOHMQueue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "toggle",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "valueOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "LiquidityDepositorQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LiquidityManagerQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LiquidityTokenQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ReserveManagerQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auditReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blocksNeededForQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bondCalculator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtorQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "excessReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "incurDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDebtor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isLiquidityDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLiquidityManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLiquidityToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReserveDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReserveManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReserveSpender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityDepositors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pullManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayDebtWithOHM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayDebtWithReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveDepositorQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveDepositors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveSpenderQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveSpenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveTokenQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardManagerQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sOHM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sOHMQueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toggle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "valueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ChangeActivatedEvent {
  export type InputTuple = [
    managing: BigNumberish,
    activated: AddressLike,
    result: boolean
  ];
  export type OutputTuple = [
    managing: bigint,
    activated: string,
    result: boolean
  ];
  export interface OutputObject {
    managing: bigint;
    activated: string;
    result: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeQueuedEvent {
  export type InputTuple = [managing: BigNumberish, queued: AddressLike];
  export type OutputTuple = [managing: bigint, queued: string];
  export interface OutputObject {
    managing: bigint;
    queued: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateDebtEvent {
  export type InputTuple = [
    debtor: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    debtor: string,
    token: string,
    amount: bigint,
    value: bigint
  ];
  export interface OutputObject {
    debtor: string;
    token: string;
    amount: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    token: AddressLike,
    amount: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [token: string, amount: bigint, value: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipPulledEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipPushedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RepayDebtEvent {
  export type InputTuple = [
    debtor: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    debtor: string,
    token: string,
    amount: bigint,
    value: bigint
  ];
  export interface OutputObject {
    debtor: string;
    token: string;
    amount: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReservesAuditedEvent {
  export type InputTuple = [totalReserves: BigNumberish];
  export type OutputTuple = [totalReserves: bigint];
  export interface OutputObject {
    totalReserves: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReservesManagedEvent {
  export type InputTuple = [token: AddressLike, amount: BigNumberish];
  export type OutputTuple = [token: string, amount: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReservesUpdatedEvent {
  export type InputTuple = [totalReserves: BigNumberish];
  export type OutputTuple = [totalReserves: bigint];
  export interface OutputObject {
    totalReserves: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsMintedEvent {
  export type InputTuple = [
    caller: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [caller: string, recipient: string, amount: bigint];
  export interface OutputObject {
    caller: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    token: AddressLike,
    amount: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [token: string, amount: bigint, value: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BeraReserveOlympusTreasury extends BaseContract {
  connect(runner?: ContractRunner | null): BeraReserveOlympusTreasury;
  waitForDeployment(): Promise<this>;

  interface: BeraReserveOlympusTreasuryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  LiquidityDepositorQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  LiquidityManagerQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  LiquidityTokenQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  OHM: TypedContractMethod<[], [string], "view">;

  ReserveManagerQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  auditReserves: TypedContractMethod<[], [void], "nonpayable">;

  blocksNeededForQueue: TypedContractMethod<[], [bigint], "view">;

  bondCalculator: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  debtorBalance: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  debtorQueue: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  debtors: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  deposit: TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike, _profit: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  excessReserves: TypedContractMethod<[], [bigint], "view">;

  incurDebt: TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  isDebtor: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isLiquidityDepositor: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  isLiquidityManager: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  isLiquidityToken: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isReserveDepositor: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  isReserveManager: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isReserveSpender: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isReserveToken: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isRewardManager: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  liquidityDepositors: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  liquidityManagers: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  liquidityTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  manage: TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  manager: TypedContractMethod<[], [string], "view">;

  mintRewards: TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  pullManagement: TypedContractMethod<[], [void], "nonpayable">;

  pushManagement: TypedContractMethod<
    [newOwner_: AddressLike],
    [void],
    "nonpayable"
  >;

  queue: TypedContractMethod<
    [_managing: BigNumberish, _address: AddressLike],
    [boolean],
    "nonpayable"
  >;

  renounceManagement: TypedContractMethod<[], [void], "nonpayable">;

  repayDebtWithOHM: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  repayDebtWithReserve: TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  reserveDepositorQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  reserveDepositors: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  reserveManagers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  reserveSpenderQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  reserveSpenders: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  reserveTokenQueue: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  reserveTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  rewardManagerQueue: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  rewardManagers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  sOHM: TypedContractMethod<[], [string], "view">;

  sOHMQueue: TypedContractMethod<[], [bigint], "view">;

  toggle: TypedContractMethod<
    [_managing: BigNumberish, _address: AddressLike, _calculator: AddressLike],
    [boolean],
    "nonpayable"
  >;

  totalDebt: TypedContractMethod<[], [bigint], "view">;

  totalReserves: TypedContractMethod<[], [bigint], "view">;

  valueOf: TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [bigint],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "LiquidityDepositorQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "LiquidityManagerQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "LiquidityTokenQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "OHM"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ReserveManagerQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "auditReserves"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "blocksNeededForQueue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bondCalculator"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "debtorBalance"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "debtorQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "debtors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike, _profit: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "excessReserves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "incurDebt"
  ): TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isDebtor"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isLiquidityDepositor"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isLiquidityManager"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isLiquidityToken"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isReserveDepositor"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isReserveManager"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isReserveSpender"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isReserveToken"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRewardManager"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "liquidityDepositors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "liquidityManagers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "liquidityTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "manage"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mintRewards"
  ): TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pullManagement"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pushManagement"
  ): TypedContractMethod<[newOwner_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "queue"
  ): TypedContractMethod<
    [_managing: BigNumberish, _address: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceManagement"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "repayDebtWithOHM"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "repayDebtWithReserve"
  ): TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "reserveDepositorQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserveDepositors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "reserveManagers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "reserveSpenderQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserveSpenders"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "reserveTokenQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserveTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "rewardManagerQueue"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardManagers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "sOHM"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sOHMQueue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "toggle"
  ): TypedContractMethod<
    [_managing: BigNumberish, _address: AddressLike, _calculator: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalDebt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalReserves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "valueOf"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_amount: BigNumberish, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ChangeActivated"
  ): TypedContractEvent<
    ChangeActivatedEvent.InputTuple,
    ChangeActivatedEvent.OutputTuple,
    ChangeActivatedEvent.OutputObject
  >;
  getEvent(
    key: "ChangeQueued"
  ): TypedContractEvent<
    ChangeQueuedEvent.InputTuple,
    ChangeQueuedEvent.OutputTuple,
    ChangeQueuedEvent.OutputObject
  >;
  getEvent(
    key: "CreateDebt"
  ): TypedContractEvent<
    CreateDebtEvent.InputTuple,
    CreateDebtEvent.OutputTuple,
    CreateDebtEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipPulled"
  ): TypedContractEvent<
    OwnershipPulledEvent.InputTuple,
    OwnershipPulledEvent.OutputTuple,
    OwnershipPulledEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipPushed"
  ): TypedContractEvent<
    OwnershipPushedEvent.InputTuple,
    OwnershipPushedEvent.OutputTuple,
    OwnershipPushedEvent.OutputObject
  >;
  getEvent(
    key: "RepayDebt"
  ): TypedContractEvent<
    RepayDebtEvent.InputTuple,
    RepayDebtEvent.OutputTuple,
    RepayDebtEvent.OutputObject
  >;
  getEvent(
    key: "ReservesAudited"
  ): TypedContractEvent<
    ReservesAuditedEvent.InputTuple,
    ReservesAuditedEvent.OutputTuple,
    ReservesAuditedEvent.OutputObject
  >;
  getEvent(
    key: "ReservesManaged"
  ): TypedContractEvent<
    ReservesManagedEvent.InputTuple,
    ReservesManagedEvent.OutputTuple,
    ReservesManagedEvent.OutputObject
  >;
  getEvent(
    key: "ReservesUpdated"
  ): TypedContractEvent<
    ReservesUpdatedEvent.InputTuple,
    ReservesUpdatedEvent.OutputTuple,
    ReservesUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardsMinted"
  ): TypedContractEvent<
    RewardsMintedEvent.InputTuple,
    RewardsMintedEvent.OutputTuple,
    RewardsMintedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
    "ChangeActivated(uint8,address,bool)": TypedContractEvent<
      ChangeActivatedEvent.InputTuple,
      ChangeActivatedEvent.OutputTuple,
      ChangeActivatedEvent.OutputObject
    >;
    ChangeActivated: TypedContractEvent<
      ChangeActivatedEvent.InputTuple,
      ChangeActivatedEvent.OutputTuple,
      ChangeActivatedEvent.OutputObject
    >;

    "ChangeQueued(uint8,address)": TypedContractEvent<
      ChangeQueuedEvent.InputTuple,
      ChangeQueuedEvent.OutputTuple,
      ChangeQueuedEvent.OutputObject
    >;
    ChangeQueued: TypedContractEvent<
      ChangeQueuedEvent.InputTuple,
      ChangeQueuedEvent.OutputTuple,
      ChangeQueuedEvent.OutputObject
    >;

    "CreateDebt(address,address,uint256,uint256)": TypedContractEvent<
      CreateDebtEvent.InputTuple,
      CreateDebtEvent.OutputTuple,
      CreateDebtEvent.OutputObject
    >;
    CreateDebt: TypedContractEvent<
      CreateDebtEvent.InputTuple,
      CreateDebtEvent.OutputTuple,
      CreateDebtEvent.OutputObject
    >;

    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "OwnershipPulled(address,address)": TypedContractEvent<
      OwnershipPulledEvent.InputTuple,
      OwnershipPulledEvent.OutputTuple,
      OwnershipPulledEvent.OutputObject
    >;
    OwnershipPulled: TypedContractEvent<
      OwnershipPulledEvent.InputTuple,
      OwnershipPulledEvent.OutputTuple,
      OwnershipPulledEvent.OutputObject
    >;

    "OwnershipPushed(address,address)": TypedContractEvent<
      OwnershipPushedEvent.InputTuple,
      OwnershipPushedEvent.OutputTuple,
      OwnershipPushedEvent.OutputObject
    >;
    OwnershipPushed: TypedContractEvent<
      OwnershipPushedEvent.InputTuple,
      OwnershipPushedEvent.OutputTuple,
      OwnershipPushedEvent.OutputObject
    >;

    "RepayDebt(address,address,uint256,uint256)": TypedContractEvent<
      RepayDebtEvent.InputTuple,
      RepayDebtEvent.OutputTuple,
      RepayDebtEvent.OutputObject
    >;
    RepayDebt: TypedContractEvent<
      RepayDebtEvent.InputTuple,
      RepayDebtEvent.OutputTuple,
      RepayDebtEvent.OutputObject
    >;

    "ReservesAudited(uint256)": TypedContractEvent<
      ReservesAuditedEvent.InputTuple,
      ReservesAuditedEvent.OutputTuple,
      ReservesAuditedEvent.OutputObject
    >;
    ReservesAudited: TypedContractEvent<
      ReservesAuditedEvent.InputTuple,
      ReservesAuditedEvent.OutputTuple,
      ReservesAuditedEvent.OutputObject
    >;

    "ReservesManaged(address,uint256)": TypedContractEvent<
      ReservesManagedEvent.InputTuple,
      ReservesManagedEvent.OutputTuple,
      ReservesManagedEvent.OutputObject
    >;
    ReservesManaged: TypedContractEvent<
      ReservesManagedEvent.InputTuple,
      ReservesManagedEvent.OutputTuple,
      ReservesManagedEvent.OutputObject
    >;

    "ReservesUpdated(uint256)": TypedContractEvent<
      ReservesUpdatedEvent.InputTuple,
      ReservesUpdatedEvent.OutputTuple,
      ReservesUpdatedEvent.OutputObject
    >;
    ReservesUpdated: TypedContractEvent<
      ReservesUpdatedEvent.InputTuple,
      ReservesUpdatedEvent.OutputTuple,
      ReservesUpdatedEvent.OutputObject
    >;

    "RewardsMinted(address,address,uint256)": TypedContractEvent<
      RewardsMintedEvent.InputTuple,
      RewardsMintedEvent.OutputTuple,
      RewardsMintedEvent.OutputObject
    >;
    RewardsMinted: TypedContractEvent<
      RewardsMintedEvent.InputTuple,
      RewardsMintedEvent.OutputTuple,
      RewardsMintedEvent.OutputObject
    >;

    "Withdrawal(address,uint256,uint256)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}
