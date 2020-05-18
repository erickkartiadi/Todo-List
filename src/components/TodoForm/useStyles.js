import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
  },
  form: {
    borderRadius: "0.25rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  input: {
    marginLeft: "1rem",
    flex: 1,
    fontFamily: "Titillium Web",
    fontWeight: "bold",
  },
  divider: {
    height: "inherit",
    margin: 4,
  },
  iconButton: {
    "& svg": {
      color: "#3D9DF2",
    },
  },
}));
