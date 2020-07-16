import { Typography, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import moment from "moment";

export default function MonthHeader({ month, toDateCalendar }) {
  const monthString = month.format("MMMM");

  return (
    <Box display="flex" justifyContent="center" width="100%">
      {toDateCalendar && <ArrowBackIosIcon role="button"></ArrowBackIosIcon>}
      <Typography variant="h5">{monthString}</Typography>
      {toDateCalendar && (
        <ArrowForwardIosIcon role="button"></ArrowForwardIosIcon>
      )}
    </Box>
  );
}
