import { TableRow } from "@material-ui/core";

export default function Week(props) {
  return <TableRow key={props.index}>{props.days}</TableRow>;
}
