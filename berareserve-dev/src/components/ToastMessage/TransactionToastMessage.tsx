import { useMediaQuery } from "usehooks-ts";

import pending from "../../assets/images/pending.png";
import information from "../../assets/images/information.png";
import close from "../../assets/images/close.png";
import "./styles.css";

interface ToastMessageProps {
  type: "pending" | "confirmed" | "success" | "failed";
  amount: string | number;
  action: () => void;
  closeToast: () => void;
  toastProps?: unknown;
  btnActive: boolean;
}

const TransactionToastMessage: React.FC<ToastMessageProps> = ({
  type = "pending",
  action,
  closeToast,
  btnActive,
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  let toastIcon;
  if (type === "pending") {
    toastIcon = pending;
  } else if (type === "confirmed") {
    toastIcon = confirm;
  } else if (type === "failed") {
    toastIcon = information;
  }

  return (
    <div
      className={`max-w-[600px] flex flex-col bg-transparent mb-0 p-6 ${
        isMobile ? "h-[146px]" : "h-[114px]"
      } ${type == "pending" && "pending"} ${
        type == "confirmed" && "transaction_success"
      } ${type == "failed" && "failed"}`}
    >
      <div
        className={`flex flex-row items-center justify-between ${
          isMobile ? "mb-3" : "mb-5"
        }`}
      >
        <div className="flex flex-row">
          <img
            src={toastIcon as string} // Fix: Update the type of toastIcon to be string
            alt="state"
            className="w-[20px] h-[20px] mr-2 mt-1"
          />
          <p className="text-sm text-white font-gothambook">
            Transaction implementation
          </p>
        </div>
        <button onClick={closeToast}>
          <img src={close} alt="close" className="w-[11px] h-[11px] " />
        </button>
      </div>

      <div className={`flex ${isMobile && "flex-col"} justify-between h-full`}>
        <p className="font-gothambook text-white mt-2 text-sm">
          <span className="text-[#95FFCF]">5 positions</span> sold for{" "}
          <strong> $6,600.00</strong>
        </p>

        {btnActive && (
          <button
            onClick={action}
            className={`w-[212px] h-[32px] border-2 border-[#83F1B080] font-gothambook text-[13px] text-white ${
              isMobile && "mt-4"
            }`}
          >
            View Txn on SEPOLIA
          </button>
        )}
      </div>
    </div>
  );
};

export { TransactionToastMessage };
