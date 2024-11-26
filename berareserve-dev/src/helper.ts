export const formatNumber = (arg: number): string => {
  return new Intl.NumberFormat("en-US").format(arg);
};

export const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2, // Set minimum decimal places to 4
  maximumFractionDigits: 2,
  useGrouping: true, // Ensures commas for thousands separators
});

export const formatterUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 3, // Adjust decimal places, 2 for cents
  minimumFractionDigits: 3,
  useGrouping: true, // Ensures commas for thousands separators
});

export const stripCurrency = (value: string): string => {
  // // Remove any characters that are not digits or commas
  // const numericString = value.replace(/[^\d,]/g, "");

  // const cleanedNumber = Number(numericString.replace(/,/g, ""));

  // return cleanedNumber.toString();

  // Remove the dollar sign
  let cleaned = value.replace(/^\$/, "");

  // Remove trailing zeros and potentially the decimal point if there's nothing significant after it
  cleaned = cleaned.replace(/\.?0+$/, "");

  return cleaned;
};

/**
 * Calculate the discount between a bond price and a market price.
 * @param marketPrice - The current market price of the asset.
 * @param bondPrice - The price of the bond.
 * @returns The discount as a percentage.
 */
export const calculateDiscount = (
  marketPrice: number,
  bondPrice: number
): number => {
  // Ensure the market price is greater than 0 to avoid division by zero
  if (marketPrice <= 0) {
    return 0;
  }

  // Calculate the discount as a percentage
  const discount = ((marketPrice - bondPrice) / marketPrice) * 100;

  if (discount < 0) {
    return 0;
  }

  // Return the discount
  return discount;
};
