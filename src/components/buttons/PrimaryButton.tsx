interface PrimaryButtonProps {
  buttonText: string;
  isBond?: boolean;
  onBuyBond_StakeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton = ({
  buttonText,
  onBuyBond_StakeClick,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onBuyBond_StakeClick}
      className="bg-[#EAB308] font-semibold flex items-center justify-center w-full border mt-3 rounded-lg py-3 border-none text-white "
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
