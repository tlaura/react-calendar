import { TableCell, TableRow } from "@material-ui/core";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

const StyledTableRow = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableRow);

export default function DaysHeader() {
  let weekdayNames = moment
    .weekdaysShort()
    .map((day) => <TableCell key={day}>{day}</TableCell>);

  return <StyledTableRow>{weekdayNames}</StyledTableRow>;
}
