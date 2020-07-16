import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box } from "@material-ui/core";
import moment from "moment";

const getMonth = (dateObj) => moment(dateObj).format("MMMM");

const getNextMonth = (dateObj) =>
  moment(dateObj).add(1, "months").format("MMMM");



export default function CalendarApp() {
  // const [currentDate, setCurrentDate] = useState(moment());
  // const [monthToDisplay, setMonthToDisplay] = useState(getMonth(currentDate));
  // // TODO: change currentDate to selectedDate, add new peice of state that is the end date of the selected range

  // // these functions should use the state - monthToDisplay
  // const nextMonth = getNextMonth(moment());
  // const nextMonthIndex = moment().month() + 1;
  // const monthIndex = moment().month();

  const currentMonth = moment().month()
  const [selectedDate, setSelectedDate] = useState();
  const [monthToDisplayCalendarOne, setMonthToDisplayCalendarOne] = useState(currentMonth);
  const [monthToDisplayCalendarTwo, setMonthToDisplayCalendarTwo] = useState(currentMonth + 1);

  



  // create here your state update functions
  // e.g. handleNextMonthClick(), handlePreviousMonthClick()

  // create another update function - setSelectedDate
  // handleDayClick (date) {  set the selectedDate, set the endDate to selectedDate + 1 day   }
  // handleDayClickAfterSelected (date) { set the endDate of the range }

  return (
    <Box display="flex" flexDirection="row">
      <Calendar
        fromDateCalendar={true}
        monthIndex={monthToDisplayCalendarOne}
        // then pass your handler function as a prop here
        // e.g. handleNextMonthClick={handleNextMonthClick}
      ></Calendar>
      <Calendar
        toDateCalendar={true}
        monthIndex={monthToDisplayCalendarTwo}
      ></Calendar>
    </Box>
  );
}
