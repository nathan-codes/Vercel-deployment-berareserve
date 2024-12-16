import logoLight from "../assets/images/newlogo.svg";
import mobileNav from "../assets/images/mobilelogonew.svg"
import { useMediaQuery } from "usehooks-ts";


//import wallet from "../assets/images/wallet.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import { openNavModal } from "../redux/features/navModalSlice";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MobileNavModal from "../components/MobileNavModal";

const TopNav = () => {
  
 const isNavModalOpen = useSelector(
   (state: RootState) => state.navModal.navModal_isOpen
 );

  const dispatch = useDispatch()

    const isTablet = useMediaQuery("(max-width: 1024px)");

  const handleOpenNavModal = () => {
      dispatch(openNavModal())
    }

  return (
    <div className="flex justify-between h-[110px] md:h-[9.5rem] lg:[h-15rem]  w-full bg-cover bg-bottom bg-no-repeat bg-[url('./assets/images/topnavbackground.svg')] fixed px-3 pt-2">
      <div className="flex  space-x-3  justify-center">
        <span>
          <button onClick={handleOpenNavModal}>
            {isTablet && (
              <RxHamburgerMenu size="1.8rem" className="text-[#1D1915]" />
            )}
          </button>
        </span>
        <Link to="/">
          <img src={!isTablet ? logoLight : mobileNav} width={"70%"} alt="" />
        </Link>
      </div>

      <div id="walet-btns">
        {/* <button type="button" className="text-white bg-[#FC6173] hover:bg-[#FC6173]/90 focus:outline-none 
                focus:ring-[#FC6173]/50 font-thin rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <img className="pr-3" src={ wallet } alt="" />
                    Connect Wallet
                </button> */}
        <ConnectButton label="Connect Wallet" chainStatus="name" />
      </div>
      {isNavModalOpen && <MobileNavModal />}
    </div>
  );
};

export default TopNav;
