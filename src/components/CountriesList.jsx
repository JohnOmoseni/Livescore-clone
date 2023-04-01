import React from "react";
import { Link } from "react-router-dom";

function CountryComponent({ country, onSubmit }) {
  const {
    country_logo: logo,
    country_name: countryname,
    league_name: league,
    match_hometeam_name: home,
    match_awayteam_name: away,
    id,
  } = country;

  const replaceSpace = (name = "unknown") => name.toLowerCase().replace(/[/\ ]/g, "");

  return (
    <li>
      <Link
        to={`/scores/football/${replaceSpace(countryname)}/${replaceSpace(league)}`}
        state={{ countryname, league }}
      >
        <div className="flag">
          <img className="icon competition-logo" src="" alt="" />
        </div>
        <p className="competition-name fw-semi-bold">{!onSubmit ? countryname : league}</p>
      </Link>
    </li>
  );
}

export default CountryComponent;
