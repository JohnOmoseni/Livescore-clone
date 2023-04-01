import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CalendarIcon from "../assets/svgs/calendar-svg.svg";
import Calendar from "./Calendar";
import CalendarToday from "./CalendarToday";
import Dates from "./Dates";

const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dt = new Date();
let { month, year } = { month: dt.getMonth(), year: dt.getFullYear() };

const staticDate = [month_names[month], year];
const curr_date = dt.getDate();
const numDates = [curr_date - 2, curr_date - 1, curr_date, curr_date + 1, curr_date + 2];

function CalendarContainer({ triggerFetch, setFromDate }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState(month_names[month]);
  const [fullYear, setFullYear] = useState(year);

  useEffect(() => {
    const daysArray = generateCalendar(month, year);
    console.log(daysArray);
    setDays(daysArray);
  }, []);

  function handleSetDate(date) {
    console.log(date);
    if (showCalendar) setShowCalendar(false);
  }

  function handleLeftArrowClick(e) {
    --month;
    if (month < 0) {
      --year;
      month = month_names.length - 1;
    }
    const daysArray = generateCalendar(month, year);
    setDays(daysArray);
    setMonthName(month_names[month]);
    setFullYear(year);
  }
  function handleRightArrowClick(e) {
    ++month;
    if (month >= month_names.length) {
      ++year;
      month = 0;
    }
    const daysArray = generateCalendar(month, year);
    setDays(daysArray);
    setMonthName(month_names[month]);
    setFullYear(year);
  }

  function generateCalendar(month, year) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysArray = [];

    let currentDate = new Date();
    let firstDay = new Date(year, month, 1);

    for (let i = 0; i < daysInMonth[month] + firstDay.getDay(); i++) {
      if (i < firstDay.getDay()) {
        daysArray.push(null);
      } else if (i >= firstDay.getDay()) {
        const dayOne = i - firstDay.getDay() + 1;
        const dateID = `${year}-${month + 1}-${dayOne}`;

        let elem;
        elem = <div className="fs-tiny day">{dayOne}</div>;

        if (
          i - firstDay.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          elem = <div className="day current-date fs-tiny ">{dayOne}</div>;
        }
        daysArray.push(elem);
      }
    }
    return daysArray;
  }
  function constructDate(date) {
    const dtConstruct = new Date(year, month, date);
    const fullDate = dtConstruct.toDateString().split(" ").slice(0, 4);

    const isoDtString = new Date(year, month, date + 1).toISOString();
    const dateId = isoDtString.split("T")[0];

    return { id: dateId, fullDate };
  }

  const handleContainerClick = e => {
    if (e.target.matches(".match-today-center")) {
      setShowCalendar(false);
    }
  };

  return (
    <div className="match-row match-calendar" onClick={handleContainerClick}>
      <div className="match-row-content">
        {showCalendar ? (
          <CalendarToday
            staticDate={staticDate}
            month={monthName}
            year={fullYear}
            onClickLeft={handleLeftArrowClick}
            onClickRight={handleRightArrowClick}
          />
        ) : (
          <div className="live__dates">
            <Link to="#" className="match-calendar-live">
              <div className="live fw-semi-bold fs-small">
                Live<span></span>
              </div>
            </Link>
            <div className="dates">
              {numDates.map((val, idx) => {
                return (
                  <Dates
                    key={idx}
                    val={val}
                    constructDate={constructDate}
                    index={idx}
                    triggerFetch={triggerFetch}
                    setFromDate={setFromDate}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="calendar-icon" onClick={() => setShowCalendar(!showCalendar)}>
          <img src={CalendarIcon} alt="" />
          <div className="fs-tiny">caret</div>
        </div>
      </div>

      <Calendar showCalendar={showCalendar} days={days} handleSetDate={handleSetDate} />
    </div>
  );
}

export default CalendarContainer;
