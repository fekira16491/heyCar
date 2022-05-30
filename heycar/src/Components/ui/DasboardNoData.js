import { Box, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

/**
 *
 * @returns No data component
 */
const DashboardNoData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <Grid
        direction="column"
        align="center"
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          display: "flex",
          flexGrow: 4,
        }}
      >
        <Typography variant="h5">No reports </Typography>
        <Typography variant="h6" sx={{ width: "40%" }} component="h2">
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </Typography>
      </Grid>
      <Typography
        sx={{
          display: "flex",
          flexGrow: 1,
          color: "#005B96",
          fontSize: "17px",
        }}
        variant="h5"
      >
        Terms&Conditions | Privacy policy{" "}
      </Typography>
    </Box>
  );
};

export default DashboardNoData;
