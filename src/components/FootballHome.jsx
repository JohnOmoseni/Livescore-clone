import React from "react";
import CenterContent from "./CenterContent";
import Top from "./Top";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Footer from "./Footer";

function FootballMain() {
  return (
    <>
      <Top />

      <main>
        <div className="layout-column-container">
          <LeftContent />
          <CenterContent />
          <RightContent />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default FootballMain;
