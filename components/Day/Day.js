import { TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  body: {
    background: theme.palette.background.grey,
    width: 10,
  },
}))(TableCell);

export default function Day(props) {
  if (props.isBeforeCurrentDate) {
    return <StyledTableCell>{props.dayOfMonth}</StyledTableCell>;
  }
  return <TableCell>{props.dayOfMonth}</TableCell>;
}
