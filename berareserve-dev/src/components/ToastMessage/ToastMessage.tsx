import { useMediaQuery } from "usehooks-ts";
import confirm from "../../assets/images/confirm.png";
import pending from "../../assets/images/pending.png";
import information from "../../assets/images/information.png";
import close from "../../assets/images/close.png";
import "./styles.css";

interface ToastMessageProps {
  type: "pending" | "confirmed" | "failed";
  customMessage?: string;
  action: () => void;
  closeToast: () => void;
  toastProps?: {
    pendingMessage?: string;
    confirmedMessage?: string;
    failedMessage?: string;
  };
}

const ToastMessage: React.FC<ToastMessageProps> = ({
  type = "pending",
  customMessage,
  action,
  closeToast,
  toastProps,
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  let toastIcon, toastText;
  if (type === "pending") {
    toastIcon = pending;
    toastText = toastProps?.pendingMessage || "Pending";
  } else if (type === "confirmed") {
    toastIcon = confirm;
    toastText = toastProps?.confirmedMessage || "Confirmed";
  } else if (type === "failed") {
    toastIcon = information;
    toastText = toastProps?.failedMessage || "Failed";
  }

  return (
    <div
      className={`max-w-[600px] flex flex-col mb-0 p-6 ${
        isMobile ? "h-[146px]" : "h-[114px]"
      } ${type === "pending" && "pending"} ${
        type === "confirmed" && "confirmed"
      } ${type === "failed" && "failed"}`}
    >
      <div
        className={`flex flex-row justify-between ${
          isMobile ? "mb-3" : "mb-5"
        }`}
      >
        <div className="flex flex-row">
          <img
            src={toastIcon}
            alt="state"
            className="w-[16px] h-[16px] mr-2 mt-1"
          />
          <p className="text-sm font-bold text-white font-gothambook">
            {toastText}
          </p>
        </div>
        <button onClick={closeToast}>
          <img src={close} alt="close" className="w-[11px] h-[11px] " />
        </button>
      </div>

      <div
        className={`flex ${
          isMobile && "flex-col"
        } justify-between h-full font-jollylogger text-3xl`}
      >
        <p className="">
          <span className="font-bold text-[#f8cf1e]">{customMessage}</span>
        </p>

        <button
          onClick={action}
          className={`w-[212px] h-[32px] border-2 border-[#f8cf1e] font-gothambook text-[16px] text-white ${
            isMobile && "mt-4"
          }`}
        >
          View Txn on SEPOLIA
        </button>
      </div>
    </div>
  );
};

export { ToastMessage };
