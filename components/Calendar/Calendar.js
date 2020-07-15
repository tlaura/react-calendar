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
    width: 500,
    padding: 10,
  },
});

const getMonth = (dateObj) => moment(dateObj).format("MMMM");

const firstDayOfMonth = (dateObj) =>
  moment(dateObj).startOf("month").format("d");

export default function Calendar(props) {
  const classes = useStyles();
  const [currentDate, setCurrentDate] = useState(moment());
  const [currentMonth, setCurrentMonth] = useState(getMonth(currentDate));

  const daysBeforeMonthStart = firstDayOfMonth(currentDate);
  let emptyCellsBeforeMonth = [];
  for (let i = 0; i < daysBeforeMonthStart; i++) {
    emptyCellsBeforeMonth.push(<TableCell key={i} />);
  }

  let daysInMonth = [];
  for (let i = 1; i <= currentDate.daysInMonth(); i++) {
    let isBeforeCurrentDate = i < currentDate.format("D") ? true : false;
    daysInMonth.push(
      <Day
        isBeforeCurrentDate={isBeforeCurrentDate}
        dayOfMonth={i}
        key={i + daysBeforeMonthStart}
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
      <MonthHeader month={currentMonth}></MonthHeader>
      <Table>
        <TableHead>
          <DaysHeader></DaysHeader>
        </TableHead>
        <TableBody>{weeks}</TableBody>
      </Table>
    </Box>
  );
}
