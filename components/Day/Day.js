import { TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  body: {
    background: theme.palette.background.grey,
    color: theme.palette.common.white,
  },
}))(TableCell);

export default function Day(props) {
  if (props.isBeforeCurrentDate) {
    return <StyledTableCell component="th" scope="row">{props.dayOfMonth}</StyledTableCell>;
  }
  return <TableCell component="th" scope="row">{props.dayOfMonth}</TableCell>;
}
