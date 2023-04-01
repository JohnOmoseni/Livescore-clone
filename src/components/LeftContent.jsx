import React, { useState, useEffect } from "react";
import CountryComponent from "./CountriesList";
import Events from "/events.json";
import {} from "react-icons";

import SearchIcon from "../assets/svgs/mobile-search-svg.svg";

const CountriesList = Events.map(
  ({
    league_name,
    country_name,
    country_logo,
    match_hometeam_name,
    match_awayteam_name,
    match_id,
  }) => {
    return {
      league_name,
      country_name,
      country_logo,
      match_hometeam_name,
      match_awayteam_name,
      id: match_id,
    };
  }
).reduce((final, obj) => {
  const foundObj = final.find(item => item.country_name === obj.country_name);

  if (foundObj) {
    return final;
  }
  return final.concat([obj]);
}, []);

// console.log(CountriesList);

function LeftContent() {
  const [countries, setCountries] = useState(CountriesList);
  const [search, setSearch] = useState("");
  const [isSearchSubmiited, setIsSearchSubmiited] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  useEffect(() => {
    const searchValue = search.toLowerCase().trim();
    if (searchValue === "") {
      setShowCancel(false);
      setCountries(CountriesList);
      return;
    }

    const filteredList = CountriesList.filter(({ country_name }) =>
      country_name.toLowerCase().includes(searchValue)
    );
    setCountries(filteredList);
    setShowCancel(true);
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    const country = search.toLowerCase();

    const filteredList = Events.filter(({ country_name }) =>
      country_name.toLowerCase().includes(country)
    ).map(
      ({
        league_name,
        country_name,
        country_logo,
        match_hometeam_name,
        match_awayteam_name,
        match_id,
      }) => {
        return {
          league_name,
          country_name,
          country_logo,
          match_hometeam_name,
          match_awayteam_name,
          id: match_id,
        };
      }
    );

    setIsSearchSubmiited(true);
    setCountries(filteredList);
  }

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <section id="content-left">
      <div className="left-column aside">
        <form className="search-bar" onSubmit={handleSearch}>
          {isSearchSubmiited ? (
            <span className="left-arrow">&lt;</span>
          ) : (
            <img className="icon search-icon" src={SearchIcon} />
          )}

          <input type="text" placeholder="Search..." value={search} onChange={handleInputChange} />
          {showCancel && (
            <span className="clear" onClick={() => setSearch("")}>
              X
            </span>
          )}
        </form>

        <div id="all-competitions">
          {countries.length === 0 && <p>There are no records to display</p>}
          <ul className="competitionsList">
            {countries.map((country, idx) => (
              <CountryComponent key={idx} country={country} onSubmit={isSearchSubmiited} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LeftContent;
