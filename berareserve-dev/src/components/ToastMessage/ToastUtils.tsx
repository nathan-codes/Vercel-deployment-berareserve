import { toast } from "react-toastify";
import { ToastMessage } from "./ToastMessage";
import "./styles.css";
import { SellAllToastMessage } from "./SellAllToastMessage";
import { TransactionToastMessage } from "./TransactionToastMessage";

const showToast = (
  customText: string,
  type: "pending" | "confirmed" | "failed",
  txHash?: string
) => {
  // const isMobile = useMediaQuery('(max-width: 640px)');
  toast(
    <ToastMessage
      customMessage={customText}
      type={type}
      action={() => {
        if (txHash) {
          handleClick(txHash);
        }
        toast.dismiss(); // Close the toast if needed
      }}
      closeToast={toast.dismiss} // Close the toast using react-toastify's dismiss function
    />,
    {
      bodyStyle: { padding: "0px", margin: "0px" },
      bodyClassName: "test-toast-body",
      className: "test-container",
      position: "bottom-right",
      hideProgressBar: true,
      autoClose: 5000, // Adjust the duration as needed
      closeButton: false, // You can enable or disable the close button
      style: {
        padding: "0px",
        margin: "0px",
        marginBottom: "10px",
        // width: '600px', // Set the desired width
        // maxWidth: '600px',
        // height: isMobile ? "146px" : "114px"
      },
    }
  );
};
const handleClick = (hash: string) => {
  const url = `https://sepolia.etherscan.io/tx/${hash}`;
  window.open(url, "_blank");
};
const showSellAllToast = (
  amount: string | number,
  bosValue: string | number,
  type: "pending" | "confirmed" | "failed"
) => {
  // const isMobile = useMediaQuery('(max-width: 640px)');

  toast(
    <SellAllToastMessage
      amount={amount}
      bosValue={bosValue}
      type={type}
      action={() => {
        toast.dismiss(); // Close the toast if needed
      }}
      closeToast={toast.dismiss} // Close the toast using react-toastify's dismiss function
    />,
    {
      bodyStyle: { padding: "0px", margin: "0px" },
      bodyClassName: "test-toast-body",
      className: "test-container bg-[#448382]",
      hideProgressBar: true,
      position: "bottom-right",
      // autoClose: false, // Adjust the duration as needed
      autoClose: 5000, // Adjust the duration as needed
      closeButton: false, // You can enable or disable the close button
      style: {
        padding: "0px",
        margin: "0px",
        marginBottom: "10px",
        // width: '600px', // Set the desired width
        // maxWidth: '600px',
        // height: isMobile ? "146px" : "114px"
      },
    }
  );
};

const showTransactionToast = (
  amount: string | number,
  // bosValue: string | number,
  type: "pending" | "confirmed" | "failed"
) => {
  // const isMobile = useMediaQuery('(max-width: 640px)');

  toast(
    <TransactionToastMessage
      amount={amount}
      // bosValue={bosValue}
      type={type}
      action={() => {
        toast.dismiss(); // Close the toast if needed
      }}
      closeToast={toast.dismiss} // Close the toast using react-toastify's dismiss function
      btnActive={true}
    />,
    {
      bodyStyle: { padding: "0px", margin: "0px" },
      bodyClassName: "test-toast-body",
      className: "test-container",
      hideProgressBar: true,
      position: "bottom-right",
      // autoClose: false, // Adjust the duration as needed
      autoClose: 5000,
      closeButton: false, // You can enable or disable the close button
      style: {
        padding: "0px",
        margin: "0px",
        marginBottom: "10px",
        // width: '600px', // Set the desired width
        // maxWidth: '600px',
        // height: isMobile ? "146px" : "114px"
      },
    }
  );
};

export { showToast, showSellAllToast, showTransactionToast };
