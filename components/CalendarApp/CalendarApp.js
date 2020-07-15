import React, { useState } from "react";
import Calendar from "../Calendar";
import { Box } from "@material-ui/core";

export default function CalendarApp() {

  return (
    <Box display="flex" flexDirection="row">
      <Calendar fromDateCalendar={true}></Calendar>
      <Calendar toDateCalendar={true}></Calendar>
    </Box>
  );
}
