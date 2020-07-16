import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box } from "@material-ui/core";
import moment from "moment";

const getMonth = (dateObj) => moment(dateObj).format("MMMM");

const getNextMonth = (dateObj) =>
  moment(dateObj).add(1, "months").format("MMMM");

export default function CalendarApp() {
  // // TODO: change currentDate to selectedDate, add new peice of state that is the end date of the selected range

  const currentMonth = moment().month();
  const [selectedDate, setSelectedDate] = useState();
  const [monthIndexFromDateCalendar, setMonthIndexFromDateCalendar] = useState(
    currentMonth
  );
  const [monthIndexToDateCalendar, setMonthIndexToDateCalendar] = useState(
    currentMonth + 1
  );

  const handleNextMonthClick = () => {
    if(monthIndexToDateCalendar < 11) {
      setMonthIndexToDateCalendar(monthIndexToDateCalendar + 1);
    } 
  };

  const handlePrevMonthClick = () => {
    if(monthIndexToDateCalendar > monthIndexFromDateCalendar + 1) {
      setMonthIndexToDateCalendar(monthIndexToDateCalendar - 1);
    }
  }

  // create here your state update functions
  // e.g. handleNextMonthClick(), handlePreviousMonthClick()

  // create another update function - setSelectedDate
  // handleDayClick (date) {  set the selectedDate, set the endDate to selectedDate + 1 day   }
  // handleDayClickAfterSelected (date) { set the endDate of the range }

  return (
    <Box display="flex" flexDirection="row">
      <Calendar
        toDateCalendar={false}
        monthIndex={monthIndexFromDateCalendar}
      ></Calendar>
      <Calendar
        toDateCalendar={true}
        monthIndex={monthIndexToDateCalendar}
        handleNextMonthClick={handleNextMonthClick}
        handlePrevMonthClick={handlePrevMonthClick}
      ></Calendar>
    </Box>
  );
}
