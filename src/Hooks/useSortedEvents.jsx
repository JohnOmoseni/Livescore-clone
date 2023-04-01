import React, { useState } from "react";
import { useEventsContext } from "../Contexts/EventsContext";
import FixtureHeader from "../components/FixtureHeader";
import FixtureRow from "../components/FixtureRow";
import useFetch from "./useFetch";

const baseURL = "https://apiv3.apifootball.com/";
const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

const popularCountries = ["England", "Spain", "Italy", "Germany", "France"];
const sortFunction = (a, b) => {
  const objA = a["country_name"];
  const objB = b["country_name"];
  return objA.localeCompare(objB);
};

function useSortedEvents() {
  const [events, setEvents] = useEventsContext();

  const [state] = useFetch("get_events");
  const data = state?.data;
  const games = data && data.slice(0, 71);

  let lastCategory = null;
  const rows = [];

  const first = events
    .filter(event => popularCountries.includes(event.country_name))
    .sort(sortFunction);
  const second = events
    .filter(event => !popularCountries.includes(event.country_name))
    .sort(sortFunction);

  first.map((event, idx) => {
    const { match_id, league_name } = event;

    if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

    rows.push(<FixtureRow key={match_id} event={event} />);
    lastCategory = event.league_name.toString();
  });
  second.map((event, idx) => {
    const { match_id, league_name } = event;

    if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

    rows.push(<FixtureRow key={match_id} event={event} />);
    lastCategory = event.league_name.toString();
  });

  // let lastCategory = null;
  // const rows = [];

  // const first = matches
  //   .filter(event => popularCountries.includes(event.country_name))
  //   .sort(sortFunction);
  // const second = matches
  //   .filter(event => !popularCountries.includes(event.country_name))
  //   .sort(sortFunction);

  // //   console.log(first, second);

  // first.map((event, idx) => {
  //   const { match_id, league_name } = event;

  //   if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

  //   rows.push(<FixtureRow key={match_id} event={event} />);
  //   lastCategory = event.league_name.toString();
  // });
  // second.map((event, idx) => {
  //   const { match_id, league_name } = event;

  //   if (lastCategory !== league_name) rows.push(<FixtureHeader key={league_name} event={event} />);

  //   rows.push(<FixtureRow key={match_id} event={event} />);
  //   lastCategory = event.league_name.toString();
  // });

  return [rows, state];
}

export default useSortedEvents;
