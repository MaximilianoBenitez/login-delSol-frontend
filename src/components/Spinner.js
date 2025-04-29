import { CircularProgress } from "@mui/material";

const Spinner = ({ size = 24 }) => {
  return <CircularProgress size={size} color="inherit" />;
};

export default Spinner;
