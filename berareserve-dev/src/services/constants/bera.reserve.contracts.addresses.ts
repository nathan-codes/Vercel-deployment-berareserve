import { BeraReserveContractNamesEnum } from "./enums";

// Modifying the type to accommodate multiple addresses for a contract.
type AddressOrAddresses = string | { [key: string]: string };

const beraReserveContractAddresses: Record<
  BeraReserveContractNamesEnum,
  AddressOrAddresses
> = {
  OlympusBondDepository: {
    USDC: "0x330963BF067AC9E2B9e952FD9940654130cf20F6", //"0x0288C58BD42106bC17fF62FE3BaF6dBe8387C55a",
    LP: "0xb90200C9b292e5a1C348baeb050c1dAF2D3f739a", //"0x1bf46bf31038e46eFd911Beb791Ac3563B2536d3",
  },
  OlympusERC20Token: "0x4058c8eFC500fdeeE1E46248aAA971f7fD75D9D3", //"0x99edff38B202A8DcC84823b4bbA46B6d7CCf6615",
  sOlympus: "0x7AED96A6473568ACa392FA775e7518E99bdFE35a", //"0x4cf5200b5d1274957b663bc0312FaC610aaaE665",
  OlympusStaking: "0x95627AD61D42393f91e12418d2758FbBEbF0Ed3b", //"0x3235eBde72D06aFB75ecFAEe2c2cC8C6A4af1897",
  OlympusTreasury: "0x5ef5F7C2AC2fE116b7e7Ada78185c04799F0B211", //"0x5dd71658e61bA7Bd6C12ebA4A0D56E498704d523",
  USDC: "0xdc1B669D10b82b1b2B2B4e2DE639C0a248d70649", //"0x482ff112AE0658a014978f53120A64E111e6bEdf",
  UniswapV2Pair: "0xE32b72450aC0A634eB6887c620c1fB0728a1D8D6", //"0x792521bde27e5E6857B16Efe1dA2916D884e7075",
};

// Modify the function to handle multiple address types
export const getBeraReserveContractAddress = (
  contractName: BeraReserveContractNamesEnum,
  bondType?: string // Optional additional parameter to specify the bond type for OlympusBondDepository
): string | null => {
  const addressOrAddresses = beraReserveContractAddresses[contractName];

  if (!addressOrAddresses) {
    return null;
  }

  if (typeof addressOrAddresses === "string") {
    return addressOrAddresses;
  }

  if (bondType && typeof addressOrAddresses === "object") {
    return addressOrAddresses[bondType] || null;
  }

  return null; // In case the bondType is not specified but required, or the key does not exist
};
