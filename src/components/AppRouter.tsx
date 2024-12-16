import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import OverviewPage from "../pages/Overview";
import USDCBondPage from "../pages/USDC-Bond";
import LPBondPage from "../pages/LPBond";
import StakePage from "../pages/Stake";
import DocsPage from "../pages/Docs";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Unstake from "../pages/Unstake";
import { useMediaQuery } from "usehooks-ts";

const AppRouter = () => {

 const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopNav />
              <main className="flex w-full  ">
               {!isTablet && <SideNav />}
                <div className=" mt-[150px] ml-5 md:ml-0   ">
                  <Outlet />
                </div>
              </main>
            </>
          }
        >  
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/usdc-bond" element={<USDCBondPage />} />
          <Route path="/lp-bond" element={<LPBondPage />} />
          <Route path="/stake" element={<StakePage />} />
          <Route path="/unstake" element={<Unstake />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/" element={<Navigate to="/overview" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
