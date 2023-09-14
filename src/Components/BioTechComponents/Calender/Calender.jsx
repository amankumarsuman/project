import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import "./Calender.scss";
//import timeGridPlugin from "@fullcalendar/timegrid";

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    title: "Rendezvous",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  },
  {
    title: "Dontiste",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19"),
  },
  {
    title: "Consultation",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
  },
  { title: "Visit", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
];

const Calender = ({propsEvents, color}) => {
  return (
    <div className="calenderContainer">
      <div className="calenderBody">
        <FullCalendar
          defaultView="dayGridMonth"
          themeSystem="Simplex"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin]}
          events={propsEvents ? propsEvents : events}
          displayEventEnd="true"
          eventColor={color ? color : "#" + Math.floor(Math.random() * 16777215).toString(16)}
          height="72vh"
        />
      </div>
    </div>
  );
};

export default Calender;
