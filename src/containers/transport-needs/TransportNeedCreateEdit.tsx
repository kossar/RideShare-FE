import { Card, CardContent, Container } from "@mui/material";
import { ReactElement, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationCreateEdit from "../../components/LocationCreateEdit";
import MainInfoCreateEdit from "../../components/MainInfoCreateEdit";
import AddStepper from "../../components/stepper/AddStepper";
import { CTransportNeeds } from "../../configuration";
import { AppContext } from "../../context/AppContext";
import { ILocation } from "../../dto/ILocation";
import { ITransportNeed } from "../../dto/ITransportNeed";
import { CreateInitialObjects } from "../../helpers/CreateInitialObjects";
import { BaseService } from "../../services/BaseService";

const steps = ["Alguskoht", "Sihtkoht", "Üldandmed", "Üle vaatamine"];
const initialTransportNeed = CreateInitialObjects.initTransportNeed();

const getStepItem = (
  activeStep: number,
  transportNeed: ITransportNeed,
  editStartLocation: (location: ILocation) => void,
  editDestinationLocation: (location: ILocation) => void,
  editTransportNeed: (transportNeed: ITransportNeed) => void
) => {
  console.log("Get step item");
  switch (activeStep) {
    case 0:
      return (
        <LocationCreateEdit
          location={transportNeed.startLocation}
          setLocation={editStartLocation}
        />
      );

    case 1:
      return (
        <LocationCreateEdit
          location={transportNeed.destinationLocation}
          setLocation={editDestinationLocation}
        />
      );
    default:
      return (
        <MainInfoCreateEdit
          transportNeed={transportNeed}
          setTransportNeed={editTransportNeed}
        />
      );
  }
};

const TransportNeedCreateEdit = () => {
  const appState = useContext(AppContext);
  const navigate = useNavigate();

  if (appState.auth.token == null) {
    navigate("/");
  }
  const [activeStep, setActiveStep] = useState(0);
  const [transportNeed, setTransportNeed] = useState(initialTransportNeed);

  const editStartLocation = (location: ILocation): void => {
    console.log("set start location");
    console.log(location);
    setTransportNeed({ ...transportNeed, startLocation: location });
    console.log(transportNeed);
  };

  const editDestinationLocation = (location: ILocation): void => {
    console.log("set destination location");
    console.log(location);
    setTransportNeed({ ...transportNeed, destinationLocation: location });
    console.log(transportNeed);
  };

  const editTransportNeed = (newTransportNeed: ITransportNeed): void => {
    console.log("set transportneed");
    setTransportNeed(newTransportNeed);
    console.log(newTransportNeed);
  };
  const stepItem = useCallback(() => {
    return getStepItem(
      activeStep,
      transportNeed,
      editStartLocation,
      editDestinationLocation,
      editTransportNeed
    );
  }, [
    activeStep,
    transportNeed,
    editStartLocation,
    editDestinationLocation,
    editTransportNeed,
  ]);

  const addItem = async () => {
    const transportNeedResult = await BaseService.post<ITransportNeed>(
      transportNeed,
      CTransportNeeds,
      appState.auth.token!
    );
    if (transportNeedResult.ok && transportNeedResult.data) {
      console.log("all added");
    }
  };
  return (
    <Container maxWidth="sm" component="div">
      <Card sx={{ my: 6 }}>
        <CardContent>
          <AddStepper
            steps={steps}
            stepItem={stepItem()}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default TransportNeedCreateEdit;
