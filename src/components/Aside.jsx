import React from "react";
import { Link } from "react-router-dom";

import Whistle from "../assets/svgs/referee-svg.svg";

function Aside({ showAside, handleShowAside }) {
  return (
    <div id="sidebar" className={`${showAside && "show-aside"} sidebar-container`}>
      <div className="aside-content">
        <div className="close-sidebar" onClick={handleShowAside}>
          X
        </div>
        <h2 className="header">LiveScore</h2>
        <ul className="aside__nav-links">
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>What's New</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>FAQ</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>Advertise</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} alt="" />
              </span>
              <p>Mobile</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <img src={Whistle} />
              </span>
              <p>Privacy Notice</p>
            </Link>
          </li>
        </ul>
        <div className="download-mobile-app">
          <div className="img-box">
            <img src={Whistle} />
          </div>
          <p>Get instant Notification with the LiveScore app</p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
