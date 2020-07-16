import { TableCell, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const DisabledTableCell = withStyles((theme) => ({
  body: {
    background: theme.palette.background.grey,
    color: theme.palette.common.white,
  },
}))(TableCell);

const HighlightedCell = withStyles((theme) => ({
  body: {
    background: theme.palette.common.main,
  },
}))(TableCell);

export default function Day({ highlighted, disabled, dayOfMonth, onClick }) {
  if (disabled) {
    return <Button component={DisabledTableCell}>{dayOfMonth}</Button>;
  }
  if (highlighted) {
    return <Button component={HighlightedCell}>{dayOfMonth}</Button>;
  }
  return <Button component={TableCell}>{dayOfMonth}</Button>;
}
