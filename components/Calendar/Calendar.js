import moment from "moment";
import React, { useState } from "react";
import { TableCell, Table, TableHead, TableBody, Box } from "@material-ui/core";
import Day from "../Day";
import DaysHeader from "../DaysHeader";
import Week from "../Week";
import { makeStyles } from "@material-ui/core/styles";
import MonthHeader from "../MonthHeader";

const useStyles = makeStyles({
  box: {
    width: 400,
    padding: 15,
  },
});

const firstDayOfMonth = (dateObj) =>
  moment(dateObj).startOf("month").format("d");

export default function Calendar({
  monthIndex,
  fromDateCalendar,
  toDateCalendar,
}) {
  const classes = useStyles();
  let index = monthIndex + 1;
  const monthFormatted = monthIndex < 10 ? `2020-0${index}` : `2020-${index}`;
  const month = moment(monthFormatted, "YYYY-MM");

  const daysBeforeMonthStart = firstDayOfMonth(month);
  let emptyCellsBeforeMonth = [];
  for (let i = 0; i < daysBeforeMonthStart; i++) {
    emptyCellsBeforeMonth.push(<TableCell key={i} />);
  }

  const daysInMonth = [];
  const daysInGivenMonth = month.daysInMonth();
  const dayObj = month.clone();
  const currentDate = moment();

  for (let i = 1; i <= daysInGivenMonth; i++) {
    dayObj.date(i);
    console.log(dayObj);
    const isBeforeCurrentDate = dayObj.isBefore(currentDate);

    // const handler = isAfterSelectedDate ? props.dayClickAfterHandler : props.dayClickHandler

    daysInMonth.push(
      <Day
        highlighted={!isBeforeCurrentDate}
        disabled={isBeforeCurrentDate}
        dayOfMonth={i}
        key={i + daysBeforeMonthStart}
        // handler={handler}
      ></Day>
    );
  }

  var totalSlots = [...emptyCellsBeforeMonth, ...daysInMonth];

  let weeks = [];
  for (let i = 0; i < totalSlots.length; i = i + 7) {
    const weekdays = totalSlots.slice(i, i + 7);
    weeks.push(<Week days={weekdays} index={i} key={i} />);
  }

  return (
    <Box className={classes.box}>
      <MonthHeader
        month={month}
        toDateCalendar={toDateCalendar}
        // TODO: here you should pass down the onClickHandler from props as a prop of MonthHeader
      ></MonthHeader>
      <Table>
        <TableHead>
          <DaysHeader></DaysHeader>
        </TableHead>
        <TableBody>{weeks}</TableBody>
      </Table>
    </Box>
  );
}
