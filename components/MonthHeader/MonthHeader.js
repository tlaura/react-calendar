import { Typography, Box, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import moment from "moment";

export default function MonthHeader({
  month,
  toDateCalendar,
  handleNextMonthClick,
  handlePrevMonthClick
}) {
  const monthString = month.format("MMMM");

  return (
    <Box display="flex" justifyContent="center">
      {toDateCalendar && (
        <IconButton onClick={handlePrevMonthClick} data-testid="prevButton">
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Typography variant="h5">{monthString}</Typography>
      {toDateCalendar && (
        <IconButton onClick={handleNextMonthClick} data-testid="nextButton">
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}
