import { Card, CardHeader, CardContent, Grid, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CardLogin from "./CardLogin";
import CardPriceText from "./CardPriceText";
import CardText from "./CardText";

const CardContainer = () => {
  const appState = useContext(AppContext);

  return (
    <Card sx={{ my: 2, p: 0 }}>
      <CardHeader
        sx={{ bgcolor: blue[700], py: 1, px: 2 }}
        component="div"
        title="Soov: 1 koht"
        titleTypographyProps={{ color: "white", typography: "h6" }}
        color="white"
        subheader="Lisatud: 26.04.2022"
        subheaderTypographyProps={{ color: "white", typography: "body2" }}
      />

      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardText
              name={"Alguskoht:"}
              content={"Tallinn, Harjumaa, Eesti"}
            />
            <CardText name={"Sihtkoht:"} content={"Tallinn, Harjumaa, Eesti"} />
            <CardText name={"Algusaeg:"} content={"27.04.2022 15:00"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "space-between" },
            }}
          >
            <CardPriceText name={"Hind:"} content={"10 €"} />
            {appState.auth.token === null ? (
              <CardLogin name="Vaatamiseks" />
            ) : (
              <Button title="Vaata"  variant="contained" size="medium" sx={{px: 4}}>Vaata</Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
