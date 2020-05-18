import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
export const useStyles = makeStyles(() => ({
  taskItem: {
    margin: 0,
  },
  taskText: {
    cursor: "pointer",
    width: "70%",
    wordBreak: "break-all",
    fontFamily: "Titillium Web",
  },
  editButton: {},
  deleteButton: {
    color: red[800],
  },
}));
