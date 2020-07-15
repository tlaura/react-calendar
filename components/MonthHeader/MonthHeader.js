import { Typography, Box } from "@material-ui/core";

export default function MonthHeader(props) {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Typography variant="h5">{props.month}</Typography>
    </Box>
  );
}
