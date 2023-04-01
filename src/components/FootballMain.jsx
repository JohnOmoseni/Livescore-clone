import LeftContent from "./LeftContent";
import { Outlet } from "react-router-dom";
import RightContent from "./RightContent";

function FootballMain() {
  return (
    <div className="layout-column-container">
      <LeftContent />

      <Outlet />

      <RightContent />
    </div>
  );
}

export default FootballMain;
