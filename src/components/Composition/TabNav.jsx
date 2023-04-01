import React from "react";

function TabNav({ id, activeTab, title, className, onTabSwitch }) {
  return (
    <li
      className={`${className} ${activeTab === id ? "active" : ""} `}
      onClick={() => onTabSwitch(id)}
    >
      {title}
    </li>
  );
}

export default TabNav;
