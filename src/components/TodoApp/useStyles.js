import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../styles/sizes";
export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  grid: {
    maxHeight: "90%",
  },
  toolbar: {
    minHeight: 48,
    [sizes.down("sm")]: {
      minHeight: 12,
    },
  },
  card: {
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 13px 29px -20px rgba(0,0,0, 0.4)",
    [sizes.down("sm")]: {
      height: "85%",
    },
  },
}));
