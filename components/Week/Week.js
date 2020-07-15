import { TableRow } from "@material-ui/core";
import React from "react";

export default function Week(props) {
  return <TableRow key={props.index}>{props.days}</TableRow>;
}
