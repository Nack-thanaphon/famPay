import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

interface ProgressProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => (
  <Box sx={{ width: "100%" }}>
    <LinearProgress variant="determinate" value={progress} />
  </Box>
);

export default ProgressBar;