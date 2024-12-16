interface SecondaryButtonProps {
  buttonText: string;
  onClaimBondClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondaryButton = ({
  buttonText,
  onClaimBondClick,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClaimBondClick}
      className="bg-white  font-semibold flex items-center justify-center w-full border mt-3 rounded-lg py-3 border-none text-[#FC6173] "
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
