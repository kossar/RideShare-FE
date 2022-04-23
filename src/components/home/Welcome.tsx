import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Welcome(){
    return (
        <Container
        component="div"
        maxWidth="xl"
        sx={{ bgcolor: blue[500], py: 3, zIndex: 0 }}
      >
        <Container component="div" maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component="p" color="white">
                RideShare
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom component="p" color="white">
                Teretulemast sõidujagamise platvormile!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom component="p" color="white">
                Platvormi kasutamiseks
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: { xs: "flex" } }}>
                <Button
                  title="Logi sisse"
                  variant="contained"
                  size="medium"
                  sx={{ border: 1 }}
                  href="/identity/login"
                >
                  Logi sisse
                </Button>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="p"
                  color="white"
                  mx={2}
                  my={"auto"}
                >
                  või
                </Typography>
                <Button
                  title="Logi sisse"
                  variant="contained"
                  size="medium"
                  sx={{ border: 1 }}
                  href="/identity/register"
                >
                  Registreeru
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
}