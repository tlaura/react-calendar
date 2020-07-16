import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
      grey: "#D3D3D3",
      header: "#658cc8",
      highlighted: "#CB95AA",
    },
  },
});

export default theme;
