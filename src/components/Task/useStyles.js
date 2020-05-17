import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(() => ({
  taskItem: {
    margin: 0,
  },
  taskText: {
    cursor: "pointer",
    width: "70%",
    wordBreak: "break-all",
  },
}));
