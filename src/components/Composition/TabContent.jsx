import React from "react";

function TabContent({ id, activeTab, children }) {
  return (
    <>
      {activeTab === id ? <div className="tabs__info">{children}</div> : null}
    </>
  );
}

export default TabContent;
