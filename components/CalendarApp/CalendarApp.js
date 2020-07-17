import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box, Button } from "@material-ui/core";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    background: "#80697c",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 20,
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

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
    if (date < selectedStartDate) {
      setSelectedStartDate(date);
    }
    if (date > selectedStartDate && date < selectedEndDate) {
      setSelectedEndDate(date);
    }
    if (date > selectedEndDate) {
      setSelectedEndDate(date);
    }
    if (selectedStartDate === undefined) {
      setSelectedStartDate(date);
      setSelectedEndDate(date.clone().add(1, "days"));
    }
  };

  const resetDates = () => {
    setSelectedStartDate(undefined);
    setSelectedEndDate(undefined);
  };

  return (
    <Box>
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
      <StyledButton onClick={resetDates}>
        Reset
      </StyledButton>
    </Box>
  );
}
