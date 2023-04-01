import { useEffect, useState } from "react";
import useFetchContext from "../Contexts/FetchContext";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "../Reducers/fetchReducer";

const dt = new Date();
const currentDate = dt.getDate();
const dateID = dt.toISOString().split("T")[0];

function useFetch(event = "get_events") {
  const { state, dispatch } = useFetchContext();
  const [date, setDate] = useState(JSON.stringify(dateID));

  const baseURL = "https://apiv3.apifootball.com/";
  const apiKey = "9ea6519d1121d8462afef2cc60b975ddc7d3d43830301e59007dcd217bad944c";

  useEffect(() => {
    dispatch({ type: FETCH_REQUEST });
    console.log("making fetch request");

    fetch(`${baseURL}?action=${event}&from=${date}&to=${date}&APIKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, "request resolved successfully");
        dispatch({ type: FETCH_SUCCESS, payload: { events: data } });
      })
      .catch(error => {
        console.log(error.message, "heyyy! there was an error fetching data");
        dispatch({ type: FETCH_ERROR });
      });
  }, [event, date, setDate]);

  return [state, setDate];
}

export default useFetch;

export function makeFetchEventRequest(idx, constructDate, curr_date = currentDate) {
  const numDates = [curr_date - 2, curr_date - 1, curr_date, curr_date + 1, curr_date + 2];
  const dateID = numDates[idx];
  console.log(dateID);

  const { id } = constructDate(dateID);

  const baseURL = "https://apiv3.apifootball.com/";
  const apiKey = "9ea6519d1121d8462afef2cc60b975ddc7d3d43830301e59007dcd217bad944c";
  dispatch({ type: FETCH_REQUEST });

  fetch(`${baseURL}?action=get_events&from=${id}&to=${id}&APIKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data, "request resolved successfully");
      dispatch({ type: FETCH_SUCCESS, payload: { events: data } });
    })
    .catch(error => {
      console.log(error.message, "heyyy! there was an error fetching data");
      dispatch({ type: FETCH_ERROR });
    });
}
