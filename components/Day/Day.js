import { TableCell, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";

const DisabledTableCell = withStyles((theme) => ({
  body: {
    background: theme.palette.background.grey,
  },
}))(TableCell);

const HighlightedCell = withStyles((theme) => ({
  body: {
    background: theme.palette.background.highlighted,
  },
}))(TableCell);

export default function Day({
  dayObj,
  dayOfMonth,
  handleDayClick,
  selectedStartDate,
  selectedEndDate,
}) {
  const currentDate = moment();
  if (dayObj.isBefore(currentDate)) {
    return (
      <Button component={DisabledTableCell} disabled>
        {dayOfMonth}
      </Button>
    );
  }

  const handleClick = () => handleDayClick(dayObj);

  const isWithinSelectedDateRange =
    selectedStartDate &&
    dayObj.isSameOrAfter(selectedStartDate) &&
    dayObj.isSameOrBefore(selectedEndDate);
  if (isWithinSelectedDateRange) {
    return (
      <Button component={HighlightedCell} onClick={handleClick}>
        {dayOfMonth}
      </Button>
    );
  }

  return (
    <Button component={TableCell} onClick={handleClick}>
      {dayOfMonth}
    </Button>
  );
}
