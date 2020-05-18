import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const useStyles = makeStyles(() => ({
  editTaskInput: {
    caretColor: "blue",
    lineHeight: "1.5",
    paddingRight: "30px",
    "& :focus": {
      color: grey[700],
    },
    fontFamily: "Titillium Web",
  },
  form: {
    "& > div": {
      padding: 0,
    },
    width: "70%",
    fontFamily: "Titillium Web",
  },
  clearButton: {
    color: grey[800],
  },
}));
