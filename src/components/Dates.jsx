import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Dates = ({ val, constructDate, index }) => {
  const { id, fullDate: array } = constructDate(val);
  const [day, ...otherDates] = array;
  const dtText = `${otherDates[0]} ${otherDates[1]}`;

  let dt = new Date();
  const curr_date = dt.getDate();

  const [fromDate, setFromDate] = useState(null);

  const { data, isLoading, error, refetch } = useQuery(
    ["events", fromDate],
    () => {
      const baseURL = "https://apiv3.apifootball.com/";
      const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

      console.log(`making fetch request for matches for ${fromDate}`);
      return axios.get(
        `${baseURL}?action=get_events&from=${fromDate}&to=${fromDate}&APIKey=${apiKey}}`
      );
    },
    {
      enabled: !!fromDate,
    }
  );
  console.log(fromDate);

  const handleClick = e => {
    const idx = e.currentTarget.dataset.idx;
    const numDates = [curr_date - 2, curr_date - 1, curr_date, curr_date + 1, curr_date + 2];
    const dateID = numDates[idx];

    const { id } = constructDate(dateID);
    setFromDate(id);
    refetch();
    console.log("yes", e.currentTarget.dataset.idx, dateID, id);
  };

  return (
    <div to="#" data-idx={index} onClick={e => handleClick(e)}>
      <span className="day | fs-small fw-bold">{otherDates[1] == curr_date ? "Today" : day}</span>
      <span className=" date | fs-tiny fw-semi-bold">{dtText}</span>
    </div>
  );
};

export default Dates;
