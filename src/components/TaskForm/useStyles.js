import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(() => ({
  editTaskInput: {
    caretColor: "blue",
    lineHeight: "1.5",
    paddingRight: "30px",
    "& :focus": {
      color: "rgba(0,0,0,0.8)",
    },
  },
  form: {
    "& > div": {
      padding: 0,
    },
    width: "70%",
  },
}));
