import React from "react";

function CalendarToday({ staticDate, month, year, onClickLeft, onClickRight }) {
  const [staticMonth, staticYear] = staticDate;

  return (
    <div className="match-calendar-today">
      <div className="today-date">
        <span className="fs-small">TODAY</span>
        <span className="fs-tiny">{`${staticMonth} ${staticYear}`}</span>
      </div>
      <div className="match-today-center">
        <div className="left-arrow prev" onClick={onClickLeft}>
          &lt;
        </div>
        <div className="today-date today">
          <span className="fs-small">{month}</span>
          <span className="fs-tiny">{year}</span>
        </div>
        <div className="right-arrow next" onClick={onClickRight}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default CalendarToday;
