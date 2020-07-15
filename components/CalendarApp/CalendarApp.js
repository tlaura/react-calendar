import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box } from "@material-ui/core";
import moment from "moment";

const getMonth = (dateObj) => moment(dateObj).format("MMMM");

const getNextMonth = (dateObj) =>
  moment(dateObj).add(4, "months").format("MMMM");

export default function CalendarApp() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [monthToDisplay, setMonthToDisplay] = useState(getMonth(currentDate));

  const nextMonth = getNextMonth(moment());

  return (
    <Box display="flex" flexDirection="row">
      <Calendar
        fromDateCalendar={true}
        currentDate={currentDate}
        month={monthToDisplay}
      ></Calendar>
      <Calendar
        toDateCalendar={true}
        currentDate={currentDate}
        month={nextMonth}
      ></Calendar>
    </Box>
  );
}
