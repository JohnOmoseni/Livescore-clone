import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import FixtureHeader from "../components/FixtureHeader";
import FixtureRow from "../components/FixtureRow";

import Events from "/events.json";
import useApiContext from "../Contexts/apiContext";

const popularCountries = ["England", "Spain", "Italy", "Germany", "France"];
const sortFunction = (a, b) => {
  const objA = a["country_name"];
  const objB = b["country_name"];
  return objA.localeCompare(objB);
};

const fetchEvents = (baseURL, apiKey) => {
  console.log("making fetch request");
  return axios.get(`${baseURL}?action=get_events&APIKey=${apiKey}`);
};

function useEventsQuery() {
  const { baseURL, apiKey } = useApiContext();
  const { data, error, isLoading, isError, isFetching } = useQuery("events", () =>
    fetchEvents(baseURL, apiKey)
  );
  const matches = data?.data ? data.slice(0, 71) : Events;

  let lastCategory = null;
  const rows = [];

  const first = matches
    .filter(event => popularCountries.includes(event.country_name))
    .sort(sortFunction);
  const second = matches
    .filter(event => !popularCountries.includes(event.country_name))
    .sort(sortFunction);

  //   console.log(first, second);

  first.map(event => {
    const { match_id, league_name } = event;

    if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

    rows.push(<FixtureRow key={match_id} event={event} />);
    lastCategory = event.league_name.toString();
  });
  second.map(event => {
    const { match_id, league_name } = event;

    if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

    rows.push(<FixtureRow key={match_id} event={event} />);
    lastCategory = event.league_name.toString();
  });

  return { data, error, isError, isLoading, rows };
}

export default useEventsQuery;
