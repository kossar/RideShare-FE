import { Card, CardContent, Container } from "@mui/material";
import { useContext } from "react";
import AddStepper from "../../components/stepper/AddStepper";
import { AppContext } from "../../context/AppContext";

const TransportOfferCreateEdit = () => {
  const appState = useContext(AppContext);

  return (
    <Container maxWidth="sm" component="div">
      <Card sx={{ my: 6 }}>
        <CardContent>
            <AddStepper/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TransportOfferCreateEdit;
