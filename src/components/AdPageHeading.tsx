import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AdPageHeading = (props: {
  title: string;
  buttonName: string;
  uri: string;
}) => {
  const appState = useContext(AppContext);

  return (
    <Grid container mt={2}>
      <Grid item xs={12} md={7}>
        <Typography variant="h4" component="h1">
          {props.title}
        </Typography>
      </Grid>
      {appState.auth.token !== null ? (
        <Grid item xs={12} md={5} sx={{alignContent: 'center'}}>
          <Box sx={{ mt: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              title={props.buttonName}
              variant="contained"
              size="large"
              href={props.uri}
            >
              {props.buttonName}
            </Button>
          </Box>
        </Grid>
      ) : null}
    </Grid>
  );
};
export default AdPageHeading;
