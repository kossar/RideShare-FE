import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ITransportAdListItem } from "../../dto/ITransportAdListModel";
import { ToTextHelper } from "../../helpers/ToTextHelper";
import CardLogin from "./CardLogin";
import CardPriceText from "./CardPriceText";
import CardText from "./CardText";

export type ITransportAdCardProps = {
  transportAd: ITransportAdListItem;
};
const CardContainer = (props: ITransportAdCardProps) => {
  const appState = useContext(AppContext);
  const color = props.transportAd.isTransportNeed ? teal[700] : blue[700];

  const countText = props.transportAd.personSeatCount > 1 ? "kohta" : "koht";
  const adTitle = props.transportAd.isTransportNeed
    ? `Soov: ${props.transportAd.personSeatCount} ${countText}`
    : `Pakkumine: ${props.transportAd.personSeatCount} ${countText}`;

  return (
    <Card sx={{ my: 2, p: 0 }}>
      <CardHeader
        sx={{
          bgcolor: color,
          py: 1,
          px: 2,
          ".MuiCardHeader-subheader": { display: { xs: "none", md: "flex" } },
        }}
        component="div"
        title={adTitle}
        titleTypographyProps={{ color: "white", typography: "h6" }}
        color="white"
        subheader={`Lisatud: ${ToTextHelper.dateToText(
          props.transportAd.createdAt
        )}`}
        subheaderTypographyProps={{ color: "white", typography: "body2" }}
      />

      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardText
              name={"Alguskoht:"}
              content={props.transportAd.startLocationCity}
            />
            <CardText
              name={"Sihtkoht:"}
              content={props.transportAd.destinationLocationCity}
            />
            <CardText
              name={"Algusaeg:"}
              content={ToTextHelper.dateToText(props.transportAd.startAt)}
            />
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
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <CardPriceText
                name={"Hind:"}
                content={`${props.transportAd.price} €`}
              />
              <Typography
                variant="body2"
                component={"p"}
                mr={1}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                {`Lisatud: ${ToTextHelper.dateToText(
                  props.transportAd.createdAt
                )}`}
              </Typography>
            </Box>

            {appState.auth.token === null ? (
              <CardLogin name="Vaatamiseks" />
            ) : (
              <Box
                sx={{
                  display: { xs: "flex" },
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  title="Vaata"
                  variant="contained"
                  size="medium"
                  sx={{ px: 4 }}
                >
                  Vaata
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
