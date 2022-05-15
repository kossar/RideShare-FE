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
    <Button title="Logi sisse" variant="contained" size="small" >
          Logi sisse
        </Button>
  </Box>
  );
}
