import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: '#81d4fa',
      },
      secondary: indigo,
    },
  });

  export default theme;