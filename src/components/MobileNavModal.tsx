import { VscClose } from "react-icons/vsc";
import bear from "../assets/images/mobileNavBear.svg";
import { useDispatch } from "react-redux";
import { closeNavModal } from "../redux/features/navModalSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import discordLogo from "../assets/images/discord-logo.svg";
import xLogo from "../assets/images/x-logo.svg";

const MobileNavModal = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const navigate = useNavigate();

  const Menu = [
    { title: "Overview", path: "/overview", disabled: false },
    { title: "Stake", path: "/stake", disabled: false },
    { title: "Docs", path: "/docs", disabled: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeNavModal());
  };

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex ps-3 justify-start items-center z-[100] "
      onClick={handleCloseModal}
    >
      <div
        className="w-[330px]  bg-[#231a0f] rounded-xl p-2 md:py-6 md:px-6 text-white/[.5] font-thin z-[100]"
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center text-center mb-3 relative  text-amber-200 font-jollylogger text-2xl pt-5">
          <span
            className="absolute right-[-0.2rem] top-[-0.5rem] text-xl p-2"
            onClick={handleCloseModal}
          >
            <VscClose />
          </span>
          <ul className="space-y-6">
            {Menu.map((menuItem, index) => (
              <>
                <li
                  key={index}
                  className={`flex justify-center items-center w-full h-[64px] ${
                    isActive(menuItem.path)
                      ? 'bg-[url("./assets/images/activelink.svg")]'
                      : 'bg-[url("./assets/images/inactivelink.svg")]'
                  } bg-no-repeat bg-contain bg-center cursor-pointer`}
                  onClick={() => {
                    if (!menuItem.disabled) {
                      navigate(menuItem.path);
                       handleCloseModal();
                    }
                  }}
                >
                  <span> {menuItem.title} </span>
                </li>

                {index === Menu.length - 3 && (
                  <li
                    className={`${
                      isMenuExpanded
                        ? 'bg-[url("./assets/images/inactiveexpandedbutton.svg")] h-[110px] flex-col'
                        : 'bg-[url("./assets/images/inactivelink.svg")] h-[64px]'
                    } 
                            bg-no-repeat bg-center bg-contain cursor-pointer w-full flex justify-center items-center`}
                    onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                  >
                    <button
                      id="dropdownNavbarLink"
                      className="flex items-center justify-between  py-2 
                                px-3 md:p-0 md:w-auto"
                    >
                      Bond
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdownNavbar"
                      className={`z-10 ${isMenuExpanded ? "block" : "hidden"}`}
                    >
                      <ul
                        className="space-y-1"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li
                          className="bg-cover w-full  text-center"
                          onClick={() => {
                            navigate("/usdc-bond");
                            handleCloseModal();
                          }}
                        >
                          USDC Bond
                        </li>
                        <li
                          className="bg-cover w-full text-center"
                          onClick={() => {
                            navigate("/lp-bond");
                            handleCloseModal();
                          }}
                        >
                          BRR-WETH Bond
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </>
            ))}
          </ul>
          <div className="flex items-center justify-center  space-x-3  my-6">
            <img src={xLogo} alt="" />
            <img src={discordLogo} alt="" />
          </div>
          <div className="mx-auto ">
            <img src={bear} alt="" className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavModal;
