import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box } from "@material-ui/core";
import moment from "moment";

export default function CalendarApp() {

  const currentMonth = moment().month();

  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  const [monthIndexFromDateCalendar, setMonthIndexFromDateCalendar] = useState(
    currentMonth
  );
  const [monthIndexToDateCalendar, setMonthIndexToDateCalendar] = useState(
    currentMonth + 1
  );

  const handleNextMonthClick = () => {
    if (monthIndexToDateCalendar < 11) {
      setMonthIndexToDateCalendar(monthIndexToDateCalendar + 1);
    }
  };

  const handlePrevMonthClick = () => {
    if (monthIndexToDateCalendar > monthIndexFromDateCalendar + 1) {
      setMonthIndexToDateCalendar(monthIndexToDateCalendar - 1);
    }
  };

  const handleDayClick = (date) => {
    if (selectedStartDate === undefined) {
      setSelectedStartDate(date);
      setSelectedEndDate(date + 1);
    }
  };

  const handleDayClickAfterSelected = (date, monthInd) => {
    if(monthInd > monthIndexFromDateCalendar || (date > selectedStartDate && monthInd == monthIndexFromDateCalendar)) {
      setSelectedEndDate(date);
    } 
  }

  // handleDayClick (date) {  set the selectedDate, set the endDate to selectedDate + 1 day   }
  // handleDayClickAfterSelected (date) { set the endDate of the range }

  return (
    <Box display="flex" flexDirection="row">
      <Calendar
        toDateCalendar={false}
        monthIndex={monthIndexFromDateCalendar}
        handleDayClick={handleDayClick}
      ></Calendar>
      <Calendar
        toDateCalendar={true}
        monthIndex={monthIndexToDateCalendar}
        handleNextMonthClick={handleNextMonthClick}
        handlePrevMonthClick={handlePrevMonthClick}
        handleDayClick={handleDayClick}
      ></Calendar>
    </Box>
  );
}
