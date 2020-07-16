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
    /*
      if start date is undefined

      if date is before start date
         call one of those handleDayClick functions

      if date is after start and before end
          call one of those handleDayClick functions

      if date is after end
          call one of those handleDayClick functions

    */

    if (selectedStartDate === undefined) {
      setSelectedStartDate(date);
      setSelectedEndDate(date.clone().add(1, "days"));
    }
  };

  const handleDayClickAfterSelected = (date, monthInd) => {
    if (
      monthInd > monthIndexFromDateCalendar ||
      (date > selectedStartDate && monthInd == monthIndexFromDateCalendar)
    ) {
      setSelectedEndDate(date);
    }
  };

  return (
    <Box display="flex" flexDirection="row">
      <Calendar
        toDateCalendar={false}
        monthIndex={monthIndexFromDateCalendar}
        handleDayClick={handleDayClick}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      ></Calendar>
      <Calendar
        toDateCalendar={true}
        monthIndex={monthIndexToDateCalendar}
        handleNextMonthClick={handleNextMonthClick}
        handlePrevMonthClick={handlePrevMonthClick}
        handleDayClick={handleDayClick}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      ></Calendar>
    </Box>
  );
}
