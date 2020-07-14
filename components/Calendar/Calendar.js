import moment from "moment";
import React, { useState } from "react";
import { TableCell, Table, TableHead, TableBody } from "@material-ui/core";
import Day from "../Day";
import DaysHeader from "../DaysHeader";
import Week from "../Week";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    width: 300,
  },
});

const firstDayOfMonth = (dateObj) =>
  moment(dateObj).startOf("month").format("d");

export default function Calendar() {
  const classes = useStyles();
  const [currentDate, setCurrentDate] = useState(moment());

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
  let counter = 0;

  let weeks = [];
  for (let i = 0; i < totalSlots.length; i + 7) {
    const weekdays = totalSlots.slice(counter, counter + 7);
    weeks.push(<Week days={weekdays} index={i} />);
  }

  return (
    <div>
      <Table className={classes}>
        <TableHead>
          <DaysHeader></DaysHeader>
        </TableHead>
        <TableBody>{weeks}</TableBody>
      </Table>
    </div>
  );
}
