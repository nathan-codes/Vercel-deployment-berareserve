import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import discordLogo from "../assets/images/DiscordFooter.svg";
import xLogo from "../assets/images/Xfooter.svg";

const SideNav = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const navigate = useNavigate();

  const Menu = [
    { title: "Overview", path: "/overview", disabled: false },
    { title: "Stake", path: "/stake", disabled: false },
    { title: "Docs", path: "/docs", disabled: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-[250px]  p-2 pt-[150px]  text-white font-jollylogger text-2xl flex flex-col mr-10  ">
      <ul className="space-y-6">
        {Menu.map((menuItem, index) => (
          <React.Fragment key={index}>
            <li
              className={`flex justify-center items-center w-full h-[64px] ${
                isActive(menuItem.path)
                  ? 'bg-[url("./assets/images/activelink.svg")]'
                  : 'bg-[url("./assets/images/inactivelink.svg")]'
              } bg-no-repeat bg-contain bg-center cursor-pointer`}
              onClick={() => {
                if (!menuItem.disabled) {
                  navigate(menuItem.path);
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
                  className="flex items-center justify-between w-full py-2 
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownNavbar" className={`z-10 ${isMenuExpanded ? "block" : "hidden"}`}>
                  <ul className="space-y-1" aria-labelledby="dropdownLargeButton">
                    <li className="bg-cover w-full  text-center" onClick={() => navigate("/usdc-bond")}>
                      USDC Bond
                    </li>
                    <li className="bg-cover w-full text-center" onClick={() => navigate("/lp-bond")}>
                      BRR-WETH Bond
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className="flex flex-col gap-4 items-center fixed bottom-3  w-[230px]">
        <div className="flex gap-2">
          <img src={xLogo} alt="" />
          <img src={discordLogo} alt="" />
        </div>

        <small className="  mx-4 text-sm font-light font-sans text-white">© 2024 Bera Reserve</small>
      </div>
    </div>
  );
};

export default SideNav;
