import React from "react";
import { Link, NavLink } from "react-router-dom";

import Hamburger from "../assets/svgs/hamburger-menu-svg.svg";
import Football from "../assets/svgs/football-scores-active-svg.svg";
import Favorite from "../assets/svgs/favourites-active-svg.svg";
import News from "../assets/svgs/news-article-svg.svg";
import Download from "../assets/svgs/download-svg.svg";

import { BiFootball, BiStar } from "react-icons/bi";

function NavBar({ handleShowAside }) {
  return (
    <header id="top-menu">
      <div className="top-menu_container">
        <div className="home_top-menu-link column">
          <div className="hamburger-menu icon" onClick={handleShowAside}>
            <img src={Hamburger} alt="" />
          </div>
          <Link to="/scores/" className="livescore | fw-bold primary-header">
            LiveScore
          </Link>
        </div>
        <div className="top-menu-links">
          <NavLink to="/scores/football/" className="scores_top-menu-link column">
            <div className="score-icon">
              <BiFootball color="#ff5602" className="icon" />
            </div>
            <p className="fw-semi-bold">Scores</p>
          </NavLink>
          <NavLink to="/favorite" className="favorites_top-menu-link column">
            <div className="favorite-icon">
              <BiStar className="icon" />
            </div>
            <p className="fw-semi-bold">Favorites</p>
          </NavLink>
          <NavLink to="/news" className="news_top-menu-link column">
            <div className="news-icon icon">
              <img src={News} alt="" />
            </div>
            <p className="fw-semi-bold">News</p>
          </NavLink>
          <NavLink to="/get-the-app" className="get-the-app column">
            <div className="download-icon icon">
              <img src={Download} alt="" />
            </div>
            <p className="fw-semi-bold">Get the App</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
