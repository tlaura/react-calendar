import { TableCell, TableRow } from "@material-ui/core";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledTableRow = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableRow);

// const useStyles = makeStyles({yadayada})

export default function DaysHeader() {
  // const classes = useStyles()
  let weekdayNames = moment
    .weekdaysShort()
    .map((day) => <TableCell key={day}>{day}</TableCell>);

  return <StyledTableRow>{weekdayNames}</StyledTableRow>;
}
