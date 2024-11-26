import { VscClose } from "react-icons/vsc";
import bear from "../assets/images/modal-bear.png";

interface ModalProps {
  closeModal: () => void;
  amount: string;
  currency: string;
}

const UsdcModal = ({ closeModal, amount, currency }: ModalProps) => {
  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="w-1/3 bg-[#32291C] rounded-xl p-2 md:py-6 md:px-6 text-white/[.5] font-thin"
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center text-center text-white mb-6 relative">
          <span
            className="absolute right-[-1rem] top-[-1.5rem] text-xl p-2"
            onClick={closeModal}
          >
            <VscClose />
          </span>
          <p>Congratulations! You have purchased</p>
          <h1 className="text-[#EAB308] text-3xl font-semibold">
            {amount} {currency}
          </h1>
          <img className="mx-auto" src={bear} width={"60%"} alt="" />
          <div className="flex w-full items-center justify-center text-lg font-normal">
            <button
              onClick={closeModal}
              className="w-1/2 bg-[#EAB308] text-white py-3 rounded-md"
            >
              Bond more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsdcModal;
