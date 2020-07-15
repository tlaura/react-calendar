import { Typography, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function MonthHeader(props) {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      {props.toDateCalendar && (
        <ArrowBackIosIcon role="button"></ArrowBackIosIcon>
      )}
      <Typography variant="h5">{props.month}</Typography>
      {props.toDateCalendar && (
        <ArrowForwardIosIcon role="button"></ArrowForwardIosIcon>
      )}
    </Box>
  );
}
