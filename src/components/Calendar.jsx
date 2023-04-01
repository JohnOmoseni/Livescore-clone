const Calendar = ({ showCalendar, days, handleSetDate }) => {
  return (
    <div id="calendar" className={`${showCalendar && "show"}`}>
      <div className="calendar-content">
        <div className="calendar-weekdays">
          <div className="fw-bold fs-small">SUN</div>
          <div className="fw-bold fs-small">MON</div>
          <div className="fw-bold fs-small">TUE</div>
          <div className="fw-bold fs-small">WED</div>
          <div className="fw-bold fs-small">THU</div>
          <div className="fw-bold fs-small">FRI</div>
          <div className="fw-bold fs-small">SAT</div>
        </div>
        <div className="calendar-days">
          {days.map((day, idx) => (
            <div key={idx} onClick={() => handleSetDate(days[idx].props.children)}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
