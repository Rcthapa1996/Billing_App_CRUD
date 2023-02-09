// Styles
import { Paper } from "@mui/material";
import Style from "./CardStyles.module.scss";

const CardWrapper = ({ children }) => {
  return (
    <Paper elevation={10} className={Style["card-wrapper"]}>
      {children}
    </Paper>
  );
};

export default CardWrapper;
