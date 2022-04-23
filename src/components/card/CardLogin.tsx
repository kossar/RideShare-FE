import { Box, Button, Grid, Typography } from "@mui/material";

export default function CardLogin(props: { name: string; }) {
  return (
    <Box
    component={"div"}
    sx={{
      display: { xs: "flex" },
      flexDirection: {xs: 'column', md: 'row'},
      alignItems: "center",
      justifyContent: 'flex-end',
    }}
  >
    <Typography variant="body2" component={"p"} mr={1}>
      {props.name}
    </Typography>
    <Button title="Logi sisse" variant="contained" size="small">
          Logi sisse
        </Button>
  </Box>
    // <Grid container my={1}>
    //   <Grid item xs={4}>
    //     <Typography variant="body2" component={"p"}>
    //       {props.name}
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={8}>
    //     <Button title="Logi sisse" variant="contained" size="small">
    //       Logi sisse
    //     </Button>
    //   </Grid>
    // </Grid>
  );
}
