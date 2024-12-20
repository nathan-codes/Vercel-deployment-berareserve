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

export interface BeraReserveSOlympusERC20TokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "INDEX"
      | "PERMIT_TYPEHASH"
      | "allowance"
      | "approve"
      | "balanceForGons"
      | "balanceOf"
      | "circulatingSupply"
      | "decimals"
      | "decreaseAllowance"
      | "getRebasesLength"
      | "gonsForBalance"
      | "increaseAllowance"
      | "index"
      | "initialize"
      | "initializer"
      | "manager"
      | "name"
      | "nonces"
      | "permit"
      | "pullManagement"
      | "pushManagement"
      | "rebase"
      | "rebases"
      | "renounceManagement"
      | "setIndex"
      | "setTreasury"
      | "stakingContract"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "treasury"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "LogRebase"
      | "LogStakingContractUpdated"
      | "LogSupply"
      | "OwnershipPulled"
      | "OwnershipPushed"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "INDEX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceForGons",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "circulatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRebasesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gonsForBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
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
    functionFragment: "rebase",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rebases",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasury",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "INDEX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceForGons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "circulatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRebasesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gonsForBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rebases", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogRebaseEvent {
  export type InputTuple = [
    epoch: BigNumberish,
    rebase: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [epoch: bigint, rebase: bigint, index: bigint];
  export interface OutputObject {
    epoch: bigint;
    rebase: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogStakingContractUpdatedEvent {
  export type InputTuple = [stakingContract: AddressLike];
  export type OutputTuple = [stakingContract: string];
  export interface OutputObject {
    stakingContract: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogSupplyEvent {
  export type InputTuple = [
    epoch: BigNumberish,
    timestamp: BigNumberish,
    totalSupply: BigNumberish
  ];
  export type OutputTuple = [
    epoch: bigint,
    timestamp: bigint,
    totalSupply: bigint
  ];
  export interface OutputObject {
    epoch: bigint;
    timestamp: bigint;
    totalSupply: bigint;
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

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BeraReserveSOlympusERC20Token extends BaseContract {
  connect(runner?: ContractRunner | null): BeraReserveSOlympusERC20Token;
  waitForDeployment(): Promise<this>;

  interface: BeraReserveSOlympusERC20TokenInterface;

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

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  INDEX: TypedContractMethod<[], [bigint], "view">;

  PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner_: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceForGons: TypedContractMethod<[gons: BigNumberish], [bigint], "view">;

  balanceOf: TypedContractMethod<[who: AddressLike], [bigint], "view">;

  circulatingSupply: TypedContractMethod<[], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getRebasesLength: TypedContractMethod<[], [bigint], "view">;

  gonsForBalance: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  index: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [stakingContract_: AddressLike],
    [boolean],
    "nonpayable"
  >;

  initializer: TypedContractMethod<[], [string], "view">;

  manager: TypedContractMethod<[], [string], "view">;

  name: TypedContractMethod<[], [string], "view">;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  permit: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  pullManagement: TypedContractMethod<[], [void], "nonpayable">;

  pushManagement: TypedContractMethod<
    [newOwner_: AddressLike],
    [void],
    "nonpayable"
  >;

  rebase: TypedContractMethod<
    [profit_: BigNumberish, epoch_: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  rebases: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        epoch: bigint;
        rebase: bigint;
        totalStakedBefore: bigint;
        totalStakedAfter: bigint;
        amountRebased: bigint;
        index: bigint;
        blockNumberOccured: bigint;
      }
    ],
    "view"
  >;

  renounceManagement: TypedContractMethod<[], [void], "nonpayable">;

  setIndex: TypedContractMethod<
    [_INDEX: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  setTreasury: TypedContractMethod<
    [newTreasury: AddressLike],
    [void],
    "nonpayable"
  >;

  stakingContract: TypedContractMethod<[], [string], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "INDEX"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PERMIT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner_: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceForGons"
  ): TypedContractMethod<[gons: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[who: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "circulatingSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRebasesLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gonsForBalance"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "index"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [stakingContract_: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
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
    nameOrSignature: "rebase"
  ): TypedContractMethod<
    [profit_: BigNumberish, epoch_: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rebases"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        epoch: bigint;
        rebase: bigint;
        totalStakedBefore: bigint;
        totalStakedAfter: bigint;
        amountRebased: bigint;
        index: bigint;
        blockNumberOccured: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceManagement"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIndex"
  ): TypedContractMethod<[_INDEX: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setTreasury"
  ): TypedContractMethod<[newTreasury: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakingContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "LogRebase"
  ): TypedContractEvent<
    LogRebaseEvent.InputTuple,
    LogRebaseEvent.OutputTuple,
    LogRebaseEvent.OutputObject
  >;
  getEvent(
    key: "LogStakingContractUpdated"
  ): TypedContractEvent<
    LogStakingContractUpdatedEvent.InputTuple,
    LogStakingContractUpdatedEvent.OutputTuple,
    LogStakingContractUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "LogSupply"
  ): TypedContractEvent<
    LogSupplyEvent.InputTuple,
    LogSupplyEvent.OutputTuple,
    LogSupplyEvent.OutputObject
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
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "LogRebase(uint256,uint256,uint256)": TypedContractEvent<
      LogRebaseEvent.InputTuple,
      LogRebaseEvent.OutputTuple,
      LogRebaseEvent.OutputObject
    >;
    LogRebase: TypedContractEvent<
      LogRebaseEvent.InputTuple,
      LogRebaseEvent.OutputTuple,
      LogRebaseEvent.OutputObject
    >;

    "LogStakingContractUpdated(address)": TypedContractEvent<
      LogStakingContractUpdatedEvent.InputTuple,
      LogStakingContractUpdatedEvent.OutputTuple,
      LogStakingContractUpdatedEvent.OutputObject
    >;
    LogStakingContractUpdated: TypedContractEvent<
      LogStakingContractUpdatedEvent.InputTuple,
      LogStakingContractUpdatedEvent.OutputTuple,
      LogStakingContractUpdatedEvent.OutputObject
    >;

    "LogSupply(uint256,uint256,uint256)": TypedContractEvent<
      LogSupplyEvent.InputTuple,
      LogSupplyEvent.OutputTuple,
      LogSupplyEvent.OutputObject
    >;
    LogSupply: TypedContractEvent<
      LogSupplyEvent.InputTuple,
      LogSupplyEvent.OutputTuple,
      LogSupplyEvent.OutputObject
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

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
